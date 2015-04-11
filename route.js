module.exports = function(webApp) {
     webApp.get('/', function(req, res) {
           res.send('Hello World');
     });
}
