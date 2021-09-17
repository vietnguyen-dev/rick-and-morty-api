import React from 'react'

const CharInfo = (props) => {
    return (
      <>
        <p>Status: {props.status}</p>
        <p>Gender: {props.gender}</p>
        <p>Location:{props.location}</p>
        <p>Origin: {props.origin}</p>
        <p>Species:{props.species}</p>
        <p>First Appearance: Episode {props.firstAppear}</p>
        <p>Latest Appearance: Episode {props.lastestAppear}</p>
      </>
    );
}

export default CharInfo
