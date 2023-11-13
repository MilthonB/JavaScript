import { createTodoHTML } from "./create-todo-html";



let element;

/**
 * 
 * @param {String} elementId `
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] )=>{


    if( !element ){
        element = document.querySelector(elementId)
    }

    if( !element ) throw new Error(`Element ${ elementId } not found`)
    /**<li class="completed" data-id="abc">
    <div class="view">
        <input class="toggle" type="checkbox" checked>
        <label>Probar JavaScript</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li> -->**/

    
    element.innerHTML = '';

    todos.forEach(todo => {
        element.append( createTodoHTML(todo) )
    }); 




}