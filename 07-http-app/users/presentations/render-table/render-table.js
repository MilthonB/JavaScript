import usersStore from '../../store/users-store'
import { deleteUser } from '../../use-cases/delete-user-by-id';
import { getUserById } from '../../use-cases/get-user-by-id';
import { renderModal, showModal } from '../render-modal/render-modal';
import './render-table.css'



let table;

const createTable = () =>{
    const table1 = document.createElement('table')
    const tableheader  = document.createElement('thead')
    tableheader.innerHTML = `

    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `

    const tableBody = document.createElement('tbody')
    table1.append(tableheader,tableBody)

    return table1
}


const selectElementTableId =  async(event)  =>{
    
    const element = event.target.closest('.select-id')
    
    if( !element ) return

    const id = element.getAttribute('data-id')

    showModal(id)
    

}



const tableDeleteLister =  async(event)  =>{
    
    const element = event.target.closest('.delete-id')
    
    if( !element ) return

    const id = element.getAttribute('data-id')


    try {
        await deleteUser(id)
        await usersStore.reloadPage()

        document.querySelector('#current-page').innerText = usersStore.getCurrentPage()
        renderTable()
    } catch (error) {
        console.log(error)
        alert('No se pudo eliminar')
    }
    

}




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) =>{


    const users = usersStore.getUser();

    if( !table ){
        table =  createTable()
        
        element.append(table)
        table.addEventListener('click', (event)  => {
            selectElementTableId(event)

        }) 

        table.addEventListener('click', tableDeleteLister)
        // TODO: Listener a las tablas 

    }

    let tableHTML = '';

    users.forEach(  user => {

        //console.log(user.balance)
        tableHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href='#' class="select-id" data-id=${ user.id }> Select </a>
                    |
                    <a href='#' class="delete-id" data-id=${ user.id }> Delete </a>
                </td>
            </tr>
        `

    });


    table.querySelector('tbody').innerHTML = tableHTML



}

