
//import {} from '../../../assets/cartas'

/**
 * 
 * @param {string} carta Es necesario el valor de la carta 
 * @return {HTMLElement} img de retorno
 */
export const crearCartaHtml = ( carta )=>{

    if( !carta )throw new Error('Se necesita una carta')
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta
}