import React, {useState, useEffect} from 'react'
import MainBody from '../UI/MainBody'
import BoxCard from '../UI/BoxCard'
import Page from '../UI/Page';
import ChararacterSearchForm from '../Forms/ChararacterSearchForm';
import PaginateButtons from '../UI/PaginateButtons';

const Characters = () => {
    const [characters, setCharacters] = useState([])
    // const [page ,setPage] = useState(undefined)

    const fetchCharacters = async () =>{
        try {
            const response = await fetch(
              `https://rickandmortyapi.com/api/character`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                }
              }
            );
            //console.log(response)

            if (response.status !== 200) {
              throw new Error("Something went wrong!");
            }
            
            const data = await response.json();
            //console.log(data)
            //console.log(data.results)
            let charData = data.results.map(char =>{
                return {
                    id: char.id,
                    name: char.name,
                    description: `Species: ${char.species}, Status: ${char.status}`,
                    imgSrc: char.image
                }
            })
            //setPage(1)
            setCharacters(charData)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() =>{
        fetchCharacters();
    }, [])

    // const paginate = async() =>{
    //       try {
    //         const response = await fetch(
    //           `https://rickandmortyapi.com/api/character?page=${page}`,
    //           {
    //             method: "GET",
    //             headers: {
    //               "Content-Type": "application/json",
    //             },
    //           }
    //         );
    //         //console.log(response);

    //         if (response.status !== 200) {
    //           throw new Error("Something went wrong!");
    //         }

    //         const data = await response.json();
    //         //console.log(data);
    //         //console.log(data.results);
    //         let charData = data.results.map((char) => {
    //           return {
    //             id: char.id,
    //             name: char.name,
    //             description: `Species: ${char.species}, Status: ${char.status}`,
    //             imgSrc: char.image,
    //           };
    //         });

    //         setCharacters(charData);
    //       } catch (err) {
    //         console.error(err);
    //       }
    // }  

    return (
      <Page heading="Characters">
        <ChararacterSearchForm />
        <MainBody>
          {characters.map((character) => (
            <BoxCard
              key={character.id}
              name={character.name}
              imgSrc={character.imgSrc}
              description={character.description}
            />
          ))}
        </MainBody>
        <PaginateButtons />
      </Page>
    );
}

export default Characters
