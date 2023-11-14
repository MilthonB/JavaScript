
import todoStore from "../store/todo.store";
import html  from "./app.html?raw";
import { renderTodos } from "./usecases";



const elementIds = {
    TodoList : '.todo-list',
    TodoInput: '#new-todo-input'
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

    const newDescriptionTodo =  document.querySelector(elementIds.TodoInput);
    const todoListUl =  document.querySelector(elementIds.TodoList);


    newDescriptionTodo.addEventListener('keyup', (event => {
        if( event.keyCode !== 13 ) return
        if( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo(event.target.value)
        displayTodo()
        event.target.value = '';

    }))

    todoListUl.addEventListener('click', (event) => {
        const elementuuid = event.target.closest('[data-id]');
        todoStore.toggleTodo( elementuuid.getAttribute('data-id') )
        displayTodo()
    });
    
    todoListUl.addEventListener('click', (event) => {
        const elementuuid = event.target.closest('[data-id]');
        if( !elementuuid || event.target.className !== 'destroy')return;
        
        todoStore.deleteTodo(elementuuid.getAttribute('data-id'))        
        displayTodo()
    });



    

}