import React, {useState, useEffect} from 'react'
import Pagination from 'react-responsive-pagination';
import './PaginateButtons.css'

const PaginateButtons = (props) => {
   const [pastFirstMount, setPastFirstMount] = useState(false)
   const [pageNum, setPageNum] = useState(1);

   useEffect(() =>{
      console.log('page number', pageNum)
      const changePage = () =>{
         let pageString = `https://rickandmortyapi.com/api/character/?page=${pageNum}`;
         props.searchChars(pageString)
      }

      switch(pastFirstMount){
         case true:
            changePage()
            break;
         case false:
            setPastFirstMount(true)
            break;
         default:
            console.error('no state info', pastFirstMount)
      }
   }, [pageNum])

   return(
    <Pagination 
      current={pageNum}
      total={props.numPages}
      onPageChange={setPageNum}
    />     
   )
  
}

export default PaginateButtons
