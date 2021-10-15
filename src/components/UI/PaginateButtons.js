import React, {useState, useEffect, useRef} from 'react'
import Pagination from 'react-responsive-pagination';
import './PaginateButtons.css'

const createSearchString = (currentUrl, num) =>{
   //checks for two conditions
   //search all
  if (currentUrl.includes('/?page') === false && currentUrl.includes('&') === false && currentUrl.includes('=') === false){
     return `${currentUrl}/?page=${num}`
  } 
  //form search - at least one query
  else if( currentUrl.includes('&') === true || currentUrl.includes('=') === true){
     // has queries past first page
     if (currentUrl.includes('page') === true){
      let newUrl = currentUrl.substring(0, currentUrl.lastIndexOf("=") + 1)
      return `${newUrl}${num}`
     } 
     //first page with queries
     else{
      return `${currentUrl}&page=${num}`
     }
  }
}

const PaginateButtons = ({numPages, current, pageTurn}) => {
   // const [pastFirstMount, setPastFirstMount] = useState(false)
   const didMount = useRef(false)
   const [pageNum, setPageNum] = useState(1)

   useEffect(() =>{
      if (!didMount.current){
         didMount.current = true;
      } else{
         let pageString = createSearchString(current, pageNum)
         // console.log(current, pageNum)
         pageTurn(pageString)
         didMount.current = false;
      }
   }, [pageNum, current, pageTurn])

   return(
    <Pagination 
      current={pageNum}
      total={numPages}
      onPageChange={setPageNum}
    />     
   )
  
}

export default PaginateButtons
