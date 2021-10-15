import React, { useRef } from 'react'
import './BoxCard.css'

const BoxCard = props => {
    const charBox = useRef(props.cardType === 'character')
    const locBox = useRef(props.cardType === 'location')
    const epiBox = useRef(props.cardType === 'character')

    const settingPage = () =>{
      props.setPage(props.id)
    }

    return (
      <div className="boxCard" onClick={settingPage}>
        { charBox.current &&
          <div>
            <img className='boxImg' src={props.imgSrc} alt={`${props.name}`} />
          </div>
        }
        <div className='cardText'>
          <h3>{props.name}</h3>

           {charBox.current && <>
            <p> Species: {props.species}</p>
            <p> Status: {props.status}</p>
          </>}

          {locBox.current && <>
          <p> Type: {props.type}</p>
          <p> Dimension: {props.dimension}</p>
          </>} 
          
          {
            epiBox.current && <>
            <p> Air Date: {props.air}</p>
            <p> Episode: {props.episode}</p>
            </>
          }
        </div>
      </div>
    );
}

export default BoxCard
