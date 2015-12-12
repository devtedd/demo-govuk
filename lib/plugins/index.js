var inert = require('inert')

module.exports = function (server) {
  var errHandler = function (err) {
    if (err) {
      console.log('error', err)
      throw err
    }
  }

  require('./views')(server)

  server.register([inert], errHandler)
}
