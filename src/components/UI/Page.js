import React from 'react'

const Page = (props) => {
    return (
        <div style={{ backgroundColor: `#f5f5f5`}}>
            {props.children}
        </div>
    )
}

export default Page
