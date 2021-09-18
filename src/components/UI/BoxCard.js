import React from 'react'
import './BoxCard.css'

const BoxCard = props => {
    const settingPage = () =>{
      props.setPage([props.id, false])
    }

    return (
      <div className="boxCard" onClick={settingPage}>
        <div>
          <img className='boxImg' src={props.imgSrc} alt={`${props.name}`} />
        </div>
        <div className='cardText'>
          <h3>{props.name}</h3>
          <p> Species: {props.species}</p>
          <p> Status: {props.status}</p>
        </div>
      </div>
    );
}

export default BoxCard
