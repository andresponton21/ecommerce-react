import React from 'react'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'




const PaginationComp = ({defaultCurrent, total, defaultPageSize, onChange}) => {
  
 
 
  
  return ( 

  <Pagination defaultCurrent={defaultCurrent} total={total} defaultPageSize={defaultPageSize} onChange={onChange} />

  )
}

export default PaginationComp