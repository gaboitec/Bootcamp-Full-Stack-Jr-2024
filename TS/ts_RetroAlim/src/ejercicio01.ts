/*Crea una clase llamada "Vehículo" con propiedades como "marca", 
"modelo" y "año". Luego, crea dos objetos que representen un automóvil y 
una motocicleta. ¿Qué características comunes pueden abstraerse en una 
clase superior? */

//crear clase:
class Vehiculo{
    marca: string;
    modelo: string;
    anio: number;

    constructor(marca: string, modelo: string, anio: number){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    toString(): string{
        return `Marca: ${this.marca}, modelo: ${this.modelo}, anio: ${this.anio}`
    }
}

//Instanciar varios objetos (instanciamos)

let carro = new Vehiculo("Toyota", "Hilux", 2020);
let moto = new Vehiculo("KTM", "SuperDuke 1290cc", 2024);

console.log(carro.toString());
console.log(moto.toString());


//