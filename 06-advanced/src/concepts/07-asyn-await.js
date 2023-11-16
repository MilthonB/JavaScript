import { heroes } from "../data/hero"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const asyncwWAIT2cOMPONENT = async (element) =>{

    console.log('asyncwWAIT2cOMPONENT') 

    console.time('Start')
    // promesas 
    //const value1 = await slowPromise()
    //const value2 = await MediumPromise()
    //const value3 = await FastPromise()
    
    const [ value1, value2, value3 ] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(0)
    ])


    element.innerHTML = `
    
    Value1:${value1}</br>
    Value2:${value2}</br>
    Value3:${value3}</br>
    
    `
    
    console.timeEnd('Start')



}


const slowPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('SlowPromise')
    }, 2000);
});


const mediumPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('MediumPromise')
    }, 1500);
});


const fastPromise = () => new Promise(resolve =>{
    setTimeout(() => {
        resolve('FastPromise')
    }, 1000);
});

