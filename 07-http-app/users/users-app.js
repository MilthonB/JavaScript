import { renderTable } from "./presentations/render-table/render-table";
import usersStore from "./store/users-store"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsearsApp = async(element) =>{

    element.innerHTML = 'Loading'
    await usersStore.loadNextPage();
    element.innerHTML = ''

    renderTable(element)
}