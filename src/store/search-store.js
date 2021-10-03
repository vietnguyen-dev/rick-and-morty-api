import React, {useState} from 'react'
let SearchContext = React.createContext('')

const SearchContext = () => {
    const [query, setQuery] = useState("https://rickandmortyapi.com/api")

    const getNewSearchQuery = (query) =>{
        console.log(query)
    }

    return (
        <SearchContext.Provider value={{
            search: query,
            getSearch: getNewSearchQuery
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext
