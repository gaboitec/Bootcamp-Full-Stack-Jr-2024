// c = a (+, -, *, /) b
let a = 0, b = 0, c = 0;
let pantalla = "0";
let dotFlag = false;
let operFlag = false;
let txtOper = 

function btnAC(){
    a = 0;
    b = 0;
    c = 0;
    pantala = "0";
    dotFlag = false;
    operFlag = false;
    document.getElementById('pantalla').innerHTML = pantala;
}

function num(txtNumber){
    if(pantalla === "0") pantalla = txtNumber;
    else pantalla += txtNumber;
    document.getElementById('pantalla').innerHTML = pantalla;
}

function btnDot(textDot){
    if(!dotFlag){
        pantalla += textDot;
        dotFlag = true;
    }
    document.getElementById('pantalla').innerHTML = pantalla;
}

function operador(txtOperador){
    if(!operFlag){
        a = Number(pantalla);
        pantalla = "0";
        dotFlag = false;
        operFlag = true;
        txtOper = txtOperador;
    }
}

function result(){
    if(operFlag){
        
    }
}