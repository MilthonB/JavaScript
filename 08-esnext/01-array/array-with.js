



const state = [
    {
        id: 1,
        name: 'batman'
    },
    {
        id: 2,
        name: 'superman'
    },
    {
        id: 3,
        name: 'flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    }

]

const index = 1;
const newName = 'Green Lantern';

// Cambiar elementos por su id sin nececidad de usar map para recorrer los elementoa

const newState =   state.with(index, {
    ...state.at(index),
    name: newName
})

console.table(newState)


// Es lo mismo
console.log('El ultmo heroue: ', state[state.length -1])
console.log('El ultmo heroue: ', state.at(-1))

