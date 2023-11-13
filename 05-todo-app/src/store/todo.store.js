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
    ],
    filter: Filter.All

}


const initStore = ()=> {
    console.log(state)
    console.log('InitStore 😮‍💨')

}

const loadStore = () =>{
    throw new Erro( 'Not implemented' )
}


/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) =>{
    throw new Erro( 'Not implemented' )
}

const toggleTodo =  (todoId)=> {
    throw new Erro( 'Not implemented' )
}

const deleteTodo = ( todoId )=>{
    throw new Erro( 'Not implemented' )

}

const deleteCompleted = () => {
    throw new Erro( 'Not implemented' )
}

const setFilter = ( newFilter = Filter.All )=>{
    throw new Erro( 'Not implemented' )
}

const getCurrentFilter = () =>{
    throw new Erro( 'Not implemented' )
}


export default {
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    toggleTodo
}
