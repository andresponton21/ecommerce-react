import React, {useContext, useState} from 'react'
import FavRow from 'components/FavRow'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'
import Footer from 'components/Footer'
import logo from 'img/logo.png'




 
 
const Cartpage = () => {

  const cartProduct = useContext(UserContext)
  const cartArr = cartProduct.userFav
  
  
 
  const cartProd = cartArr.map(prod => <FavRow key={prod.id} data={prod} />)



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
        <Link to={`/`} className="see-more"> Continue Shopping</Link>
        </ul>
      </nav>

      
      

     
      <ul className="your-products">
        
        <Link to={`/cart`}><li className="only-cart"><span className="added-to-cart" aria-label="Items in your cart"></span></li></Link>

        
      </ul>
    </header>
  </div>

 
  <section  className="products">
    <h2>You are in your Favourite page</h2>
    {cartProd.length > 0 ? cartProd : 'Your Favourite page is empty'}
    </section>
    <Footer />
   
  </div>
  )

}


export default Cartpage