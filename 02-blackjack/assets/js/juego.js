


let deck         = [];
const tipos      = ['C','D','H','S']
const especiales = ['A','J','Q','K']

let puntosJugador = 0,
    puntosComputadora = 0

//Referencias Html
const btnPedir   = document.querySelector('#btnPedir')
const btnDetener = document.querySelector('#btnDetener')

const ptnHTML           = document.querySelectorAll('small')
const jugadorCartas     = document.querySelector('#Jugador-cartas')
const computadoraCarta  = document.querySelector('#Computadora-cartas')

// Esta funcion crea un nuevo deck
const crearDeck = ()=> {


    for (let i = 2; i < 10; i++) {
        for (let tipo of tipos) {
            deck.push( i + tipo )
        } 
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo)
        }
    }
    


    //console.log( deck )
    
    
    deck =  _.shuffle(deck)
    
    console.log( deck )


    return deck;
}


crearDeck();

// Esta funcion me permite tomar una nueva carta 

const pedirCarta = ()=>{

    if( deck.length === 0 ){
        throw 'No hay cartas en el deck'
    }

    const carta = deck.shift();
    
    return carta
}

//pedirCarta();

const valorCarta =( carta )=>{

    //Extraer el numero de la carta

    const valor = carta.substring(0,carta.length -1 );
  
    return isNaN(valor) ? 
        (( valor === 'A' ) ? 11 : 10) 
        : valor * 1   


}


const turnoComputadora = ( puntosMin )=>{

    do{
        const carta = pedirCarta()

        puntosComputadora = puntosComputadora + valorCarta(carta)

        ptnHTML[1].innerHTML = puntosComputadora
        const cartaNueva = document.createElement('img')

        cartaNueva.src = `assets/cartas/${carta}.png`
        cartaNueva.classList.add('carta') 

        computadoraCarta.append(cartaNueva)

        if( puntosMin > 21 )break;

    }while( (puntosComputadora  < puntosMin ) && ( puntosMin <= 21  ))
}

// Eventos 
btnPedir.addEventListener('click', ()=>{

    const carta = pedirCarta()

    puntosJugador =  puntosJugador + valorCarta(carta)

    ptnHTML[0].innerHTML = puntosJugador

    const cartaNueva =  document.createElement('img')

    cartaNueva.src = `assets/cartas/${carta}.png`
    cartaNueva.classList.add('carta')

    jugadorCartas.append(cartaNueva)


    if ( puntosJugador > 21 ) {
        console.warn('Has perdido, perdedor!')
        btnPedir.disabled = true
        btnDetener.disabled = true
        turnoComputadora(puntosComputadora)
    }else if( puntosJugador === 21 ){
        console.warn('Has ganado, ganador!')
        btnPedir.disabled  = true
        btnDetener.disabled = true
        turnoComputadora(puntosComputadora)
    }

})

// Evento click  btn detener
btnDetener.addEventListener('click', ()=>{
    btnPedir.disabled =  true
    btnDetener.disabled = true
    turnoComputadora(puntosJugador)
})


//Evento click btn nuevo
btnNuevo.addEventListener('click', ()=>{

    btnDetener.disabled = false 
    btnPedir.disabled = false

})


