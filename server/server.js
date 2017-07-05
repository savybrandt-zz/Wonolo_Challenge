var app = require('./routes');

var port = process.env.PORT;

app.listen(port, function() {
  console.log('Listening on port', port);
});


