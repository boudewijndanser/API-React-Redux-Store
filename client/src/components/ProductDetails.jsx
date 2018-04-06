//client/src/components/ProductDetails.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProduct, updateProduct} from '../actions/products'
import ProductForm from './ProductForm'
import BuyProductButton from './BuyProductButton.js'
import './ProductDetails.css'

class ProductDetails extends PureComponent {

  state = {
    edit: false
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  componentWillMount(props) {
    this.props.fetchProduct(this.props.match.params.id)
  }

  updateProduct = (product) => {
    this.props.updateProduct(this.props.match.params.id, product)
    this.toggleEdit()
  }

  render() {
    const {product} = this.props
    if (!product) return 'Be patient...'
        const productImage = product.image
    if (!product) return null

    return (
      <div>
        {
          this.state.edit &&
          <ProductForm initialValues={product} onSubmit={this.updateProduct} />
        }

        {
          !this.state.edit &&
          <div>
            <button onClick={ this.toggleEdit }>edit</button>
            <h3>{ product.name }</h3>
           <h4>&euro; {product.price}.00</h4>
           <img src={productImage ? product.image : null} alt="" />
           <p>{product.description}</p>
           <BuyProductButton />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = function (state, props) {
  return {
    product: state.product
  }
}

export default connect(mapStateToProps, {fetchProduct, updateProduct})(ProductDetails)
