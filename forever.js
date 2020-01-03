let forever = require('forever'),
	child = new (forever.Monitor)('app.js', {
		max: 3,
		silent: false,
		options: []
	});

//child.on('exit', this.callback);
child.start();
forever.startServer(child);
