



/**
 * 
 * @param {HTMLDivElement} element 
 */
export  const envconcept = (element) =>{

    console.log(import.meta.env)

    const html = `
        Dev: ${ import.meta.env.DEV }  
        Prod: ${ import.meta.env.PROD }  
        Kyy: ${ import.meta.env.VITE_API_KEY }  
    `

    element.innerHTML = html 

}