const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 420,
    height: 550,
    resizable: false,
    autoHideMenuBar: true,
    show: true,
    center: true,
    webPreferences: {
      contextIsolation: false
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.openDevTools(); // Muestra errores si algo falla
}

app.whenReady().then(createWindow);
