const ws = require('ws');

const wss = new ws.Server({
    port: 80
});

console.log('server started!');

wss.on('connection', () => {
    console.log('Client connected!');
});