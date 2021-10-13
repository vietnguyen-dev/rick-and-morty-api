const CHAR_SEARCH = 'CHAR_SEARCH'
const EPI_SEARCH = 'EPI_SEARCH'
const LOC_SEARCH = 'LOC_SEARCH'

const defaultState = {
    character: `https://rickandmortyapi.com/api/character`,
    location: 'https://rickandmortyapi.com/api/location',
    episode: `https://rickandmortyapi.com/api/episode`
}

const searchReducer = (state = defaultState, action) =>{
    switch(action.type){
        //for page turns and form searches
        case CHAR_SEARCH:
            return {...state, character: action.query}
        case LOC_SEARCH:
            return {...state, location: action.query}
        case EPI_SEARCH:
            return {...state, episode: action.query}
        default:
           return state
    }
}

export default searchReducer