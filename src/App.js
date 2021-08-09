import React, { useCallback, useState, useEffect } from 'react'
//import productsData from 'components/productsData'
import Products from 'pages/Products'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import UserContext from 'contexts/user'
import FourOhFour from 'pages/FourOhFour'
import Product from 'pages/Product'
import Cartpage from 'pages/Cartpage'
import Favourite from 'pages/Favourite'
import 'material-design-icons/iconfont/material-icons.css'
import firebase from 'utils/firebase'




const App = () => {

  const [productsData, setProductsData] = useState([])
  const db = firebase.firestore()
  
  useEffect(() => {
    const loadData = async () => {

      console.log(`Loading...`)
      //setLoading(true)
      
      await db.collection(`productsData`).get().then((snapshot) => {
        // setCoursesData(snapshot.docs.reduce((courses, doc) => [...courses, doc.data()], []))
        setProductsData(snapshot.docs.map(doc => doc.data()))
      })
      
     // setLoading(false)
    }
    
    loadData()
  }, [])
  
  
  const [userCart, setUserCart] = useState([]);
  const [userFav, setUserFav] = useState([]);

  const updateProduct = (name) => {
    const fproduct = productsData.filter(product => product.name.includes(name))
    return fproduct
  }
//handle cart
  const handleAddCart =  (event, name) => {
    const cproduct = productsData.find(product => product.name.includes(name))
    const same = userCart.find(product => product.name.includes(cproduct.name))
    if (same===cproduct){return}

    setUserCart([...userCart, cproduct])
   
  }
//delete products
  const handleDelItemCart =  (event, name) => {
    
    const delProduct = userCart.filter(product => !product.name.includes(name))
    
    setUserCart([...delProduct])

  }
  //move items to favourites
  const handleSwitchToFav =  (event, name) => {
    const cproduct = productsData.find(product => product.name.includes(name))
    const same = userFav.find(product => product.name.includes(cproduct.name))
    if (same===cproduct){
      const delProduct = userCart.filter(product => !product.name.includes(name))
      setUserCart([...delProduct])
      return
    }

    setUserFav([...userFav, cproduct])
    const delProduct = userCart.filter(product => !product.name.includes(name))
    
    setUserCart([...delProduct])
    
  }

  //handle favourites
  const handleAddFav =  (event, name) => {
    const cproduct = productsData.find(product => product.name.includes(name))
    const same = userFav.find(product => product.name.includes(cproduct.name))
    if (same===cproduct){return}
    setUserFav([...userFav, cproduct])
    
  }
  //remove favourites
  const handleDelItemFav =  (event, name) => {
    
    const delProductFav = userFav.filter(product => !product.name.includes(name))
    
    setUserFav([...delProductFav])

  }
  //move products to cart
  const handleSwitchToCart =  (event, name) => {
    const cproduct = productsData.find(product => product.name.includes(name))
    const same = userCart.find(product => product.name.includes(cproduct.name))

    if (same===cproduct){
      const delProduct = userFav.filter(product => !product.name.includes(name))
      setUserFav([...delProduct])
      return
    }

    setUserCart([...userCart, cproduct])

    const delProductFav = userFav.filter(product => !product.name.includes(name))
    
    setUserFav([...delProductFav])
   
  }

  return (
       
        <Router>
        <UserContext.Provider value={{data:productsData, updateProduct:updateProduct, 
          handleAddCart:handleAddCart, userCart:userCart, 
          userFav:userFav, handleAddFav:handleAddFav, handleDelItemCart:handleDelItemCart, 
          handleDelItemFav:handleDelItemFav, handleSwitchToCart:handleSwitchToCart, handleSwitchToFav:handleSwitchToFav}}>
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