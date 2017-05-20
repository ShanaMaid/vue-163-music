var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();
app.use('/static', express.static('static'));
app.use('/api', proxy({
  target: 'http://music.163.com', 
  changeOrigin: true, 
  headers: {
    Referer: 'http://music.163.com/'
  }
}
));

app.use('/newapi', proxy({
  target: 'http://localhost:3006/', 
  changeOrigin: true, 
  pathRewrite: {'^/newapi' : '/'}
}
));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.listen(3000);