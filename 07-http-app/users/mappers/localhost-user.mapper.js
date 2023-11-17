import { User } from "../models/user"



/**
 * 
 * @param {Like<User>} localhostuser 
 * @returns {User} retur a instance to User
 */
export const localHostUserToModel = ( localhostuser ) =>{

    const  {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name
    } = localhostuser

    return new User(
        {
            avatar,
            balance,
            firstName:first_name,
            gender,
            id,
            isActive,
            lastName: last_name
        }
    )
}