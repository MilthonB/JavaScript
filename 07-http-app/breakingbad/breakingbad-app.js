

// Sintaxis con nombre en mayuscula es porque quiero decir que es un componente y es reutilizable
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = (element)=>{

    console.log('I am here')

    document.querySelector('#app-title').innerHTML = 'Breaking bad' 
    element.innerHTML = 'Loading...'
}


