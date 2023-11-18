import { User } from ' ../model/user '

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveuser  = async ( userLike ) =>{


    const user = new User(userLike)
    
    
    // TODO: aqui falta un mapper

    if(user.id){
        throw 'No implentada la actualizacion'
        return
    }

    const updateUser =  await createUser(user)
    
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

    const newUser = res.json();
    console.log(newUser)
    return newUser

}