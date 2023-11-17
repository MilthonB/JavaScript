import './render-add-button.css'

/**
 * 
 * @param {HTMLDivElement} elemet 
 */
export const renderAddButton = (elemet) =>{

    const fabButton = document.createElement('button')
    fabButton.innerHTML = '+' 
    fabButton.classList.add('fab-button')


    elemet.append(fabButton)

    fabButton.addEventListener('click', ()=>{
        throw new Error('No implementado')
    })

}