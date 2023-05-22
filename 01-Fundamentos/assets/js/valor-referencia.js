


let a = 10
let b = a 

a = 30 

console.log({a,b})

let juan = { nombre: 'Juan'};
let anna = { ...juan }; // operador spred para no pasar el objeto como referencia si no como una copia 
anna.nombre = 'Anna'

console.log({juan, anna})

// .. dentro d los atributos de uan funcon se llama parametro rest
// const cambiarNombre = ({...persona}) => {
const cambiarNombre = (persona) => {
    persona.nombre = 'Tony'
    return persona
}

let peter = {nombre: 'Peter'}
let tony = cambiarNombre({...peter})

console.log({peter, tony})


// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña']

// const otrasFrutas = [ ...frutas]

console.time('Slice')
const otrasFrutas = frutas.slice()
console.timeEnd('Slice')


console.time('Spread')
const otrasFrutas2 = [...frutas]
console.timeEnd('Spread')

otrasFrutas.push('Mango')
console.table({frutas, otrasFrutas})

