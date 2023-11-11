
/**
 * Esta funcion retorna el valor numerico de la carta
 * @param {String} carta 
 * @returns {Number} retorna el valor de carata
 */
export const valorCarta = ( carta ) => {

    if( !carta ) throw new Error('La carta tiene que tener un valor para evaluear')
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}