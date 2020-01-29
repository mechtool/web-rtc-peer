window.beforeInstall = false;
//Обработка события установки приложения на экран устройства
window.addEventListener("onbeforeinstallprompt", (beforeInstallPromptEvent) => {
	//Управление переходит в этот обработчик, если приложение еще не установлено на экран (каждый раз)
	//и не переходит, когда приложение уже установлено
	beforeInstallPromptEvent.preventDefault(); // Предотвратить немедленный запуск отображения диалога
	window.beforeInstall = beforeInstallPromptEvent;
});
//прослушивание события 'appinstall' для определения установки приложения на экран устройства
window.addEventListener("onappinstalled", (evt) => {
	//Управление переходит в этот обработчик сразу (next tick) после принятия
	//предложения об установки приложения один раз и больще никогда не переходит.
	//приложение уже установлено на экран устройства
	window.beforeInstall = false;
});
