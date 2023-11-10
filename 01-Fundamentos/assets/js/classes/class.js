



// clases
class Persona {

    // Siempre usa using stric
    // propiedades de clase
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre='Sin nombre', codigo='Sin codigo',frase='Sin frase' ){
        this.nombre = nombre 
        this.codigo = codigo 
        this.frase = frase 
        console.log('Hola!');
    }

    // Es recomendado que solo reciba un argumento
    set setcomidaFavorita( comida ){

        this.comida = comida.toUpperCase()
    }

    get getcomidaFavorita() {
        return this.comida;
    }

    quiensoy(){
        console.log(`Soy ${this.nombre} mi identidad es: ${this.codigo}`)
    }
}


// Si no envias informacion al contructor entonces el valor de la instacioa seran undifined
const spiderman= new Persona('Peter Parket', 'Spdy', 'Hola soy el sorprendente hombre que ara;a');
const airesman= new Persona('Antonio estrella', 'ironman', 'Yo soy ires man');

spiderman.quiensoy()



