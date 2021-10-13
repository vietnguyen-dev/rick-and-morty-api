import React, {useState} from 'react'
import './Form.css'

const ChararacterSearchForm = (props) => {
    const [name, setName] = useState('')
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');

     const createSearchString = (obj) => {
       let searchQueries = obj;
       let searchString = `https://rickandmortyapi.com/api/character/`;
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
        status: status,
        species: species,
        gender: gender
      }
      let searchString = createSearchString(queries)
      props.searchChars(searchString)

      setName('');
      setStatus('')
      setSpecies('')
      setGender('')
    }

    return (
      <>
        <form className="form" onSubmit={getSearchQueries}>
          <div>
            <label>Name </label>
            <input
              value={name}
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label>Status: </label>
            <select
              onChange={(event) => setStatus(event.target.value)}
              value={status}
            >
              <option value="" disabled defaultValue hidden>
                Choose Status
              </option>
              <option value="alive">Alive</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div>
            <label>Species: </label>
            <select
              onChange={(event) => setSpecies(event.target.value)}
              value={species}
            >
              <option value="" disabled defaultValue hidden>
                Choose Species
              </option>
              <option value="human">Human</option>
              <option value="alien">Alien</option>
              <option value="humanoid">Humanoid</option>
              <option value="cyborg">Cyborg</option>
              <option value="unknown">unknown</option>
              <option value="poopybutthole">Poopybutthole</option>
              <option value="mythological">Mythological Creature</option>
              <option value="animal">Animal</option>
              <option value="robot">Robot</option>
              <option value="cronenburg">Cronenburg</option>
              <option value="disease">Disease</option>
            </select>
          </div>
          {/* <div>
            <label>Type: </label>s
            <select>
              <option value="alive">Alive</option>
              <option value="unknown">Unknown</option>
            </select>
          </div> */}
          <div>
            <label>Gender: </label>
            <select
              onChange={(event) => setGender(event.target.value)}
              value={gender}
            >
              <option value="" disabled defaultValue hidden>
                Choose Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <button type="submit">Search</button>
        </form>
      </>
    );
}

export default ChararacterSearchForm
