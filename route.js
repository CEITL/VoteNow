//Include libs
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(webLib, webApp) {

      //Include folders
      webApp.use(webLib.static(__dirname + '/www'));
      webApp.use(webLib.static(__dirname + '/www/css'));
      webApp.use(webLib.static(__dirname + '/www/img'));
      webApp.use(bodyParser.json());
      webApp.use(bodyParser.urlencoded({ extended: false }));

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

      webApp.post('/recieve', function(req, res) {
            console.log(req.body);
            if(req.body.hasOwnProperty('name')) {
                  res.send('Hello ' + req.body.name);
            }
      });
}
