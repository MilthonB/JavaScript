

const hero = ['batman',
'superman',
'flash',
'Aquaman']



// Regresa un arerglo ordenado
const sortedHero = hero.toSorted()

const reverHero = sortedHero.toReversed()

const heroCopy = hero

const deletehero = hero.toSpliced(0,2,'green lantern')




console.table(hero)
console.table(sortedHero)
console.table(reverHero)
console.table(deletehero)