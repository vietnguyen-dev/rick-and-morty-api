import React from 'react'
import './MainBody.css'

const MainBody = (props) => {
    return (
      <div className="mainBody">
        {props.children}
      </div>
    );
}

export default MainBody
