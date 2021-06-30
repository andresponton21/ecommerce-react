import React from 'react'
import ProductRow from 'components/ProductRow'

const SearchResults = ({result}) => {

  const theProducts = result.map((product) => <ProductRow key={product.id} data={product} />)
  


  return (

      <section  className="results">
        {theProducts}
      </section>
  )
}

export default SearchResults