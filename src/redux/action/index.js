const mainSearch = newSearch=>{
    return {
        type: 'MAIN-SEARCH',
        query: newSearch
    }
}

const itemSearch = newSearch =>{
    return {
        type: 'ITEM-SEARCH',
        query: newSearch
    }
}

export { mainSearch, itemSearch } 