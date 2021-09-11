import React from 'react'

const Page = (props) => {
    return (
        <div style={{ backgroundColor: `#f5f5f5`}}>
            <h1 style={{textAlign: `center`, padding: `2% 3%`, fontSize: `30px`}}>{props.heading}</h1>
            {props.children}
        </div>
    )
}

export default Page
