

class Singleton {

    static #instancia;

    nombre = '';


    constructor(nombre = '') {

        const a = undefined



        if( !!Singleton.#instancia ){

            return Singleton.#instancia;

        }


        Singleton.#instancia = this;
        this.nombre = nombre
        //return this;

    }




}

const instancia1 = new Singleton('IronMan')

console.log(' Noimbre de la intancia es'+instancia1.nombre)
