const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 9090;

app.use(express.static('client'));

//body-parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(port, () => console.log(`Server set up at ${port}`));
