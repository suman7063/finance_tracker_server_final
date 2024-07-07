const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // Add /api prefix to match the redirect

const handler = (req, res) => {
    server(req, res);
};

module.exports.handler = handler;
