import { loadUserByPage } from "../use-cases/load-users-by-page"

const state = {

    currentPage: 0,
    users: []

}


const loadNextPage = async()=>{

    const users = await loadUserByPage( state.currentPage+1 )

    console.log(users)
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


    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}



