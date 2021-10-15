import React, {useState, useEffect, useRef} from 'react'
import './InfoPage.css'
import CharInfo from '../UI/CharInfo';

const InfoPage = (props) => {
  const [info, setInfo] = useState({});
  const itemInfoType = useRef(props.itemType)
  const urlRequest = useRef(props.requestString)

  useEffect(() => {
    const getCharData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/${itemInfoType.current}/${urlRequest.current}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error(`Can't Fetch Character id ${urlRequest.current}`);
        }

        const data = await response.json();

        let regexAfterSlash = /[^/]*$/;

        let itemData = {}
        console.log(data)

        switch(itemInfoType.current){
          case 'character':
            itemData = {
              name: data.name,
              image: data.image,
              location: data.location.name,
              origin: data.origin.name,
              species: data.species,
              gender: data.gender,
              type: data.type,
              status: data.status,
              firstAppear: data.episode[0].match(regexAfterSlash),
              lastestAppear: data.episode[data.episode.length - 1].match(regexAfterSlash),
            }
            break;
          case 'location':
            itemData = {
              name: data.name,
              type: data.type,
              dimension: data.dimension,
              residents: data.residents
            }
            break;
          case 'episode':
            itemData = {
              name: data.name,
              air: data.air_date,
              episode: data.episode
            }
            break;
          default:
            throw new Error('no such item information')
        }

        // console.log(itemData)
        setInfo(itemData);
      } catch (err) {
        console.error(err);
      }
    };
    getCharData();
      console.log(`from infoPage`, urlRequest.current);
    return () => {
      setInfo({});
    };
  }, []);

  return (
    <>
      <button className="backButton" onClick={() => props.setCharPageBack()}>
        Back
      </button>
      <h2 className="infoHead">{info.name}</h2>
      <div className="infoPage">
        <img src={info.image} alt={info.name} />
        <div className="infoText">
            <CharInfo cardType={itemInfoType.current} gender={info.gender} status={info.status} location={info.location} 
              origin={info.origin} species={info.species} firstAppear={info.firstAppear} lastestAppear={info.lastestAppear} 
              type={info.type} dimension={info.dimension} air={info.air} episode={info.episode}
            />
        </div>
      </div>
    </>
  );
}

export default InfoPage
