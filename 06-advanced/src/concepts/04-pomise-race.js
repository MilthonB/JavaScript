import { heroes } from "../data/hero"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const promiseRaceComponent = (element) =>{

    console.log('demoComponent') 

    element.innerHTML=  'Loading...' 

    const renderValue = ( value ) =>{

        element.innerHTML = value

    }

    Promise.race([
        slowPromise(),
        MediumPromise(),
        FastPromise()
    ])
    .then( renderValue )

}


const slowPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('SlowPromise')
    }, 2000);
});


const MediumPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('MediumPromise')
    }, 1500);
});


const FastPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('FastPromise')
    }, 1000);
});
