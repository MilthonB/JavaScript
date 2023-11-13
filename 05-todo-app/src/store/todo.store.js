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



export default {
    initStore
}
