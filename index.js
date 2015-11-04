var Hapi = require('hapi')

var server = new Hapi.Server()
var port = process.env.PORT || 8080

server.connection({
  host: 'localhost',
  port: port
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('hello world')
  }
})

server.start(
  function (){
    console.log('Hapi server running at: ', server.info.uri)
  }
)
