const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');

const SERVER_PORT = 5001;

function createExpressServer() {
  const server = express();
  server.use(express.static(path.join(__dirname, 'dist', 'browser')));
  server.use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  server.listen(SERVER_PORT, () => {
    console.log(`Express server running at http://localhost:${SERVER_PORT}`);
  });
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadURL(`http://localhost:${SERVER_PORT}`);
}

app.whenReady().then(() => {
  createExpressServer();
  setTimeout(createWindow, 500); // Wait for server to start
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});