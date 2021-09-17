import React, {useState, useEffect} from 'react'
import './PaginateButtons.css'

const PaginateButtons = (props) => {
   const [pageNum, setPageNum] = useState(1);

    const pageUp =() => {
       setPageNum(() => pageNum + 1);
    }

    const pageDown = () => {
       setPageNum(() => pageNum - 1);
    }

   useEffect(() =>{
      const paginate = async (pageNumber) => {
        try {
          const response = await fetch(
            `https://rickandmortyapi.com/api/character?page=${pageNumber}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          //console.log(response);

          if (response.status !== 200) {
            throw new Error("Something went wrong!");
          }

          const data = await response.json();
          //console.log(data);
          //console.log(data.results);
          let charData = data.results.map((char) => {
            return {
              id: char.id,
              name: char.name,
              description: `Species: ${char.species}, Status: ${char.status}`,
              imgSrc: char.image,
            };
          });

          props.setCharsOutside(charData);
        } catch (err) {
          console.error(err);
        }
      };  
      paginate(pageNum);
       document.body.scrollTop = document.documentElement.scrollTop = 0;
   }, [pageNum])

   if (pageNum === 1){
      return(
         <div className="container">
            <div className="currentPage">{pageNum}</div>
            <button className="pageButtons" onClick={pageUp}> Next</button>
       </div>
      )
   } else if (pageNum > 1 && pageNum < 34){
      return (
         <div className="container">
         <button className="pageButtons" onClick={pageDown}>
            Prev
         </button>
         <div className="currentPage">{pageNum}</div>
         <button className="pageButtons" onClick={pageUp}>
            Next
         </button>
         </div>
      );
   } else {
      return(
         <div className="container">
            <button className="pageButtons" onClick={pageDown}>
               Prev
            </button>
            <div className="currentPage">{pageNum}</div>
         </div>
      )
   }
  
}

export default PaginateButtons
