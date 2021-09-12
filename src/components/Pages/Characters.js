import React, {useState, useEffect} from 'react'
import MainBody from '../UI/MainBody'
import BoxGrid from '../UI/BoxGrid';
import Page from '../UI/Page';
import InfoPage from './InfoPage';
import ChararacterSearchForm from '../Forms/ChararacterSearchForm';
import PaginateButtons from '../UI/PaginateButtons';

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [charSelect, setCharSelect] = useState(false)
    const [requestId, setRequestId] = useState(undefined)

    const settingCharId = id =>{
       setRequestId(`https://rickandmortyapi.com/api/character/${id}`);
    }

    const setCharsOutside = chars =>{
        setCharacters(chars)
    }

    const setCharPage = () =>{
        setCharSelect(true)
    }

     const setCharPageBack = () => {
       setCharSelect(false);
     };

    const fetchCharacters = async () =>{
        try {
            const response = await fetch(
              `https://rickandmortyapi.com/api/character`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            //console.log(response)

            if (response.status !== 200) {
              throw new Error("Something went wrong!");
            }
            
            const data = await response.json();
            //console.log(data)
            //console.log(data.results)
            let charData = data.results.map(char =>{
                return {
                    id: char.id,
                    name: char.name,
                    description: `Species: ${char.species}, Status: ${char.status}`,
                    imgSrc: char.image
                }
            })
            setCharacters(charData)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() =>{
        fetchCharacters();
        return() =>{
            setCharacters([])
        }
    }, [])

    return (
      <Page heading="Characters">
        {charSelect ? (
          <div>
            <InfoPage setCharPageBack={setCharPageBack} />
          </div>
        ) : (
          <div>
            <p style={{ textAlign: `center` }}>
              Search and Learn about your favorite Rick and Morty Characters!
            </p>
            <ChararacterSearchForm />
            <MainBody>
              <BoxGrid items={characters} setCharPage={setCharPage} />
            </MainBody>
            <PaginateButtons setCharsOutside={setCharsOutside} />
          </div>
        )}
      </Page>
    );
}

export default Characters
