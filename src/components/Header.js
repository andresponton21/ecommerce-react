import React, {useState, useContext} from 'react'
import logo from 'img/logo.png'
import lupe from 'img/svg/lupe.svg'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'
import Cartrow from 'components/Cartrow'



const Header = ({search, setSearch}) => {

  // const cartProducts = useContext(UserContext)
  // const cartCount = cartProducts.currCart

  const {query} = search
 
  const handleQueryChange = (event) => {

    setSearch({
      ...search,
      query: event.target.value
    })
  }

    const cartProduct = useContext(UserContext)
    const cartArr = cartProduct.userCart
    const favArr = cartProduct.userFav
  
  
  
  return (
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
          <input type="search" name="find" id="find" className="search-input" autoComplete="off"  placeholder="Look for a product" onChange={handleQueryChange}/>
        </label>
        <button type="button" className="search-button"><img className="magnifier" src={lupe} alt="magnifier" /></button>
      </form>

     
      <ul className="your-products">
        <Link to={`/favourite`}><li className="favourite-sm"><span  aria-label="Favourites" className="addFav">{favArr.length}</span></li></Link>
        <Link to={`/cart`}><li className="only-cart"><span className="added-to-cart" aria-label="Items in your cart">{cartArr.length}</span></li></Link>
      </ul>
    </header>
  </div>
  )
}

export default Header