function calcular() {

let nro1= document.getElementById( "Numero1").value;
console.log ("Numero1= "+ nro1 );
let operando= document.getElementById("selectOper").value;
let total=0;

if (operando == "General"){
    total = parseInt(nro1)*200;
    }
if (operando == "Estudiante"){
    total = parseInt(nro1)*0.20*200;
    }
if (operando == "Trainee"){
    total = parseInt(nro1)*0.50*200;
    }
if (operando == "Junior"){
    total = parseInt(nro1)*0.85*200;
    }


console.log (total);

document.getElementById("resultado").innerHTML = "Total a Pagar: $ " + total;




}
