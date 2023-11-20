import { User } from "../models/user";
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


/**
 * 
 * @param {User} updatedUser 
 */
const onUserChanged = ( updatedUser)=>{
    

    let wasFound;

    state.users =  state.users.map( user => {
        if(user.id === updatedUser.id){

            wasFound = true
            return updatedUser
        }

        return user
    })


    if(state.users.length > 10 && !wasFound ){
        state.users.push(updatedUser)
    }



    
}


const reloadPage = async()=>{
    const users = await loadUserByPage( state.currentPage)
    if(users.length === 0) {
        await loadPreviesPage();
        return
    }
    state.users =  users
}


export default {

    loadNextPage,
    loadPreviesPage,
    onUserChanged,
    reloadPage,


    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}



