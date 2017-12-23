const express = require('express');
const path = require('path');
const fs = require('fs')
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
// const router = require('./router.js');
const cors = require('cors');
const env = require('process-env');
// const env = require('./config/env.js')
// var Response = require('express-response');
// const corsOptions = {
//     origin: env.SERVER_HOST,
//     optionsSuccessStatus: 200
// }

// var options = {
//     key: fs.readFileSync(env.SSL_KEY_PATH),
//     cert: fs.readFileSync(env.SSL_CERT_PATH),
// };

//const corsOptions = { origin: true, optionsSuccessStatus: 200 }
// const port = process.env.PORT || env.SERVER_PORT;
env.set('path', './', true);
console.log(env.get('path'))
console.log(process.env.SERVER_PORT)
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, './')));
//app.use(cors(corsOptions));
app.use(cors({
    allowedHeaders: 'Content-Type,Authorization',
    methods: ['GET, POST, PUT, DELETE, OPTIONS'],
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('*', (req, res) => {
    res.send('wildcard endpoint ====== ');
    res.sendFile(path.resolve(__dirname, './index.html'));
    // res.redirect('./')
})

// const server = https.createServer(options, app)
app.listen(process.env.SERVER_PORT, function () {
    console.log('listening to port ', process.env.SERVER_PORT)
})
//const server = https.createServer(options, app)


// server.listen(3100, function () {
//     console.log("Express server listening on port " + port);
// });

