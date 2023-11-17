
const state = {

    currentPage: 0,
    users: []

}


const loadNextPage = async()=>{
    throw new Error('No implementado')
    
}



const loadPreviesPage = async()=>{
    throw new Error('No implementado')
    
}



const onUserChanged = ()=>{
    
    throw new Error('No implementado')
}


const reloadPage = async()=>{
    throw new Error('No implementado')
}


export default {

    loadNextPage,
    loadPreviesPage,
    onUserChanged,
    reloadPage,


    getUse: () => [...state.users],
    getCurrentPage: () => state.currentPage
}



