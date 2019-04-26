const data = require('./data/artists.json');
const express = require('express');
const app = express();

app.set('trust proxy', 'loopback'); // express behind proxies
app.set('view engine', 'pug'); // view engine setup

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/charles', (req, res) => {
  res.render('main', data.artist[0]);
});

app.get('/marilyn', (req, res) => {
  res.render('main', data.artist[1]);
});

app.get('/jean', (req, res) => {
  res.render('main', data.artist[2]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
