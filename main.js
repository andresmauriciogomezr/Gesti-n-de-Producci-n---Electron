const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url = require('url')

let win

function createWindow(){
	win = new BrowserWindow({
		width: 1000, 
		height : 700, 
		resizable: false,
		icon: __dirname + '/images/favicon.png'
	})
	win.loadURL(url.format({
		pathname : path.join(__dirname, 'index.html'),
		protocolo : 'file',
		slashes : true
	}))
}


app.on('ready', createWindow)