


const milthon = {
    name: 'Milthon',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.name} - edad: ${this.edad}`)
    }
}



const samuel = {
    name: 'samuel',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.name} - edad: ${this.edad}`)
    }
}


const eruviel = {
    name: 'eruviel',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.name} - edad: ${this.edad}`)
    }
}



//milthon.imprimir();
function Persona(nombre, edad) {

    console.log('Se ejecuto esta linea')

    this.name = nombre
    this.edad = edad

    this.imprimir =  function(){
        console.log(`Nombre: ${this.name} - edad: ${this.edad}`)
    }

}


//Nueva persona
const mario = new Persona('Mario',10)
