const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, resp, next) => {
    console.log(req.body)
    resp.send('<h1>Parabéns<h1>')
})

app.listen('3003')