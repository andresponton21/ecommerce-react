import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import UserContext from 'contexts/user'
import Layout from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'
import logo from 'img/logo.png'
import lupe from 'img/svg/lupe.svg'
import {Link} from 'react-router-dom'
import SingleProductRow from 'components/SingleProductRow'

//import 'css/product.css'



const Product = () => {

  const {slug} = useParams()
  //console.log(slug)

  const newProduct = useContext(UserContext)
  
  const productArray = newProduct.updateProduct(slug)
  const singleProduct = productArray.map(prod => <SingleProductRow key={prod.id} data={prod} />)
  
  
  return (
    
  <div className="layout">
    <div className="top-head">
    <header className="page-header">
      
      <a href="index.html" className="logo"><img src={logo}/></a>

     
      <button type="button" className="nav-toggle">
        <span className="material-icons">menu</span>
      </button>
      <nav aria-label="Primary" id="nav-menu" className="navigation">
        <ul className="menu">
          <li><a href="#" className="show-submenu" >Shop</a>
            <ul className="submenu" id="submenu">
              <li><a href="#">Cardio Equipment</a></li>
              <li><a href="#">Conditioning</a></li>
              <li><a href="#">Weights</a></li>
            </ul>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      
      <form className="search">
        <label>Search:
          <input type="search" name="find" id="find" className="search-input" autoComplete="off"  placeholder="Look for a product" />
        </label>
        <button type="button" className="search-button"><img className="magnifier" src={lupe} alt="magnifier" /></button>
      </form>

     
      <ul className="your-products">
        <Link to={`/favourite`}><li className="favourite-sm"><span  aria-label="Favourites"></span></li></Link>
        <Link to={`/cart`}><li className="only-cart"><span className="added-to-cart" aria-label="Items in your cart"></span></li></Link>
      </ul>
    </header>
  </div>

 
  <section  className="products">
    <Link to={`/`}>Go Back </Link>
    {singleProduct}
  </section>
  <Footer />
   
  </div>
      
  )
}

export default Product