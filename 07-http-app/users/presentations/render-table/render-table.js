import usersStore from '../../store/users-store'
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



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) =>{

    const users = usersStore.getUser();

    if( !table ){
        table =  createTable()
        element.append(table)
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
                    <a href='#' data-id=${ user.id }> Select </a>
                    |
                    <a href='#' data-id=${ user.id }> Delete </a>
                </td>
            </tr>
        `

    });


    table.querySelector('tbody').innerHTML = tableHTML



}

