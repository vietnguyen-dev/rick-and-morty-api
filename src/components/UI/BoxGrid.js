import React from 'react'
import BoxCard from "../UI/BoxCard";
import './BoxGrid.css'

const BoxGrid = (props) => {
    const setPage = info =>{
        const data = {
            id: info,
            condition: true
        }
        // console.log(data)
        props.setCharPage(data)
    }

    return (
      <div className="boxGrid">
        {props.items.map((item) => (
          <BoxCard
            key={item.id}
            id={item.id}
            name={item.name}
            imgSrc={item.imgSrc}
            status={item.status}
            species={item.species}
            setPage={setPage}
          />
        ))}
      </div>
    );
}

export default BoxGrid
