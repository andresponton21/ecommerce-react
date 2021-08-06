import React, {useContext, useState} from 'react'
import Cartrow from 'components/Cartrow'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'
import Footer from 'components/Footer'
import logo from 'img/logo.png'




 
 
const Cartpage = () => {

  const cartProduct = useContext(UserContext)
  const cartArr = cartProduct.userCart
  
 
  const cartProd = cartArr.map(prod => <Cartrow key={prod.id} data={prod} />)

  const sumCart = [0]
  cartArr.forEach(prod => sumCart.push(prod.price.after));


 const totalCart = sumCart.reduce(sumPrice);

 function sumPrice(total, num) {
  return total + num;
 }

 


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
        <Link to={`/`} className="see-more"style={{fontSize:`1.5em`}}> Continue Shopping</Link>
        </ul>
      </nav>

      
      

     
      <ul className="your-products">
        <Link to={`/favourite`}><li className="favourite-sm"><span  aria-label="Favourites"></span></li></Link>
        
      </ul>
    </header>
  </div>

 
  <section  className="products">
  <h2>You are in your Cart page</h2>

    
    {cartProd.length > 0 ? cartProd : 'Your Cart is empty'}
    <h3 style={{backgroundColor:`#6521db`,
      color:`white`, padding:`0.25em`, fontSize:`1.5em`, textAlign:`center`, borderRadius:`0.35em`}}>Your Total is: ${totalCart}</h3>
    </section>
    <Footer />
   
  </div>
  )

}


export default Cartpage