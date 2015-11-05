var Hapi = require('hapi')
var routes = require('./routes')
var plugins = require('./plugins')

var server = new Hapi.Server()

server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 8080 // to pickup heroku use process.env.PORT
})

// register plugins
plugins(server)

// register routes
server.route(routes)

module.exports = server
