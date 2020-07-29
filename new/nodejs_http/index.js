'use strict';

const http = require('http');
const server = http
	.createServer((req, res) => {
		console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);
		res.writeHead(200, {
			'Content-Type': 'text/html; charset=utf-8'
		});

		switch(req.method){
			case 'GET':
				res.write('GET ' + req.url);
				break;
			case 'POST':
				res.write('POST ' + req.url);
				let rawData = '';
				req.on('data', (chunk) => {
					rawdData += chunk;
				}).on('end', () => {
					console.info('[' + new Date() + '] Data posted: ' + rawData);
				});
				break;
			default:
				break;
		}

		res.end();
	}).on('error', e => {
		console.error('[' + new Date() + '] Server Error', e);
	}).on('clientError', e => {
		console.error('[' + new Date() + '] ClientError', e);
	});


const port = 8000;
server.listen(port, () => {
	console.log('Listening on ' + port);
});
