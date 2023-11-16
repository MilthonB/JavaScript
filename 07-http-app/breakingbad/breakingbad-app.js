


/**
 * @returns { Promise<Object> } queote Information
 */
const fetchQuote = async ()=>{

    const res  = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data = await res.json()


    return data[0]
}


// Sintaxis con nombre en mayuscula es porque quiero decir que es un componente y es reutilizable
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = async (element)=>{

   

    document.querySelector('#app-title').innerHTML = 'Breaking bad' 
    
    
    //const quote = await fetchQuote()
    
    const quoteLabel = document.createElement('blockquote')
    const auhtorLabel = document.createElement('h3')
    const nextWuoteBUtton = document.createElement('button')
    nextWuoteBUtton.innerText = 'Next Quote'
    
    

    
    const renderQuote = (data)=>{
        
        quoteLabel.innerHTML =  data.quote
        auhtorLabel.innerHTML = data.author
        element.replaceChildren(quoteLabel, auhtorLabel, nextWuoteBUtton)


    }

    nextWuoteBUtton.addEventListener('click', async(event) => {
        element.innerHTML = 'Loading'    
        const data = await fetchQuote()
        renderQuote(data)

    })


    fetchQuote()
        .then(renderQuote)



}


