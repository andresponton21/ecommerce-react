import React, {useContext, useState} from 'react'
import Image from 'components/Image'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'


 
 
const FavRow = ({data}) => {

  
  const {id, name, price, filters, photo, description, linkTo, category, rating} = data
  
  const favProduct = useContext(UserContext)
  const handleDelItemFav = favProduct.handleDelItemFav

 
  return (
    <>
    
        <article className="product singlep">
        <header>
        
        
        <Link to={`/product/${name}`}> <h3>{name}</h3></Link>
        <data value="119"><del>${price.before.toFixed(2)}</del> <ins>${price.after.toFixed(2)}</ins></data>
        <p>{description}</p>
      
        
          <button className="see-more" onClick={(event) => handleDelItemFav(event, name)}> Delete</button>
    </header>
   
   
    </article>
    </>
  )
}

export default FavRow