const searcReducer = (state = { currentSearch: 'https://rickandmortyapi.com/api'}, action) =>{
    switch(action.type){
        //for page turns and form searches
        case 'MAIN-SEARCH':
            return {...state, currentSearch: action.query}
        //for individual items in character, places, and locations
        case 'ITEM-SEARCH':
            return {...state, currentSearch: action.query}
        default:
            console.error('action.type doesnt exist', action.type)
            break;
    }

}

export default searcReducer