  
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children, search, setSearch}) => {
  

  return (
    <div className="layout">
      <Header search = {search} setSearch={setSearch} />
      
      <main className="products">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout