'use strict';

const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

async function createWindow() {
    await installExtensions();
    mainWindow = new BrowserWindow({
        width: 800, height: 600, webPreferences: {
            devTools: true,
            webSecurity: false,
            allowRunningInsecureContent: true
        }
    });
    mainWindow.loadURL(process.env.NODE_ENV === 'development'? 'http://localhost:8080':`file://${__dirname}/dist/index.html`);
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = [
        'REACT_DEVELOPER_TOOLS',
        'REDUX_DEVTOOLS'
    ];
    return Promise
        .all(extensions.map(name => installer.default(installer[name], forceDownload)))
        .catch(console.log);
};


app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});