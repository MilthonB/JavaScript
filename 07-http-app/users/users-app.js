import { renderAddButton } from "./presentations/render-add-button/render-add-button";
import { renderButtons } from "./presentations/render-button/render-button";
import { renderModal } from "./presentations/render-modal/render-modal";
import { renderTable } from "./presentations/render-table/render-table";
import usersStore from "./store/users-store"
import { saveUser } from "./use-cases/save-user";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsearsApp = async(element) =>{

    element.innerHTML = 'Loading'
    await usersStore.loadNextPage();
    element.innerHTML = ''

    renderTable(element)
    renderButtons(element)
    renderAddButton(element)
    renderModal(element, async( userLike ) => {
        const user = await saveUser(userLike)
        usersStore.onUserChanged( user )
        renderTable()
    })
}