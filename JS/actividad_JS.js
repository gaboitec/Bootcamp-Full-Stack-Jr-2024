
/*********EJERCICIO #1**********
    Crear una función que en base a la edad que ingreso el usuario devolver un 
    mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.*/
function esMayor(edad){
    if(edad >= 18 && edad <= 120){
        return "Usted es MAYOR de Edad";
    }
    else if(edad < 18 && edad >= 0){
        return "Usted es MENOR de Edad";
    }
    else{
        return "Ingrese una edad válida"
    }
}

let edad_usuario = prompt("Ingrese su edad:");

alert(esMayor(edad_usuario));

/*********EJERCICIO #2**********
 Crear una función que determine la nota final de un alumno*/
const pesoExamen = 0.20, pesoTareas = 0.40, pesoAsistencia = 0.10, pesoInvestigacion = 0.30;

function calcularNotaFinal(examen, tareas, asistencia, investigacion) {
    const notaFinal = (examen * pesoExamen) + (tareas * pesoTareas) + (asistencia * pesoAsistencia) + (investigacion * pesoInvestigacion);

    return notaFinal;
}

const notaExamen = 85, notaTareas = 90, notaAsistencia = 95, notaInvestigacion = 80;

const notaFinal = calcularNotaFinal(notaExamen, notaTareas, notaAsistencia, notaInvestigacion);
alert("La nota final del alumno es: " + notaFinal);

/*********EJERCICIO #3**********
 Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento*/
let arreglo_empleados = [
    {
        nombre: "Oppenheimer",
        categoria: "D",
        sueldo: 750
    },
    {
        nombre: "Tesla",
        categoria: "C",
        sueldo: 605
    },
    {
        nombre: "Einstein",
        categoria: "A",
        sueldo: 810
    }
]

let aumento_salario;
for(let posicion = 0; posicion < arreglo_empleados.length; posicion++){
    let salario = arreglo_empleados[posicion].sueldo 
    let categoria = arreglo_empleados[posicion].categoria
    
    switch(categoria){
        case "A":
            aumento_salario = salario + (salario * 0.15)
        break;
        case "B":
            aumento_salario = salario + (salario * 0.30)
        break;
        case "C":
            aumento_salario = salario + (salario * 0.10)
        break;
        case "D":
            aumento_salario = salario + (salario * 0.20)
        break;
        default:
            aumento_salario = 0
    }

    alert(arreglo_empleados[posicion].nombre);
    alert("Sueldo anterior: " + salario);
    alert("Sueldo con aumento: " + aumento_salario);
}

/*********EJERCICIO #4**********
 Crear una función que en base a 2 números enteros que ingrese el usuario, 
 calcular cual número es el mayor y devolverlo.*/
function encontrarMayor(num1, num2){
    if(num1 > num2){
        alert("El mayor es No.1: " + num1);
    }
    else if(num2 > num1){
        alert("El mayor es No.2: " + num2);
    }
    else{
        alert("Ninguno es mayor");
    }
}

const numero1 = prompt("Ingrese el valor del numero 1:");
const numero2 = prompt("Ingrese el valor del numero 2:");

encontrarMayor(numero1, numero2);

/*********EJERCICIO #5**********
 Realizar una función para una tienda de coches en donde se deberá calcular: 
 Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el 
 coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE 
 el descuento será del 20%.*/
function calcularDescuento(arreglo) {
    for(let i = 0; i < arreglo.length; i++){
        let descuento = 0
        let modelo = arreglo[i].auto;
        let precio = arreglo[i].precio;

        if (modelo === 'FORD FIESTA') {
            descuento = precio - (precio * 0.05);
        } else if (modelo === 'FORD FOCUS') {
            descuento = precio - (precio * 0.1);
        } else if (modelo === 'FORD ESCAPE') {
            descuento = precio - (precio * 0.2);
        }
    
        alert("Modelo: " + modelo + "\nPrecio: " + precio + "\nPrecio con descuento: " + descuento);
    }
}

let arregloAutos = [
    {
        auto: "FORD FOCUS",
        precio: 30000
    },
    {
        auto: "FORD FIESTA",
        precio: 38000
    },
    {
        auto: "FORD ESCAPE",
        precio: 29500
    },
]

