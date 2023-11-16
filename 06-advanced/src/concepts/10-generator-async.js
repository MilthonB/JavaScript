import { heroes } from "../data/hero"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const generatorAsyncComponent = async(element) =>{

    console.log('generatorAsyncComponent') 

    const heroeGenerador = getHeroeGenerator()
    // promesas 

    let isFinish = false; 
    do{

        const { value, done } = await heroeGenerador.next();

        isFinish =  done

        console.log(done)
        if( isFinish ) break

        element.innerHTML = value

    }while( !isFinish )


}


async function* getHeroeGenerator(){

    for ( const hero of heroes ){
        await sleep();
        yield  hero.name
    }

    return 'Ya no hay mas valores'

}

const sleep = () => {

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 100);
        })

}

