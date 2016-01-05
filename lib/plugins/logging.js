var good = require('good')
var goodConsole = require('good-console')
var goodFile = require('good-file')
const logPath = 'logs'
const logRotation = 'daily'

// add in good-file when log files required, just use console for the time being
var options = {
  opsInterval: 1000,
  reporters: [{
    reporter: goodConsole,
    events: {
      log: '*',
      request: '*',
      response: '*',
      error: '*'
    }
  }, {
    reporter: goodFile,
    events: {
      log: 'info',
      request: '*',
      response: '*'
    },
    config: {
      path: logPath,
      prefix: 'server',
      rotate: logRotation
    }
  }, {
    reporter: goodFile,
    events: {
      log: 'error',
      error: '*'
    },
    config: {
      path: logPath,
      prefix: 'error',
      rotate: logRotation
    }
  }/*, {
    reporter: goodFile,
    events: {
      ops: '*'
    },
    config: {
      path: logPath,
      prefix: 'ops',
      rotate: logRotation
    }
  }*/]
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