calcularDescuento(arregloAutos);

/*********EJERCICIO #6**********
 Crear una Función para calcular el descuento en viajes turísticos*/
function calcularDescuentoViaje() {
    const origen = "Palma";
    const destinos = ["La costa del Sol (1)", "Panchimalco (2)", "Puerto el Triunfo(3)"];
    const destino = prompt("Selecciona tu destino :" + destinos);

    let descuento;

    if (destino == "1") {
        descuento = "5%";
    } else if (destino == "2") {
        descuento = "10%";
    } else if (destino == "3") {
        descuento = "15%";
    } else {
        alert("Opción no válida. Por favor, selecciona una opción válida");
        return;
    }

    alert("El origen es " + origen + " y el destino seleccionado es " + destinos[destino - 1] + ". El descuento aplicado es del " + descuento);
}

calcularDescuentoViaje();

/*********EJERCICIO #7**********
 Se realiza la carga de 10 valores enteros por teclado. cantidad de negativos, positivos
 multiplos de 15 y valor acumulado de numeros pares*/
let num;
let negativos = 0, positivos = 0, multiplos15 = 0, valorAcumuladoPares = 0;

for(let i = 0; i < 10; i++){
    num = prompt("Agregue el entero #" + (i+1) + ":");
    
    if(num < 0){
        negativos++;
    }else if(num > 0){
        positivos++;
    }

    if(num % 15 == 0){
        multiplos15++;
    }

    if(num % 2 == 0){
        valorAcumuladoPares += num;
    }
}

alert("Numeros negativos: " + negativos + "\nNumeros positivos: " + positivos + "\nNumeros multiplos de 15: " + multiplos15 + "\nSuma de numeros pares: " + valorAcumuladoPares);

/*********EJERCICIO #8**********
 Escriba un programa que muestre la tabla de multiplicar del 1 al 10 
 del número ingresado por el usuario. */
let numero = prompt("Ingrese un número:");

for(let i = 1; i <= 10; i++){
    console.log(numero + " * " + i + " = " + numero*i);
}

/*********EJERCICIO #9**********
 Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
 Fahrenheit*/ 
 
let temperatura = prompt("Ingrese una temperatura(Celsius):");

function convertirAFarenheit(temp){
    let result = ((9/5) * temp) + 32;

    if(result >= 14 && result <= 32){
        alert(Math.round(result*100)/100 + "F, Temperatura baja")
    }else if(result >= 33 && result <= 68){
        alert(Math.round(result*100)/100 + "F, Temperatura adecuada")
    }else if(result >= 69 && result <= 96){
        alert(Math.round(result*100)/100 + "F, Temperatura alta")
    }else{
        alert("Temperatura desconocida")
    }
}

convertirAFarenheit(temperatura);

/*********EJERCICIO #10**********
 Ejercicio con edades de diferentes jornadas, promedios y mayor*/
let edades = [[],[],[]]

for(let i = 0; i < 5; i++){
        edades[0][i] = parseInt(prompt("Matutina | Ingrese la edad #" + (i+1) + ":"));
}
for(let i = 0; i < 6; i++){
    edades[1][i] = parseInt(prompt("Vespertina | Ingrese la edad #" + (i+1) + ":"));
}
for(let i = 0; i < 11; i++){
    edades[2][i] = parseInt(prompt("Nocturna | Ingrese la edad #" + (i+1) + ":"));
}

function calcularPromedios(array){
    let promedios = [0,0,0];//[promedioMatutina, promedioVespertina, promedioNocturna]
    let mayor;
    for(let i = 0; i < array.length; i++){
        let suma = 0;
        for(let j = 0; j < array[i].length; j++){
            suma += array[i][j];
        }

        promedios[i] = Math.round(suma / array[i].length);//Calculando promedios

        if(i==0){mayor = promedios[i]}//si es primera vuelta mayor -> primer promedio
        if(promedios[i] > mayor){mayor = promedios[i]}//si los siguientes promdios son mayores, mayor -> promedio
    }

    alert("Promedio Matutina: " + promedios[0] + "Promedio Vespertina: " + promedios[1] + "Promedi Nocturna: " + promedios[2] + "\nPromedio Mayor: " + mayor);
}

calcularPromedios(edades);