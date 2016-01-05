var inert = require('inert')
var logging = require('./logging')
var views = require('./views')

module.exports = function (server) {
  var errHandler = function (err) {
    if (err) {
      console.log('error', err)
      throw err
    }
  }

  server.register([inert], errHandler)

  logging(server)

  views(server)


}
