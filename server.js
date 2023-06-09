const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080')
})

app.get('/', function(요청, 응답) { 
  응답.sendFile(__dirname +'/start.html')
})

app.get('/index.html', function(요청, 응답) { 
  응답.sendFile(__dirname +'/index.html')
})

app.get('/about.html', function(요청, 응답) { 
  응답.sendFile(__dirname +'/about.html')
})

app.get('/project.html', function(요청, 응답) { 
  응답.sendFile(__dirname +'/project.html')
})

app.get('/traffic_about.html', function(요청, 응답) { 
  응답.sendFile(__dirname +'//traffic_about.html')
})
app.get('/import.html', function(요청, 응답) { 
  응답.sendFile(__dirname +'/import.html')
})
app.get('/todoapp.html', function(요청, 응답) { 
  응답.sendFile(__dirname +'/todoapp.html')
})
app.get('/oncoding.html', function(요청, 응답) { 
  응답.sendFile(__dirname +'/oncoding.html')
})
app.get('/shopingmall.html', function(요청, 응답) { 
  응답.sendFile(__dirname +'/shopingmall.html')
})

app.get('/imgs', function(요청, 응답){
  fs.readFile('smile.jpg', function(error, data){
    응답.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
  })
})