



const superHeroes = [
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

// clonar arreglos
const superCp =  structuredClone(superHeroes)

superCp[0].name = 'Green Lantern'


console.table(superHeroes)
console.table(superCp)





