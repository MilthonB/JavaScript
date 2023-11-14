import { Todo } from "../todo/models/todo.model";


const Filter  = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state  =  {

    todos: [
         new Todo('Priedra del alma')
        ,new Todo('Priedra del infinito')
        ,new Todo('Priedra del tiempo')
        ,new Todo('Priedra del poder')
        ,new Todo('Priedra del realidad')
    ],
    filter: Filter.All

}


const saveStateTodoStorage = ()=>{

    localStorage.setItem('state',JSON.stringify(state))
}

const initStore = ()=> {
    loadStore();
    console.log('InitStore 😮‍💨')

}

const loadStore = () =>{
    if( localStorage.getItem('state') ){
        const { todos = [], filter = Filter.All } = JSON.parse(localStorage.getItem('state'))

        state.todos = todos
        state.filter =  filter 
    }
}


/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) =>{
    if( !description ) throw new Error( 'Description is required' )
    state.todos.push( new Todo(description) )
    saveStateTodoStorage()

}

const toggleTodo =  (todoId)=> {
    state.todos = state.todos.map( (todo) =>{
        if( todo.id === todoId){
            todo.done = !todo.done
        }
        return todo
    })
    saveStateTodoStorage()


}

const deleteTodo = ( todoId )=>{
    state.todos =  state.todos.filter( todo => todo.id != todoId)
    saveStateTodoStorage()

}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)
    saveStateTodoStorage()

}

const setFilter = ( newFilter = Filter.All )=>{
    state.filter = newFilter 
    saveStateTodoStorage()
}

const getCurrentFilter = () =>{
    return state.filter;
}

const getTodos = ( filter  =  Filter.All )=>{

    switch( filter ){
        case Filter.All:
            return [...state.todos];
        case Filter.Completed:
            return state.filter( todo => todo.done  )
        case Filter.Pending:
            return state.filter( todo => !todo.done) 
    }

}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo
}
