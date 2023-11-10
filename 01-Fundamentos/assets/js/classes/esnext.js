


class Recatangulo {


    #area = 0
    
    constructor( base = 0, altura = 0  ){

        this.base = base;
        this.altura = altura;

        this.#area =  base *altura
    }


    calArea(){
        console.log(this.#area * 2)
    }

}


const rectangulo  = new Recatangulo(10,15);



console.log(rectangulo)