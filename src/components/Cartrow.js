import React, {useContext, useState} from 'react'
import Image from 'components/Image'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'


 
 
const Cartrow = ({data}) => {

  
  const {id, name, price, filters, photo, description, linkTo, category, rating} = data
  
  const cartProduct = useContext(UserContext)
  const handleDelItemCart = cartProduct.handleDelItemCart
  const handleSwitchToFav = cartProduct.handleSwitchToFav
  
 
  return (
    <>
    
        <article className="product singlep">
        <header>
        
        
        <Link to={`/product/${name}`}> <h3>{name}</h3></Link>
        <data value="119"><del>${price.before.toFixed(2)}</del> <ins>${price.after.toFixed(2)}</ins></data>
        <p>{description}</p>
      
        
        <button className="see-more" style={{background:`red`}} onClick={(event) => handleDelItemCart(event, name)}> Delete</button>
        <button className="see-more" style={{marginLeft:`0.25em`}} onClick={(event) => handleSwitchToFav(event, name)}> Add to Favourites</button>
    </header>
   
   
    </article>
    </>
  )
}

export default Cartrow