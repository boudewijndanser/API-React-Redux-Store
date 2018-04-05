//client/src/components/ProductDetails.jsx
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import BuyProductButton from './BuyProductButton.js'
import {connect} from 'react-redux'

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

      render() {
        const {product} = this.props
        const productImage = this.props.image
        return (
          <div>
            <h1>{ product.name }</h1>
            <p>&euro; {product.price}.00</p>
            <img src={productImage ? product.image : null} alt="" />
            <p>{product.description}</p>
            <BuyProductButton />
          </div>
        )
      }
    }


const mapStateToProps = function (state) {
  return {
    product: state.products.find(product => product.id === 7)
  }
}

export default connect(mapStateToProps)(ProductDetails)
