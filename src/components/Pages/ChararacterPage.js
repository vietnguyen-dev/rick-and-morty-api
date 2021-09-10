import React from 'react'

const ChararacterPage = () => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.imgSrc} />
            <p>{props.description}</p>
        </div>
    )
}

export default ChararacterPage
