import React, {useState, useEffect} from 'react'
import './InfoPage.css'
import CharInfo from '../UI/CharInfo';

const InfoPage = (props) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getCharData = async () => {
      try {
        const response = await fetch(props.requestString, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error(`Can't Fetch Character id ${props.requestString}`);
        }

        const data = await response.json();

        let regexAfterSlash = /[^/]*$/;

        let refinedCharData = {
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
        };
        setInfo(refinedCharData);
      } catch (err) {
        console.error(err);
      }
    };
    getCharData();
      console.log(`from infoPage`, props.requestString);
    return () => {
      setInfo({});
    };
  }, [props.requestString]);

  return (
    <>
      <button className="backButton" onClick={() => props.setCharPageBack()}>
        Back
      </button>
      <h2 className="infoHead">{info.name}</h2>
      <div className="infoPage">
        <img src={info.image} alt={info.name} />
        <div className="infoText">
            <CharInfo gender={info.gender} status={info.status} location={info.location} 
            origin={info.origin} species={info.species} firstAppear={info.firstAppear} lastestAppear={info.lastestAppear} />
        </div>
      </div>
    </>
  );
}

export default InfoPage
