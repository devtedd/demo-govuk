var Hapi = require('hapi')

var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000
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
