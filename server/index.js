const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')

const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING
}, {
  tableName: 'products',
  timestamps: false
})

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})
app.use(bodyParser.json());

app.get('/products', (request, response) => {
 Product.findAll({
   attributes: ['id', 'name', 'price']
 })
 .then(products => {
   response.send({products})
 })
 .catch(err => {
   response.status(500).send({
     message: 'Product not found!'
   })
 })
})

app.get('/products/:id', (request, response) => {
 const productId = request.params.id
 Product.findById(productId)
 .then(result => {
   if (result) {
     response.send(result)
   } else {
     response.status(404).send({
       message: 'Product not found!'
     })
   }
 })
 .catch(err => {
   response.status(500).send({
     message: 'Error'
   })
 })
})

app.post('/products', (request, response) => {
  const product = request.body
  console.log(product);
  Product.create(product)
  .then(product => {
    response.status(201).end(`Product created: ${product.name}`)
  })
  .catch(err => {
    response.status(500).send({
      message: 'Error'
    })
  })
})
