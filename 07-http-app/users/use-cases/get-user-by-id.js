import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";



/**
 * 
 * @param {String | Number}  Id del usuario 
 * @returns {Promise<User>} Data que se muesttra 
 */
export const getUserById = async ( id  ) =>{

    const url = ` ${ import.meta.env.VITE_BASE_URL  }/users/${ id }` 

    const res = await fetch( url )

    const data = await res.json()

    const users =  localHostUserToModel(data);

    //console.log(users)

    return users
}


