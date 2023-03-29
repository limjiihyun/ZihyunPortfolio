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