const searchReducer = (state = { currentSearch: 'https://rickandmortyapi.com/api'}, action) =>{
    switch(action.type){
        //for page turns and form searches
        case 'SEARCH':
            return {...state, currentSearch: action.query}
        //for individual items in character, places, and locations
        default:
           return state
    }
}

export default searchReducer