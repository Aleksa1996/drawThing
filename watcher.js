let fs = require('fs');
let chokidar = require('chokidar');
let colors = require('colors/safe');

const http = require('http');
// Define our watching parameters
let basePath = process.cwd();
let pidPath = basePath + '/storage/logs/swoole_http.pid';
let pid = fs.readFileSync(pidPath, 'utf8');
let ready = false;

let logger = (color, message, level = 'log', skipSignal = false) => {
	console[level](colors[color](message));

	if (ready && !skipSignal) {
		sendSignal();
	}
};

let sendSignal = () => {
	http.get('http://10.10.10.11:80/restartSwoole.php', resp => {
		let data = '';
		// A chunk of data has been recieved.
		resp.on('data', chunk => {
			data += chunk;
		});

		// The whole response has been received. Print out the result.
		resp.on('end', () => {
			console.log(data);
		});
	});
};

logger('green', `PID ${pid} is alive, start watching process...`);
// Initialize watcher.
// Define your paths here.
let watcher = chokidar.watch([basePath + '/app', basePath + '/resources', basePath + '/routes'], {
	ignored: /(^|[\/\\])\../,
	persistent: true
});

// Add event listeners.
watcher
	.on('add', path => logger('yellow', `File ${path} has been added.`))
	.on('change', path => logger('yellow', `File ${path} has been changed.`))
	.on('unlink', path => logger('yellow', `File ${path} has been removed.`))
	.on('addDir', path => logger('yellow', `Directory ${path} has been added.`))
	.on('unlinkDir', path => logger('yellow', `Directory ${path} has been removed.`))
	.on('error', error => logger('red', `Watcher error: ${error}`))
	.on('ready', () => {
		logger('green', 'Initial scan is finished. Ready for watching changes...');
		ready = true;
	});
