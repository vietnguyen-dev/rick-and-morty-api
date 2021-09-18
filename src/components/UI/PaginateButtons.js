import React, {useState, useEffect} from 'react'
import Pagination from 'react-responsive-pagination';
import './PaginateButtons.css'

const PaginateButtons = (props) => {
   const [pageNum, setPageNum] = useState(1);

   const changePage = () =>{
      console.log(pageNum)
      let pageString = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;
      props.searchChars(pageString)
   }

   useEffect(() =>{
      console.log(pageNum)
   }, [pageNum])

   return(
    <Pagination 
      current={pageNum}
      total={props.numPages}
      onPageChange={changePage}
    />     
   )
  
}

export default PaginateButtons
