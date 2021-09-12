import React, {useState} from 'react'

const InfoPage = (props) => {
    const [itemType, setItemType] = useState(props.infoType)
    const [requestString, setRequestString] = useState(props.requestString)

    return (
        <div>
            <button onClick={()=> props.setCharPageBack()}>
                Back
              </button>  
            <h1>Info page for each item</h1>
        </div>
    )
}

export default InfoPage
