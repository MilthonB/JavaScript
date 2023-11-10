class Persona{


    static porObjeto( { nombre, apellido, pais } ){

        return new Persona( nombre, apellido, pais  );

    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){

        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`)

    }

}

const nombre1 = 'Milthon',
      appelido = 'B',
      pais = 'PO';

const MB  = {

    nombre:'Milthonb',
    apellido: 'B',
    pais: 'PO'
}


const persona1 = new Persona(nombre1,appelido, pais)

const persona2 = Persona.porObjeto(MB)
persona1.getInfo(  )
      

