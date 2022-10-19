let hora = prompt("Ingrese Hora");

if (hora >= 6 && hora < 12) {
    console.log("Buenos dias");
}else if (hora >= 12 && hora < 20){
    console.log("Buenas tardes");
}else {
    console.log ("Buenas noches");
}

//--------------------------------------------------------------------

let diaDeLaSemana = parseInt (prompt("Ingrese Dia de la semana"));
switch (diaDeLaSemana) {
    case 1:
        console.log("Hoy es Lunes");
        break;
    case 2:
        console.log("Hoy es Martes");
        break;    
    case 3:
        console.log("Hoy es Miercoles");
        break;  
    case 4:
        console.log("Hoy es Jueves");
        break;
    case 5:
        console.log("Hoy es Viernes");
        break;    
    case 6:
        console.log("Hoy es Sabado");
        break;   
    case 7:
        console.log("Hoy es Domingo");
        break;   
    default:
        console.log("Dia invalido");
        break;
}


// ------------------------------------------------------------------- 

const multiplicacion = (a,b) => a * b;
const IVA = 1.21;
let precioSinIva = parseInt(prompt("Ingrese Precio del producto"));
let precioConIva =  multiplicacion (precioSinIva, IVA);

console.log("El valor del producto con IVA agregado es de " + precioConIva);


//---------------------------------------------------------------

for (x = 1; x <= 10; x++){
    console.log( "El ciclo de X actual es " + x)
}