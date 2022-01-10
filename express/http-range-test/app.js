const path = require('path');
const express = require('express');
const app = express();
const port = 3002;

app.use(express.static('public/html'));
app.use(express.static('public/scripts'));
app.use(express.static('public/css'));
app.use(express.static('public/music'));
app.use(express.json())                         // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('http range request'));
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/html/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/music/data.txt'));
});

app.get('/music', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/music/You-Boy.mp3'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
