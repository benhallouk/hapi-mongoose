const Hapi = require('Hapi');
const Server = new Hapi.Server();

Server.connection({
    host: 'localhost',
    port: 3000
});

const Inert = require('Inert');
const Vision = require('Vision');

const Hoek = require('Hoek');

Server.register([Inert,Vision], (err)=> {
    Hoek.assert(!err, err);
    Server.views({
        engines: {
            html: require('handlebars')
        },
        path: './lib/templates'
    });
});

Server.ext('onPreResponse', (request,replay) => {
    if(request.response.isBoom){
        replay.view('error', request.response).code(400);
    }
});

const indexRoute = require('./lib/routes/index.server.route');
Server.route(indexRoute);

const todoRoute = require('./lib/routes/todo.server.route');
Server.route(todoRoute);

const Mongoose = require('Mongoose');
Mongoose.Promise = global.Promise;
console.log(process.env.DBConnection);
Mongoose.connect(process.env.DBConnection);

Server.start(() => {
    console.log('Started at ' + Server.info.uri);
});

module.exports = Server;
