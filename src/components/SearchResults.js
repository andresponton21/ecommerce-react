import React, {useState} from 'react'
import ProductRow from 'components/ProductRow'
// import { Pagination } from 'antd'
// import 'antd/dist/antd.css'
import PaginationComp from 'components/PaginationComp'

const SearchResults = ({result}) => {

  const [currPage, setCurrPage] = useState(1)
  const pageSize = 4

  const startRow = (currPage - 1) * pageSize
  const endRow = startRow + pageSize
  const totalPages = Math.ceil(result.length / pageSize)

  const theProducts = result.slice(startRow, endRow).map((product) => <ProductRow key={product.id} data={product} />)

  const updatePage = (page) => {
    if (page < 0) 
      setCurrPage(1)
    else if (page > totalPages) 
      setCurrPage(totalPages)
    else 
      setCurrPage(page)
  }
  
  return (
    <>
        <section  className="results">
          {(theProducts.length) ? theProducts : `No matching Results`}
        </section>

        <nav aria-label="Pagination" className="pagination">
        <p className="page-number">
          {/* <button onClick={()=> updatePage(currPage-1)} disabled={(currPage === 1 )?`disabled`:``}>prev</button>
          Showing {(theProducts.length === 1) ? `product` : `products`} {startRow + 1} to {Math.min(endRow, result.length)} of {result.length}
          <button onClick={()=> updatePage(currPage+1)} disabled={(currPage === totalPages )?`disabled`:``} >next</button> */}
        </p>
        <PaginationComp defaultCurrent={currPage} total={result.length} defaultPageSize={pageSize} onChange={(page) => setCurrPage(page)} />
          <p></p>
        </nav>
    </>
  )
}

export default SearchResults