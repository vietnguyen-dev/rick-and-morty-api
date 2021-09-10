import React from 'react'

const BoxCard = props => {
    return (
      <div>
        <img src={props.imgSrc} alt='rick and morty image' />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    );
}

export default BoxCard
