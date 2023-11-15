import { heroes } from "../data/hero"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const promisesComponent = (element) =>{

    console.log('promisesComponent')

    const renderHero = ( hero ) =>{

        element.innerHTML = hero.name
    }

    const renderError = ( error ) =>{

        element.innerHTML = ` <h3> ${ error } </h3>`
    }


    const renderTwoHeroes = (hero1, hero2) =>{
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `


    }

    const id1 = '5d86371f1efebc31def272e2'
    const id2 = '5d86371f1efebc31def272e2'
    //findHero( id1 ).then( superHero => renderHero(superHero))

    //Forma tres
    Promise.all([
        findHero(id1),
        findHero(id2)
    ])
    .then( ({ hero1, hero2 })  => {
        renderTwoHeroes(hero1, hero2)
    })
    .catch( renderError )


    //! Forma dos
    let hero1;
    findHero( id1 )
        .then( hero => {
            hero1 = hero
            return findHero(id2)
        }).then( hero2 => {
            renderTwoHeroes( hero1, hero2 )
        })
        .catch(renderError)



// forma uno
    findHero( id1 )
        .then( (hero1 => {
            findHero(id2)
            .then(hero2 => {
                renderTwoHeroes(hero1,hero2)
            })
        }))
        //.catch(error => renderError(error))
        .catch( renderError )
 
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