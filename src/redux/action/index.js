export const charSearch = searchQuery =>{
    return {
        type: 'CHAR_SEARCH',
        query: searchQuery
    }
} 

export const locationSearch = searchQuery =>{
    return {
        type: 'LOC_SEARCH',
        query: searchQuery
    }
} 

export const episodeSearch = searchQuery =>{
    return {
        type: 'EPI_SEARCH',
        query: searchQuery
    }
} 