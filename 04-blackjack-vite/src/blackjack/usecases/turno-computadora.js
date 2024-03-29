import { crearCartaHtml, pedirCarta, valorCarta } from './'
// turno  de la computadora
/**
 * 
 * @param {Number} puntosMinimos  que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento html para mostrar los putnos
 * @param {HTMLElement} divCartasComputadora Donde se muetran las imagenmes de la cartas 
 * @param {Array<String>} deck
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos minumos son necesarios')
    if( !deck ) throw new Error('Deck son necesarios')
    if( !puntosHTML ) throw new Error('HTML son necesarios')


    let puntosComputadora = 0

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

