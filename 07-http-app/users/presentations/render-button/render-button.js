import usersStore from "../../store/users-store"
import { renderTable } from "../render-table/render-table"
import './render-button.css'

/**
 * 
 * @param {HTMLDivElement} elemet 
 */
export const renderButtons  = (elemet)=>{

    const nextButton = document.createElement('button')
    nextButton.innerHTML = ' Netx >'

    const previewButton = document.createElement('button')
    previewButton.innerHTML = ' < Prev'
    
    const curretPage =  document.createElement('span')
    curretPage.id = 'current-page'
    curretPage.innerHTML = usersStore.getCurrentPage()
    
    
    

    elemet.append(previewButton,curretPage,nextButton)


    nextButton.addEventListener('click', async() =>{

        await usersStore.loadNextPage()
        curretPage.innerHTML = usersStore.getCurrentPage()
        renderTable(elemet)
        
    })
    
    previewButton.addEventListener('click', async()=>{
        await usersStore.loadPreviesPage()
        curretPage.innerHTML = usersStore.getCurrentPage()
        renderTable(elemet)
    })




}





