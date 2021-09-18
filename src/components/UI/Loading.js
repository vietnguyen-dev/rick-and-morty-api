import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loading = (props) => {
    return (
        <ClipLoader color={`#007bff`} loading={props.loadState} size={250}/> 
    )
}

export default Loading
