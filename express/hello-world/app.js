const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/html/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
