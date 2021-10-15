import React, {useState, useEffect} from 'react'
import MainBody from '../UI/MainBody'
import BoxGrid from '../UI/BoxGrid';
import Page from '../UI/Page';
import InfoPage from './ItemInfo';
import LocationSearchForm from '../Forms/LocationSearchForm';
import PaginateButtons from '../UI/PaginateButtons';
import Loader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';
import { locationSearch } from '../../redux/action';


const Locations = () => {
    const [Locations, setLocations] = useState([])
    const [numPages, setNumPages] = useState(0)
    const [loading, setLoading] = useState(false)
    const locSearch = useSelector(state => state.location)
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
      dispatch(locationSearch(str))
    }

    useEffect(() =>{
      const searchChars = async () => {
        setLoading(true)
        try {
          // console.log(LocationsSearch)
            const response = await fetch(locSearch, {
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

            // let regexAfterSlash = /[^/]*$/;
            console.log(data)
            let locData = data.results.map((loc) => {
              return {
                id: loc.id,
                name: loc.name,
                type: loc.type,
                dimension: loc.dimension
              };
            });
            //console.log(charData);
            setLocations(locData);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            setLoading(false)
        } catch (err) {
          console.error(err);
        }
      };
      searchChars()
      //console.log(requestId);
       return () => {
         setLocations([]);
       };
    }, [locSearch])

    return (
      <Page>
        <h1  style={{textAlign: `center`, padding: `2% 3%`, fontSize: `30px`}}>Locations</h1>
        {charSelect ? (
            <InfoPage itemType='location' requestString={characterId} setCharPageBack={setCharPageBack}/>
        ) : (
          <div>
            <p style={{ textAlign: `center` }}>
              Search and Learn about your favorite Rick and Morty Locations!
            </p>
            { loading ? <Loader loadState={loading}/> : 
            <>
              <LocationSearchForm searchChars={settingRequestId}/>
              <MainBody>
                <BoxGrid itemType='location' items={Locations} setCharPage={setCharPage}/>
              </MainBody>
              <PaginateButtons numPages={numPages} current={locSearch} pageTurn={settingRequestId}/>
            </>
            }
            
          </div>
        )}
      </Page>
    );
}
export default Locations
