import { heroes } from "../data/hero"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const callbackCompoenent = (element) =>{

    console.log('callbackCompoenent')

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f1efebc31def272e2';
    findHero(id1, (error,hero1)=>{
        //element.innerHTML = hero?.name || 'No hay heroe'
        if( error ){
            element.innerHTML = error
            return 
        }

        findHero(id2, ( error, heroe2)=>{
            if( error ){
                element.innerHTML = error
                return 
            }
            element.innerHTML = `${heroe2.name} && ${hero1.name}`
        })
        //element.innerHTML = hero1.name
    })
}


// Un callback es una funcion que se recebi como argumente en otra funcion
/**
 * 
 * @param {String} heroId 
 * @param {(erro: String|null,hero: Object) => void} callback 
 */
const findHero = (heroId, callback)=>{


    const hero = heroes.find(hero => hero.id === heroId )


    if(!hero ){
        callback(`Hero with id  ${heroId} not found`)
        return 
    }

    callback(null,hero)

}