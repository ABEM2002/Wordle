

console.log("Hola Mundo");

let intentos = 6;
let lista = ["ACTOR","AVION","AZUL","CABRA","CALMA","COREA","COSAS","FILAS","FERIA","GALES","GRITO","GRAVE","INDIA","JULIO","JAPON","HABER","ESTAR","CAVAR","ROGAR","MUDAR"]

console.log("elementos", lista.length);

console.log("random", Math.floor(Math.random() * lista.length));

let posición =  Math.floor(Math.random() * lista.length);

let palabra = lista[posición];

let BOTON; // Declarar BOTON como variable global

function intentar(intento) {
    const GRID = document.getElementById("grid");
    const ROW = document.createElement("div");
    ROW.className = "row";
    console.log("div", ROW);
    if (palabra === intento) {
        terminar("<h1>GANASTE!😀</h1>");
    } else {
        intentos--;
        console.log("Te quedan", intentos, "intentos");
        for (let pos in palabra) {
            console.log("posición del elemento", pos);
            const SPAN = document.createElement("span");
            SPAN.className = "letter";
            SPAN.innerHTML = intento [pos];
            if (intento[pos] === palabra[pos]) {
                console.log(intento[pos], "verde");
                SPAN.style.backgroundColor = "green"
            } else if (palabra.includes(intento[pos])) {
                console.log(intento[pos], "amarillo");
                SPAN.style.backgroundColor = "yellow"
            } else {
                console.log(intento[pos], "gris");
                SPAN.style.backgroundColor = "gray"
            }
            ROW.appendChild(SPAN)
        }
    
        GRID.appendChild(ROW);
        if (intentos === 0) {
            terminar("<h1>PERDISTE!😖</h1>");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    BOTON = document.getElementById("guess-button"); // Asignar BOTON dentro de DOMContentLoaded
    console.log(BOTON);

    BOTON.addEventListener("click", jugar);

    function jugar() {
        let usuario = document.getElementById("guess-input").value;
        console.log("click", usuario);
        intentar(usuario);
    }
});

function terminar(mensaje){
    let estado = document.getElementById("guesses");
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true; // Corregido a disabled
    BOTON.disabled = true; // Corregido a disabled
    estado.innerHTML = mensaje;
    console.log(estado, mensaje);
}