var server = require('./lib/server')

server.start(
  function () {
    console.log('Hapi server running at: ', server.info.uri)
  }
)
