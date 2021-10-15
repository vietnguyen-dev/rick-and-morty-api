import React, { useState } from 'react'
import './Form.css'

const LocationSearchForm = (props) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [dimension, setDimension] = useState('')

     const createSearchString = (obj) => {
       let searchQueries = obj;
       let searchString = `https://rickandmortyapi.com/api/location/`;
       let moreThan1Query = false;

        for (const key in obj) {
          //console.log(`${key}, ${searchQueries[key]}`)
          if (searchQueries[key]) {
            // console.log(searchQueries[key])
            switch (moreThan1Query) {
              case true:
                searchString += `&${key}=${searchQueries[key]}`;
                break;
              case false:
                moreThan1Query = true;
                searchString += `?${key}=${searchQueries[key]}`;
                break;
              default:
                console.error(`query not found`);
                break;
            }
          }
          //moreThan1Query = false;
        }
       return searchString;
     };

    const getSearchQueries = (event) =>{
      event.preventDefault()
      let queries = {
        name: name,
        type: type,
        dimension: dimension,
      }
      let searchString = createSearchString(queries)
      props.searchChars(searchString)

      setName('');
      setType("")
      setDimension("");
    }

    const getAllLocations = () =>{
      props.searchChars(`https://rickandmortyapi.com/api/location/`)
      setName('');
      setType("")
      setDimension("");
    }

    return (
      <>
        <form onSubmit={getSearchQueries}>
          <div className="form">
            <div>
              <input
                value={name}
                type="text"
                placeholder='Choose Name'
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <input
                value={type}
                type="text"
                placeholder='Choose Type'
                onChange={(event) => setType(event.target.value)}
              />
            </div>
            <div>
              <input
                value={dimension}
                type="text"
                placeholder='Choose Dimension'
                onChange={(event) => setDimension(event.target.value)}
              />
            </div>
          </div>
          <div className='searchButtons'>
            <button className='get' onClick={getAllLocations}>Get All Locations</button>
            <button type="submit">SEARCH</button>
          </div>
        </form>
      </>
    );
}

export default LocationSearchForm
