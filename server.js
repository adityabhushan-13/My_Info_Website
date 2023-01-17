const express=require('express');
const app=express();

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/index.html',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/Achievements.html',function(req,res){
    res.sendFile(__dirname + '/Achievements.html');
});

app.get('/Projects.html',function(req,res){
    res.sendFile(__dirname + '/Projects.html');
});

app.get('/Gallery.html',function(req,res){
    res.sendFile(__dirname + '/Gallery.html');
});

app.get('/Contacts.html',function(req,res){
    res.sendFile(__dirname + '/Contacts.html');
});




app.listen(3000, function () {
    console.log('Server started on port 3000');
});
  