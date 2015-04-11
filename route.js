//Include libs
var path = require('path');

module.exports = function(webLib, webApp) {

      //Include folders
      webApp.use(webLib.static(__dirname + '/www'));
      webApp.use(webLib.static(__dirname + '/www/css'));
      webApp.use(webLib.static(__dirname + '/www/img'));

      webApp.get('/', function(req, res) {
            res.sendFile('index.html');
      });

      webApp.get('*', function(req, res) {
            res.status(404)
                  .sendFile(
                        path.join(
                              __dirname,
                              '/www/error',
                              '404.html'
                        )
                  );
      });
}
