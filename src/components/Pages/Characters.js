import React, {useState, useEffect} from 'react'
import MainBody from '../UI/MainBody'
import BoxGrid from '../UI/BoxGrid';
import Page from '../UI/Page';
import InfoPage from './InfoPage';
import ChararacterSearchForm from '../Forms/ChararacterSearchForm';
import PaginateButtons from '../UI/PaginateButtons';
import Loader from 'react-spinners/ClipLoader';

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [numPages, setNumPages] = useState(0)
    const [charSelect, setCharSelect] = useState(false)
    const [loading, setLoading] = useState(false)
    const [requestId, setRequestId] = useState(`https://rickandmortyapi.com/api/character`)

    const setCharPage = obj =>{
        setRequestId(`https://rickandmortyapi.com/api/character/${obj.id}`);
        setCharSelect(obj.condition)
    }

    const settingRequestId =(str) =>{
      setRequestId(str)
    }

    const setCharPageBack = () => setCharSelect(false);

    useEffect(() =>{
      const searchChars = async () => {
        setLoading(true)
        try {
          //console.log(requestId);
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

          setNumPages(data.info.pages)

          let charData = data.results.map((char) => {
            return {
              id: char.id,
              name: char.name,
              description: `Species: ${char.species}, Status: ${char.status}`,
              imgSrc: char.image,
            };
          });
          //console.log(charData);
          setCharacters(charData);
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          setLoading(false)
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
            { loading ? <Loader loadState={loading}/> : 
            <>
              <ChararacterSearchForm searchChars={settingRequestId}/>
              <MainBody>
                <BoxGrid items={characters} setCharPage={setCharPage}/>
              </MainBody>
              <PaginateButtons numPages={numPages} searchChars={settingRequestId}/>
            </>
            }
            
          </div>
        )}
      </Page>
    );
}
export default Characters
