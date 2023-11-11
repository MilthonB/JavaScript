

/**
 * Esta funcion me retorna el valor de una carta
 * @param {Array<String>} deck 
 * @returns {string} Retorna una carta del mazo
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}