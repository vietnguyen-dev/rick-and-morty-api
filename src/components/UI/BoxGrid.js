import React from 'react'
import BoxCard from "../UI/BoxCard";
import './BoxGrid.css'

const BoxGrid = (props) => {
    return (
      <div className="boxGrid">
        {props.items.map((item) => (
          <BoxCard
            key={item.id}
            id={item.id}
            name={item.name}
            imgSrc={item.imgSrc}
            description={item.description}
            setPage={() => props.setCharPage()}
            setId={() => props.setCharId()}
          />
        ))}
      </div>
    );
}

export default BoxGrid
