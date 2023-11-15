



/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const promisesComponent = (element) =>{

    console.log('promisesComponent')


}


/**
 * 
 * @param {string} id 
 * @return {Promise<Object>}
 */
const findHero = ( id )=>{


    //Declaracion de una promesa
    return new Promise( ( resolve, reject) => {
        
        const hero = heroes.find(hero => hero.id == id);

        if( hero ){
            resolve(hero)
            return;
        }


        reject(`Hero with id ${id} not found`)

    })
    
    
    
    

    


}