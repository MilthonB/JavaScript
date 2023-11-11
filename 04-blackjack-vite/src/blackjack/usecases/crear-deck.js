import _ from 'underscore'

//export const miNombre =  'Milthon'

/**
 * Esta funcion crea un nuevo desck
 * @param {Array<String>} tiposCarta ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposCarta, tiposEspeciales ) => {

    if( !tiposCarta ) throw new Error('Tipos de cartas son obligatorios')
    if( !tiposCarta.length === 0 ) throw new Error('Tipos de cartas son obligatorios como un arreglo de string')

    if( !tiposEspeciales ) throw new Error('Tipos de cartas especiales son obligatorios')
    if( !tiposEspeciales.length === 0 ) throw new Error('Tipos de cartas especiales son obligatorios como un arreglo de string')

    let deck = []
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}


//export default crearDeck;



