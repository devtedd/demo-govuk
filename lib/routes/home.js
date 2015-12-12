module.exports = {
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    //reply.file('./public/html/demo.html')
    reply.view('index')
  }
}
