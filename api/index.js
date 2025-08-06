const serverless = require('serverless-http');
const app = require('../backend/server'); // asegurarte que server.js exporte app, no haga listen

module.exports = serverless(app);
