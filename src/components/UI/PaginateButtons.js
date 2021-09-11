import React from 'react'
import ReactPaginate from 'react-paginate'

const PaginateButtons = (props) => {
   return (
     <ReactPaginate>
       pageCount={34}
       pageRangeDisplayed={5}
       marginPagesDisplayed={2}
       previousLabel={"previous"}
       nextLabel={"next"}
       breakLabel={"..."}
     </ReactPaginate>
   );
}

export default PaginateButtons
