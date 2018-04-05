//client/src/App.js
import React, { Component } from 'react'
import ProductsList from './components/ProductsList'
import ProductDetails from './components/ProductDetails'
import './App.css';

// Temp products:

const products = [
  {
    id: 1,
    name: 'Handbag',
    price: 1450,
    image: 'https://images-na.ssl-images-amazon.com/images/I/41uZhaIt47L._US500_.jpg',
    description: 'This is a really expensive bag...'
  },
  {
    id: 5,
    name: 'Heater',
    price: 550,
    description: 'It is getting hot in here...'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <ProductsList />
        <ProductDetails />
      </div>
    )
  }
}

export default App;
