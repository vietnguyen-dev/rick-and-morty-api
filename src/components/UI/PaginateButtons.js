import React, {useState, useEffect} from 'react'
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

const PaginateButtons = (props) => {
   const [pastFirstMount, setPastFirstMount] = useState(false)
   const [pageNum, setPageNum] = useState(1)

   useEffect(() =>{
      const changePage = () =>{
         let pageString = createSearchString(props.current, pageNum)
         console.log(props.current, pageNum)
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
