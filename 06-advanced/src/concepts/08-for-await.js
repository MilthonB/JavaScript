import { heroes } from "../data/hero";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    console.log('forAwaitComponent')

    const id = '5d86371f9f80b591f499df32'
    

    const herosId = heroes.map(hero =>  hero.id) 

    const heroPromise = getHeroesAsync(herosId)

    console.log(heroPromise)

    for await (const hero of heroPromise ){
        element.innerHTML += `${hero.name } </br>`
    }

    /**
     * 
    if( await getHeroAsync(id) ){
        element.innerHTML =  'Si existe ese heroe'
        return 
    }
    
    element.innerHTML =  'No existe ese heroe'
    */

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

      
    return heroes.find( hero => hero.id === id );
}