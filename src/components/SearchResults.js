import React from 'react'
import ProductRow from 'components/ProductRow'

const SearchResults = ({result}) => {

  const theProducts = result.slice(0,4).map((product) => <ProductRow key={product.id} data={product} />)
  
  return (
    <>
        <section  className="results">
          {theProducts}
        </section>

        <nav aria-label="Pagination" className="pagination">
        <p className="page-number">{theProducts.length} {(theProducts.length === 1) ? `product` : `products`} of {result.length}</p>
        <ol className="pages">
          <li><a href="#" aria-label="Current Page, Page 1" aria-current="true">1</a></li>
          <li><a href="#" aria-label="Page 2">2</a></li>
          <li><a href="#" aria-label="Page 3">3</a></li>
          <li><a href="#" aria-label="Page 4">4</a></li>
          <li><a href="#" aria-label="Page 5">5</a></li>
        </ol>
        </nav>
    </>
  )
}

export default SearchResults