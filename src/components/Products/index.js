import Header from '../Header'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Products = () => {
  const jwt = Cookies.get('jwt_token')
  if (jwt === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="products-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          className="product-image"
          alt="products"
        />
      </div>
    </>
  )
}

export default Products
