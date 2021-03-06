var admin = require('firebase-admin');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser') ;
var compression = require('compression');
var debug = require('debug')('stun-turn-heroku:server');
var http = require('http');
var https = require('https');
var Turn = require('node-turn');
var cors = require('cors');
var querystring = require('querystring');
const webPush = require('web-push');
const pushApiKeys = require( './dist/browser/assets/js/apiKeys.json');
const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');

// Fetch the service account key JSON file contents
var serviceAccount = require("./web-rtc-peer-firebase-adminsdk-9bb9v-93f85618dd.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://web-rtc-peer.firebaseio.com" ,
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.database();
const auth = admin.auth();

var app = express();
app.use(cors());
const DIST_FOLDER = path.join(process.cwd(), 'dist/browser');
app.set('views', DIST_FOLDER);
app.set('view engine', 'html');
app.engine('html', ngExpressEngine({
	bootstrap: AppServerModuleNgFactory,
	providers: [
		provideModuleMap(LAZY_MODULE_MAP)
	]
}));

app.use(compression({level : 9}));
app.use(bodyParser.json());
app.use(function(req, resp, next){
	if (req.headers['x-forwarded-proto'] === 'http') {
		return resp.redirect(301, 'https://' + req.headers.host + '/');
	} else {
		return next();
	}
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

webPush.setVapidDetails('mailto:sufiter@gmail.com', pushApiKeys.publicKey, pushApiKeys.privateKey)  ;

//-----------инициализация и запуск turn сервера------------------
var turn = new Turn({
	listeningPort : 3478,
	listeningIps : ['127.0.0.1'],
	authMech: 'none',
	debug : (res, str)=>{
		console.log('turnServer :'+ str)
	},
	credentials: {
		username: "password"
	}
});
turn.start();
//--------turn сервер запущен-------------------------

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

app.get('*.*', express.static(DIST_FOLDER, {
	maxAge: '1y',
	setHeaders : (res, path)=>{
		if(path.indexOf('service-worker.js') >= 0 ){
			res.setHeader('Cache-Control', 'max-age=0');
		}
		if(path.indexOf('.js') >= 0 ) {
			res.status(200);
			res.setHeader('Content-Type', 'text/javascript');
		}
	}
}));

//Управление данных для отправки sms сообщений
app.post('/send/sms', (req, res)=>{
	let body = req.body,
		icon = 'https://firebasestorage.googleapis.com/v0/b/web-rtc-peer.appspot.com/o/general%2Ficons%2Funnamed.png?alt=media&token=321af7e7-b979-48d6-ba99-04ce26b1ba8f';
	https.get(encodeURI(`https://smsc.ru/sys/send.php?login=sovizer&psw=siwa3475&phones=${body.phone}&mes=Видео вызов https://web-rtc-peer.herokuapp.com?uid=${body.to}&sender=${body.sender}&fileurl=${icon}&time=0&fmt=3`), (resp)=>{
		//Проблема в реализации функциональности передачи SMS  сообщений,
		//в качестве сигнализации при входящем вызове удаленного узла :
		//На сервисах отправки SMS не проходят ссылки  без заключения бесплатного договора
		// от имени юридического лица или ИП, и тогда будут проходить ссылки. Реализация ПРИОСТАНОВЛЕНА в этом месте.
		//todo Реализовать анализ ответа,
		// ответ пользователю в зависимости от результата и убрать заглушку
		if(true){
			setAccount({account : db.ref(`/sms/${body.from}`), date : body.date, sum : -3.000});
		}
	});
	res.status(200).end();
}) ;
function setAccount(prop){
	//Списание средств со счета пользователя
	prop.account.once('value', res => {
		let val = res.val() || {payments : {}, sum : 0};
		val.payments[prop.date] = prop.sum;
		val.sum = Object.values(val.payments).reduce((pr, cur)=> (parseFloat(pr) + parseFloat(cur)).toFixed(2)) ;
		prop.account.set(val);
	});
	//----------конец списания---------------------
}
//Уведомление о принятом платеже
app.post('/payment-notification', (req, resp)=>{
	  if(!req.body['test_notification']){
	  	let amount = req.body['amount'],
			mess = req.body['label'].split('/');
	  	//uid/sum/current/date(milliseconds)
		  console.log(mess);
		  setAccount({account : db.ref(`/sms/${mess[0]}`), date : mess[3], sum :  amount}) ;
	  }
	  resp.status(200).end();
});
app.post('/notification', (req, resp)=>{
	db.ref('/users/' + req.body.contact.uid + '/pushSubscription').once('value').then(res => {
		let subscription = res.val();
		webPush.sendNotification(subscription, JSON.stringify(req.body))
			.then(res => {
				resp.json('Уведомление направлено контакту ' + req.body.contact.uid)
			})
			.catch((err) => {
					resp.send(`Объект подписки пользователя ${req.body.contact.uid} не действителен.`)
			});
	}).catch(err => {
		resp.send('Ошибка при получении объекта подписки на получение уведомлений.');
		}
	)
}) ;

app.get('*', (req, res) => {
	res.render('index.html', { req });
});


//------------------sms-----------------------------

function normalizePort(val) {
	var port = parseInt(val, 10);
	
	if (isNaN(port)) {
		// named pipe
		return val;
	}
	
	if (port >= 0) {
		// port number
		return port;
	}
	
	return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}
	
	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port;
	
	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string'
		? 'pipe ' + addr
		: 'port ' + addr.port;
	debug('Listening on ' + bind);
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err) ;
  // render the error page
	res.end();
});

module.exports = app;
