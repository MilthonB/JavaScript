
import todoStore from "../store/todo.store";
import html  from "./app.html?raw";
import { renderTodos } from "./usecases";



const elementIds = {
    TodoList: '.todo-list'
}
/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId) => {



    const displayTodo = () =>{
        const todos =  todoStore.getTodos( todoStore.getCurrentFilter() )
        renderTodos(elementIds.TodoList, todos)
    }
    // cuando la funcion app es llamda
    (() =>{

        const app =  document.createElement('div')
        app.innerHTML = html // {{ name }}
        document.querySelector(elementId).append(app);
        displayTodo()
    })();

}