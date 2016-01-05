var good = require('good')

var options = {
    opsInterval: 1000,
    reporters: [{
      reporter: require('good-console'),
      events: {
        log: '*',
        request: '*',
        response: '*',
        error: '*'
      }
    }]
}

module.exports = function (server) {
  function registerCallback (err) {
    if (err) {
      server.log('error', err)
      throw err
    }
  }

  server.register({
    register: good,
    options: options
  }, registerCallback)
}
