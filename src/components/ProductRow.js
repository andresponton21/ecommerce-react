import React, {useContext, useState} from 'react'
import fourstars from 'img/svg/fourstars.svg'
import Image from 'components/Image'
import {Link} from 'react-router-dom'
import UserContext from 'contexts/user'
import styled from 'styled-components'



 
 
const ProductRow = ({data}) => {

  
  const {id, name, price, filters, photo, description, linkTo, category, rating} = data
  

  const cartProduct = useContext(UserContext)
  const favArr = cartProduct.userFav
  const handleAddCart = cartProduct.handleAddCart
  const handleAddFav = cartProduct.handleAddFav
 
  return (
    <>
        <h2 className="subheading">Results</h2>

        <article className="product">
        <header>
        
       
        <Link to={`/product/${name}`}> <Image className="images" src={photo} alt={name} width="32" height="32"/></Link>
       
        
        <Link to={`/product/${name}`}> <h3>{name}</h3></Link>
        <data value="119"><del>${price.before.toFixed(2)}</del> <ins>${price.after.toFixed(2)}</ins></data>
        <p>{description}</p>
      
        <dt>Rating</dt>
          <dt>
            <img className="star" src={fourstars} alt="stars"/>
            
          </dt>
          <Link to={`/product/${name}`} className="see-more"> see product</Link>
    </header>
    <form className="form-options">
        <fieldset className="product-options">
        <legend>{filters[0].filterName}</legend>
        <ul>
            <li><input type="radio" className="radio" name="colour" value="r" id="r"/><label htmlFor="r" className="radio-button">{filters[0].filterOptions[0]}</label></li>
            <li><input type="radio" className="radio" name="colour" value="b" id="b"/><label htmlFor="b" className="radio-button"> {filters[0].filterOptions[1]}</label></li>
            <li><input type="radio" className="radio" name="colour" value="g" id="g"/><label htmlFor="g" className="radio-button"> {filters[0].filterOptions[2]}</label></li>
        </ul>
        </fieldset>
        <fieldset className="product-options">
        <legend>{filters[1].filterName}</legend>
        <ol>
            <li><input type="radio" className="radio" name="size" value="s" id="s"/><label htmlFor="s" className="radio-button"> {filters[1].filterOptions[0]}</label></li>
            <li><input type="radio" className="radio" name="size" value="m" id="m"/><label htmlFor="m" className="radio-button"> {filters[1].filterOptions[1]}</label></li>
            <li><input type="radio" className="radio" name="size" value="l" id="l"/><label htmlFor="l" className="radio-button"> {filters[1].filterOptions[2]}</label></li>
        </ol>
        </fieldset>
    </form>
    <footer className="product-options add-product">
        <button type="button" className="add-to-cart" onClick={(event) => handleAddCart(event, name)}></button>

        <Favourite  onClick={(event) => handleAddFav(event, name)}>
        <span className={`material-icons ${(favArr.find(pr=>pr.name.includes(name))) && `becomefav`}`}>favorite</span>

        </Favourite>

    </footer> 
    </article>
    </>
  )
}

const Favourite = styled.button`
	padding-bottom:0;
  margin: 1em;
	background: none;
	border: none;
	color: black;
  
`


export default ProductRow