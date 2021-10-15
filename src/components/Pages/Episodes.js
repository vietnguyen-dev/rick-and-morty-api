import React, {useState, useEffect} from 'react'
import MainBody from '../UI/MainBody'
import BoxGrid from '../UI/BoxGrid';
import Page from '../UI/Page';
import InfoPage from './ItemInfo';
import ChararacterSearchForm from '../Forms/ChararacterSearchForm';
import PaginateButtons from '../UI/PaginateButtons';
import Loader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';
import { episodeSearch } from '../../redux/action';


const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [numPages, setNumPages] = useState(0)
    const [loading, setLoading] = useState(false)
    const episodeSearching = useSelector(state => state.episode)
    const dispatch = useDispatch()

    //for individual episode
    const [charSelect, setCharSelect] = useState(false)
    const [episodeId, setepisodeId] = useState(1)

    const setCharPage = obj =>{
        setepisodeId(`${obj.id}`);
        setCharSelect(obj.condition)
    }

    const setCharPageBack = () => {
      setCharSelect(false);
    }

    const settingRequestId = str =>{
      console.log(str)
      dispatch(episodeSearch(str))
    }

    useEffect(() =>{
      const searchChars = async () => {
        setLoading(true)
        try {
          // console.log(episodesSearch)
            const response = await fetch(episodeSearching, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });

            if (response.status !== 200) {
              throw new Error("Can't Fetch Search");
            }

            const data = await response.json();
            console.log(data, 'data')
            // console.log(data.info, 'dat.info')
            setNumPages(data.info.pages)

            let episodeData = data.results.map((char) => {
              return {
                id: char.id,
                name: char.name,
                air: char.air_date,
                characters: char.charcters,
                episode: char.episode
              };
            });
            console.log(episodeData);
            setEpisodes(episodeData);
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            setLoading(false)
        } catch (err) {
          console.error(err);
        }
      };
      searchChars()
      //console.log(requestId);
       return () => {
         setEpisodes([]);
       };
    }, [episodeSearching])

    return (
      <Page>
        <h1  style={{textAlign: `center`, padding: `2% 3%`, fontSize: `30px`}}>episodes</h1>
        {charSelect ? (
            <InfoPage itemType="episode" requestString={episodeId} setCharPageBack={setCharPageBack}/>
        ) : (
          <div>
            <p style={{ textAlign: `center` }}>
              Search and Learn about your favorite Rick and Morty episodes!
            </p>
            { loading ? <Loader loadState={loading}/> : 
            <>
              <ChararacterSearchForm searchChars={settingRequestId}/>
              <MainBody>
                <BoxGrid itemType="episode" items={episodes} setCharPage={setCharPage}/>
              </MainBody>
              <PaginateButtons numPages={numPages} current={episodeSearching} pageTurn={settingRequestId}/>
            </>
            }
            
          </div>
        )}
      </Page>
    );
}
export default Episodes

