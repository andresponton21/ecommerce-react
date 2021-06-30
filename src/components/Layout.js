  
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children}) => {
  const handleQueryChange = (event) => {

    setSearchState({
      ...searchState,
      query: event.target.value
    })
  }

  return (
    <>
      <Header onChange={handleQueryChange} />
      
      <main className="products">
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout