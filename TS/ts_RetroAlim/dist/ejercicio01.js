"use strict";
class Vehiculo {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    toString() {
        return `Marca: ${this.marca}, modelo: ${this.modelo}, anio: ${this.anio}`;
    }
}
let carro = new Vehiculo("Toyota", "Hilux", 2020);
let moto = new Vehiculo("KTM", "SuperDuke 1290cc", 2024);
console.log(carro.toString());
console.log(moto.toString());
//# sourceMappingURL=ejercicio01.js.map