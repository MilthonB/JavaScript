import { loadUserByPage } from "../use-cases/load-users-by-page"

const state = {

    currentPage: 0,
    users: []

}


const loadNextPage = async()=>{

 
    const users = await loadUserByPage( state.currentPage + 1 )
    
    if(users.length === 0) return;
    
    state.currentPage += 1
    
    state.users =  users
    //console.log(users)
}



const loadPreviesPage = async()=>{

    
   
    if( state.currentPage === 1 ) return
    const users = await loadUserByPage( state.currentPage - 1 )

    state.currentPage -=1
    state.users =  users
    //console.log(users)
    
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



