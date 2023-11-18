



export const userModelToLocalHost = ( user ) =>{

    const  {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName
    } = user



    const data = {
        avatar,
        balance,
        first_name : firstName,
        gender,
        id,
        isActive,
        last_name: lastName
    }


    return data


}