import React from 'react'
import './BoxCard.css'

const BoxCard = props => {
    const settingPage = () =>{
      props.setId(props.id);
      props.setPage(false)
    }

    return (
      <div className="boxCard" onClick={settingPage}>
        <div>s
          <img className='boxImg' src={props.imgSrc} alt={`${props.name}`} />
        </div>
        <div className='cardText'>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    );
}

export default BoxCard
