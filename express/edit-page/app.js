const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static('html'));
app.use(express.static('scripts'));

app.put('*', (req, res) => {
  console.log('editing happening');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
