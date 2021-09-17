import React, {useState, useEffect} from 'react'
import MainBody from '../UI/MainBody'
import BoxGrid from '../UI/BoxGrid';
import Page from '../UI/Page';
import InfoPage from './InfoPage';
import ChararacterSearchForm from '../Forms/ChararacterSearchForm';
import PaginateButtons from '../UI/PaginateButtons';

const Characters = () => {
    const [characters, setCharacters] = useState([])
    //const [numPages, setNumPages] = useState(0)
    const [charSelect, setCharSelect] = useState(false)
    const [requestId, setRequestId] = useState(`https://rickandmortyapi.com/api/character`)

    const setCharsOutside = chars => setCharacters(chars);

    const setCharPage = obj =>{
        setRequestId(`https://rickandmortyapi.com/api/character/${obj.id}`);
        setCharSelect(obj.condition)
    }

    const settingRequestId =(str) =>{
      setRequestId(str)
    }

    const setCharPageBack = () => setCharSelect(false);

    useEffect(() =>{
       const fetchCharacters = async () => {
         try {
           const response = await fetch(
             `requestId`,
             {
               method: "GET",
               headers: {
                 "Content-Type": "application/json",
               },
             }
           );
           //console.log(response)

           if (response.status !== 200) {
             throw new Error("Can't Fetch Characters");
           }

           const data = await response.json();
           console.log(data)
           console.log(data.results)
           let charData = data.results.map((char) => {
             return {
               id: char.id,
               name: char.name,
               description: `Species: ${char.species}, Status: ${char.status}`,
               imgSrc: char.image,
             };
           });
           setCharacters(charData);
         } catch (err) {
           console.error(err);
         }
       };

       fetchCharacters()
        return() =>{
            setCharacters([])
        }
    }, [])

    useEffect(() =>{
      const searchChars = async () => {
        try {
          console.log(requestId);
          const response = await fetch(requestId, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

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
        } catch (err) {
          console.error(err);
        }
      };
      searchChars()
      //console.log(requestId);
       return () => {
         setCharacters([]);
       };
    }, [requestId])

    return (
      <Page heading="Characters">
        <h1  style={{textAlign: `center`, padding: `2% 3%`, fontSize: `30px`}}>Characters</h1>
        {charSelect ? (
            <InfoPage setCharPageBack={setCharPageBack}/>
        ) : (
          <div>
            <p style={{ textAlign: `center` }}>
              Search and Learn about your favorite Rick and Morty Characters!
            </p>
            <ChararacterSearchForm searchChars={settingRequestId}/>
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
