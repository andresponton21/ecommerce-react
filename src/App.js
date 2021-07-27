import React, { useCallback, useState } from 'react'
import productsData from 'components/productsData'
import Products from 'pages/Products'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import UserContext from 'contexts/user'
import FourOhFour from 'pages/FourOhFour'
import Product from 'pages/Product'
import Cartpage from 'pages/Cartpage'
import Favourite from 'pages/Favourite'





const userCart = [];
const userFav = [];

const updateProduct = (name) => {
  // Go update the database
  const fproduct = productsData.filter(product => product.name.includes(name))
  return fproduct
}
const handleAddCart =  (event, name) => {

  const cproduct = productsData.find(product => product.name.includes(name))
  userCart.push(cproduct)
  
}
const handleDelItemCart =  (event, name) => {

  const cproduct = productsData.find(product => product.name.includes(name))
  userCart.pop(cproduct)
  
}
const handleAddFav =  (event, name) => {
  const cproduct = productsData.find(product => product.name.includes(name))
  userFav.push(cproduct)
  
}



const App = () => {
  return (
       
        <Router>
        <UserContext.Provider value={{data:productsData, updateProduct:updateProduct, 
          handleAddCart:handleAddCart, userCart:userCart, 
          userFav:userFav, handleAddFav:handleAddFav, handleDelItemCart:handleDelItemCart }}>
          <Switch>
            <Route exact path="/"><Products data={productsData} /></Route>
            <Route path="/product/:slug"><Product/></Route>
            <Route path="/cart"><Cartpage/></Route>
            <Route path="/favourite"><Favourite/></Route>

            <Route path="*"><FourOhFour /></Route>
            <Route path="/404"><FourOhFour /></Route>
            <Redirect to="/404" />
  

          </Switch>
        </UserContext.Provider>
      </Router>
  
  )
}

export default App