import { heroes } from "../data/hero"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const asyncComponent = (element) =>{

    console.log('asyncComponent') 

    // promesas 

    const id1 = '5d86371f1efebc31def272e2'
    findHero( id1 )
    .then( hero => element.innerHTML = hero.name)
    .catch(error => element.innerHTML = error)

    console.log(findHero(id1))


}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async ( id )=>{


    const hero = heroes.find( hero => hero.id ===id )

    return hero;
}

