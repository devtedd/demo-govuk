var server = require('./lib/server')

server.start(
  function (err) {
    if(err){
      server.log('error', err)
    }
    server.log('info', 'Hapi server running at: ' + server.info.uri)
  }
)
