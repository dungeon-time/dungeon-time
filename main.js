const { app, BrowserWindow } = require('electron');

function createWindow () {
  // create the browser window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // load the index.html of the app.
  win.loadFile('index.html');

  // open dev tools
  win.webContents.openDevTools();
}

// called when Electron has finished initialization and is ready to create browser windows
// some APIs can only be used after this event occurs
app.whenReady().then(createWindow);

// quit when all windows are closed, except on macOS. There, it's common for applications and their
// menu bar to stay active until the user quits explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
	// on macOS it's common to re-create a window in the app when the dock icon is clicked and there are no
	// other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
