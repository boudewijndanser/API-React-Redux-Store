//client/src/components/ProductDetails.jsx
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import BuyProductButton from './BuyProductButton.js'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/products'
import './ProductDetails.css'

    //show the price of the product in a paragraph tag with a euro-sign
//if the image is not null, show the image (using an img tag)
    //show the product description in a paragraph tag

    class ProductDetails extends PureComponent {
      static propTypes = {
        products: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          description: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired
        })).isRequired
      }
      componentWillMount(props) {
        this.props.fetchProduct(this.props.match.params.id)
      }
      render() {
        const {product} = this.props
        if (!product) return 'Be patient...'
        const productImage = product.image


        return (
          <div>
            <h1>{ product.name }</h1>
            <h2>&euro; {product.price}.00</h2>
            <img src={productImage ? product.image : null} alt="" />
            <p>{product.description}</p>
            <BuyProductButton />
          </div>
        )
      }
    }


    const mapStateToProps = function (state, props) {
  return {
    product: state.product
  }
}
export default connect(mapStateToProps,{fetchProduct})(ProductDetails)
