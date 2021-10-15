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

            //all
            key={item.id}
            id={item.id}
            cardType={props.itemType}
            name={item.name}
            setPage={setPage}

            //for character
            imgSrc={item.imgSrc}
            status={item.status}
            species={item.species}

            //for location
            type={item.type}
            dimension={item.dimension}

            //for episiode
            air={item.air}
            characters={item.characters}
            episode={item.episode}
            
          />
        ))}
      </div>
    );
}

export default BoxGrid
