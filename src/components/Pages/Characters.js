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
    const [requestId, setRequestId] = useState(null)

    const setCharsOutside = chars => setCharacters(chars);

    const setCharPage = obj =>{
        setRequestId(`https://rickandmortyapi.com/api/character/${obj.id}`);
        setCharSelect(obj.condition)
    }

    const setCharPageBack = () => setCharSelect(false);

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
              throw new Error("Can't Fetch Characters");
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

    const createSearchString = obj =>{
      let searchString = `https://rickandmortyapi.com/api/character/?`
      for (let thing in obj){
        if(thing.length > 1 && thing == `name`){
          searchString += `${thing}=${obj.name.split(" ")[0].toLowerCase()}`;
        } else if(thing.length > 1 && thing === `status`){
          searchString += `&${thing}=${obj.status.split(" ")[0].toLowerCase()}`;
        } else if(thing.length > 1 && thing === `species`){
          searchString += `&${thing}=${obj.species.split(" ")[0].toLowerCase()}`;
        } else if (thing.length > 1 && thing === `gender`){
          searchString += `&${thing}=${obj.gender.split(" ")[0].toLowerCase()}`;
        } else{ 
          console.error('no existng property',thing )
        }
      }
        return searchString
    }

    const searchChars = async (obj) =>{
      try{
        let searchString= createSearchString(obj)
        console.log(searchString)
        const response = await fetch(
          searchString,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Can't Fetch Search");
        }

        const data = await response.json();
        // console.log(data)
        let charData = data.results.map((char) => {
          return {
            id: char.id,
            name: char.name,
            description: `Species: ${char.species}, Status: ${char.status}`,
            imgSrc: char.image,
          };
        });
        console.log(charData);
        setCharacters(charData);

      } catch(err) { 
        console.error(err)
      }
      
      //console.log(searchString)
    }

    useEffect(() =>{
        fetchCharacters();
        return() =>{
            setCharacters([])
        }
    }, [])

    return (
      <Page heading="Characters">
        <h1  style={{textAlign: `center`, padding: `2% 3%`, fontSize: `30px`}}>Characters</h1>
        {charSelect ? (
            <InfoPage setCharPageBack={setCharPageBack} requestString={requestId}/>
        ) : (
          <div>
            <p style={{ textAlign: `center` }}>
              Search and Learn about your favorite Rick and Morty Characters!
            </p>
            <ChararacterSearchForm searchChars={searchChars}/>
            <MainBody>
              <BoxGrid items={characters} setCharPage={setCharPage}/>
            </MainBody>
            <PaginateButtons setCharsOutside={setCharsOutside} />
          </div>
        )}
      </Page>
    );
}
export default Characters
