//client/src/components/BuyProductButton.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './BuyProductButton.css'

class BuyProductButton extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }

  render() {
    return (
      <button className="BuyProduct" onClick={this.props.onClick}>Buy this product</button>
    )
  }
}

export default BuyProductButton
