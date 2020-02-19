import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
 //Сервис обработки ошибок недоступности блоков кода для лэша приложения.
//Подключение сервиса находиться в файле app.module :  providers: [{provide: ErrorHandler, useClass: GlobalErrorHandler}]
//ChunkLoadError: Loading chunk ... failed
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    
    handleError(error: any): void {
	const chunkFailedMessage = /Loading chunk [\d]+ failed/;
	
	if (chunkFailedMessage.test(error.message)) {
	    window.location.reload();
	}
    }
}
