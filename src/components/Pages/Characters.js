import React, {useState, useEffect} from 'react'
import MainBody from '../UI/MainBody'
import BoxGrid from '../UI/BoxGrid';
import Page from '../UI/Page';
import InfoPage from './ItemInfo';
import ChararacterSearchForm from '../Forms/ChararacterSearchForm';
import PaginateButtons from '../UI/PaginateButtons';
import Loader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';
import { charSearch } from '../../redux/action';


const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [numPages, setNumPages] = useState(0)
    const [loading, setLoading] = useState(false)
    const charactersSearch = useSelector(state => state.character)
    const dispatch = useDispatch()

    //for individual character
    const [charSelect, setCharSelect] = useState(false)
    const [characterId, setCharacterId] = useState(1)

    const setCharPage = obj =>{
        setCharacterId(`${obj.id}`);
        setCharSelect(obj.condition)
    }

    const setCharPageBack = () => {
      setCharSelect(false);
    }

    const settingRequestId = str =>{
      console.log(str)
      dispatch(charSearch(str))
    }

    useEffect(() =>{
      const searchChars = async () => {
        setLoading(true)
        try {
          // console.log(charactersSearch)
            const response = await fetch(charactersSearch, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (response.status !== 200) {
              throw new Error("Can't Fetch Search");
            }

            const data = await response.json();
            // console.log(data, 'data')
            // console.log(data.info, 'dat.info')
            setNumPages(data.info.pages)

            let regexAfterSlash = /[^/]*$/;

            let charData = data.results.map((char) => {
              return {
                id: char.id,
                name: char.name,
                imgSrc: char.image,
                species: char.species,
                status: char.status,
                location: char.location.name,
                origin: char.origin.name,
                gender: char.gender,
                type: char.type,
                firstAppear: char.episode[0].match(regexAfterSlash),
                lastestAppear: char.episode[char.episode.length - 1].match(regexAfterSlash)
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
    }, [charactersSearch])

    return (
      <Page>
        <h1>Characters</h1>
        {charSelect ? (
            <InfoPage itemType="character" requestString={characterId} setCharPageBack={setCharPageBack}/>
        ) : (
          <div>
            <p>
              Search and Learn about your favorite Rick and Morty Characters!
            </p>
            { loading ? <Loader loadState={loading}/> : 
            <>
              <ChararacterSearchForm searchChars={settingRequestId}/>
              <MainBody>
                <BoxGrid itemType="character" items={characters} setCharPage={setCharPage}/>
              </MainBody>
              <PaginateButtons numPages={numPages} current={charactersSearch} pageTurn={settingRequestId}/>
            </>
            }
            
          </div>
        )}
      </Page>
    );
}
export default Characters
