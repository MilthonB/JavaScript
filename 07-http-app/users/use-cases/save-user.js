import { userModelToLocalHost } from '../mappers/user-to-localhost.mapper'
import {User} from '../models/user'


/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser  = async ( userLike ) =>{


    
    const user = new User(userLike)
    if( !user.firstName ||  !user.lastName )
        throw  'First & last name are required'
    
    
    // TODO: aqui falta un mapper
    const userToSave = userModelToLocalHost(user)

    if(user.id){
        throw 'No implentada la actualizacion'
        return
    }

    const updateUser =  await createUser(userToSave)

    return updateUser
}


const createUser = async ( user ) => {

    const url = ` ${ import.meta.env.VITE_BASE_URL  }/users`
    
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type' : 'application/json'
        }

    })

    const newUser = await res.json();
    console.log(newUser)
    return newUser

}