const cluster = require('cluster');

// Is the file being executed in master mode?
if (cluster.isMaster) {
//    cause index.js to ve executed *again* but in child mode
    cluster.fork();
//    cluster.fork();
//    cluster.fork();
//    cluster.fork();
} else {
//    I'm a child, I'm going to act like a server and do noting else
    const express = require('express');
    const app = express();

    function doWork(duration) {
        const start = Date.now();
        while (Date.now() - start < duration) {

        }
    }

    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi there');
    });

    app.get('/fast', (req, res) => {
        res.send('This was fast!');
    });

    app.listen(3000);
}