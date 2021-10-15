import React, {useRef} from 'react'

const CharInfo = (props) => {
  const charBox = useRef(props.cardType === 'character')
  const locBox = useRef(props.cardType === 'location')
  const epiBox = useRef(props.cardType === 'episode')
 
  console.log(`charInfo ${props.cardType}`)

    return (
      <>
        { charBox.current && 
        <>
          <p>Status: {props.status}</p>
          <p>Gender: {props.gender}</p>
          <p>Location:{props.location}</p>
          <p>Origin: {props.origin}</p>
          <p>Species:{props.species}</p>
          <p>First Appearance: Episode {props.firstAppear}</p>
          <p>Latest Appearance: Episode {props.lastestAppear}</p>
        </>}

        {locBox.current &&
        <>
          <p>Type: {props.type}</p>
          <p>Dimension: {props.dimension}</p>
          {/* {props.residents.map((resident, key) => <li key={key}>{resident}</li>)} */}
        </>
        }
        {
            epiBox.current && <>
            <p> Air Date: {props.air}</p>
            <p> Episode: {props.episode}</p>
            </>
          }
      </>
    );
}

export default CharInfo
