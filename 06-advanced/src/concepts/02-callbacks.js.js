import { heroes } from "../data/hero"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const callbackCompoenent = (element) =>{

    console.log('callbackCompoenent')

    const id = '5d86371f1efebc31def272e2';
    findHero(id, (hero)=>{
        element.innerHTML = hero.name
    })
}


// Un callback es una funcion que se recebi como argumente en otra funcion
/**
 * 
 * @param {String} heroId 
 * @param {(hero: Object) => void} callback 
 */
const findHero = (heroId, callback)=>{


    const hero = heroes.find(hero => hero.id === heroId )

    callback(hero)

}