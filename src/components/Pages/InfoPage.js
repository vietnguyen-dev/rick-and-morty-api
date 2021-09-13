import React, {useState, useEffect} from 'react'
import './InfoPage.css'

const InfoPage = (props) => {
  const [info, setInfo] = useState({});

  const getCharData = async() =>{
      try{
          const response = await fetch(props.requestString,   {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              }
            }
          );

          if (response.status !== 200) {
            throw new Error(`Can't Fetch Character id ${props.requestString}`);
          }

          const data = await response.json();
          setInfo(data)
      } catch (err){
          console.error(err)
      }
  }

  useEffect(() => {
    getCharData();
    console.log(props.requestString);
    return () => {
      setInfo({});
    };
  }, [props.requestString]);

  return (
    <>
      <div>
        <button onClick={() => props.setCharPageBack()}>Back</button>
      </div>
      <div className='infoPage'> 
        <div>
            <h1>{info.name}</h1>
            <p>Gender: {info.gender}</p>
            <p></p>
        </div>
        <div>
            <img src={info.image} alt={info.name}/>
        </div>
       </div>
      </>
  );
}

export default InfoPage
