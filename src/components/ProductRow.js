import React from 'react'
import bike from 'img/bike.jpg'
import fourstars from 'img/svg/fourstars.svg'



const ProductRow = ({data}) => {
  const {id, name, price, filters, photo, description, linkTo, category, rating} = data
 
  return (
    <>
        <h2 className="subheading">Results</h2>

        <article className="product">
        <header>
        <a className="product-name" href="">
        <img className="images" src={bike} alt={name}/>
        </a>
        <a className="product-name" href={linkTo}>
        <h3>{name}</h3></a>
        <data value="119"><del>${price.before.toFixed(2)}</del> <ins>${price.after.toFixed(2)}</ins></data>
        <p>{description}</p>
      
        <dt>Rating</dt>
          <dt>
            <img className="star" src={fourstars} alt="stars"/>
            
          </dt>
        <a className="see-more" href={linkTo}>see product</a>
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
        <button type="button" className="add-to-cart" id="0"></button>
        <button type="button" className="add-favourite"></button>
    </footer> 
    </article>
    </>
  )
}

export default ProductRow