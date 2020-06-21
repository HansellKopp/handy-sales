const http = require('http');
const express = require('express');
const path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'assets')));

const parameters = (req, res) => 
  res.json(
    require(path.join(__dirname,'store/mockups/parameters.json'))
  )

const products = (req, res) => 
  res.json(
    require(path.join(__dirname,'store/mockups/products.json'))
  )
  
const offers = (req, res) => 
  res.json(
    require(path.join(__dirname,'store/mockups/offers.json'))
  )

const tokenize = ( products ) => {
    const tokens = new Set()
    const regex = /[A-Z]{3,}/g; // '\b[A-Z]{3,}\b'
    products.forEach(element => {
        const words = element.description.match(regex)
        words.forEach(word => tokens.add(word))
    })
    return Array.from(tokens).sort()
}

const exist = (products) => products.filter(item => item.quantity > 0)

const allData = (req, res) => {
  const offers = require(path.join(__dirname,'store/mockups/offers.json'))
  const products = exist(require(path.join(__dirname,'store/mockups/products.json')))
  const parameters = require(path.join(__dirname,'store/mockups/parameters.json'))
  const tokens = tokenize(products)
  res.json({
    parameters,
    products,
    offers,
    tokens
  })
}

let api = express.Router();
api.route('/parameters').get(parameters)
api.route('/products').get(products)
api.route('/alldata').get(allData)

app.use('/api/v1', api)

var port = process.env.PORT || '5000';

app.set('port', port);

var server = http.createServer(app);

server.listen(port);

console.log('test server active port: 5000')