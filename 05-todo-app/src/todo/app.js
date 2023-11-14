
import  todoStore, { Filter } from "../store/todo.store";
import html  from "./app.html?raw";
import { renderTodos } from "./usecases";



const elementIds = {
    TodoList  : '.todo-list',
    TodoInput : '#new-todo-input',
    TodoClear : '.clear-completed',
    TodoFilter: '.filtro',
    TodoCount : '#pending-count'
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
    const clearCompletedButtton =  document.querySelector(elementIds.TodoClear);
    const filterTodoLis =  document.querySelectorAll(elementIds.TodoFilter)
    const todoCount =  document.querySelector(elementIds.TodoCount)


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

    clearCompletedButtton.addEventListener('click', (event =>{

        localStorage.clear()
        todoStore.deleteCompleted();
        displayTodo()

    }))

    filterTodoLis.forEach(element => {
        element.addEventListener( 'click', (element) =>{
            filterTodoLis.forEach( el => el.classList.remove('selected'))
            element.target.classList.add('selected')

            console.log(element.target.text) // obtener el texto 

            switch( element.target.text ){
                case 'Todos':
                    todoStore.setFilter( Filter.All )
                    displayTodo()
                    todoCount.innerText = todoStore.getTodos(  Filter.All ).length
                break;
                case 'Pendientes':
                    todoStore.setFilter( Filter.Pending )
                    todoCount.innerText = todoStore.getTodos(Filter.Pending).length
                    displayTodo()
                break;
                case 'Completados':
                    todoStore.setFilter( Filter.Completed )
                    todoCount.innerText = todoStore.getTodos(Filter.Completed).length
                    displayTodo()
                break;
            }

           
        })
    });





}