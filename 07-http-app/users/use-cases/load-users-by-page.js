import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";



/**
 * 
 * @param {String} page que se deseas cargar 
 * @returns {Promise<User[]>} Data que se muesttra 
 */
export const loadUserByPage = async ( page = 1 ) =>{

    const url = ` ${ import.meta.env.VITE_BASE_URL  }/users?_page=${page}` 

    const res = await fetch( url )

    const data = await res.json()

    const users =  data.map(localHostUserToModel);

    console.log(users)

    return users
}


