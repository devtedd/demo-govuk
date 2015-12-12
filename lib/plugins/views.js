var vision = require('vision')

module.exports = function (server) {
  server.register(vision, function (err) {
    if (err) {
      console.log('error', err)
      throw err
    }

    server.views({
      engines: {
        html: require('handlebars')
      },
      layout: true,
      relativeTo: __dirname,
      path: '../views',
      layoutPath: '../views/layout'
    })
  })
}
