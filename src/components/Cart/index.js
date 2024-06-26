import Header from '../Header'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Cart = () => {
  const jwt = Cookies.get('jwt_token')
  if (jwt === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="cart-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png "
          className="cart-image"
          alt="cart"
        />
      </div>
    </>
  )
}

export default Cart
