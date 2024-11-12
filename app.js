
let clave;
sessionStorage.setItem('clave','terceraentrega');
console.log(clave);
let intentos = 0;

const MAX_INTENTOS = 5;

do{
    clave = prompt('ingresa la contraseña');
    
    intentos ++;

    if(clave === 'terceraentrega'){
        console.log("contraseña correcta")
        break;
    }

    if(intentos >= MAX_INTENTOS){
        console.log("Tu limite de intentos para ingresar se acabó, porfavor intente de nuevo mas tarde.")
        break;
    }
 
}while(true);




/* primera entrega estructura

const NUM1 = parseFloat(prompt("ingrese un monto en pesos argentinos"));
const CONVERSION = prompt("ingrese la moneda que quiera convertir (Dolar Euro Real Uruguayo Chileno)")
let resultado;

switch(CONVERSION){
    case "Dolar":
        resultado = NUM1 * 1220;
        break;
    case "Euro":
        resultado = NUM1 * 1328.76;
        break;
    case "Real":
        resultado = NUM1 * 204.75;
        break; 
    case "Uruguayo":
        resultado = NUM1 * 29.59; 
        break;
    case "Chileno":
           resultado = NUM1 * 1.29; 
        break;
    default:
        alert("no estas ingresando una operacion valida")
    
}
alert("resultado es: " + resultado);
*/


/* segunda entrega estructura

const NUM1 = parseFloat(prompt("ingrese un monto en pesos argentinos"));
const CONVERSION = prompt("ingrese la moneda que quiera convertir (Dolar Euro Real Uruguayo Chileno)")
let d = 1220
let e = 1328.76
let r = 204.75
let u = 29.59
let c = 1.29

function conversor(NUM1,d, operacion){
    return operacion(NUM1, d)
}

function Dolar (a){
    return a * d;
}

function Euro (a){
    return a * e;
}

function Real (a){
    return a * r;
}

function Uruguayo (a){
    return a * u;
}

function Chileno (a){
    return a * c;
}

console.log(conversor(NUM1,d, Dolar))

*/

/*
console.log(conversor(NUM1,Dolar))
console.log(conversor(NUM1,Euro))
console.log(conversor(NUM1,Real))
console.log(conversor(NUM1,Uruguayo))
console.log(conversor(NUM1,Chileno))
*/



/* Nahuel corrección de estructura

const tasasDeCambio = {  Dolar: 1220,  Euro: 1328.76,  Real: 204.75,  Uruguayo: 29.59,  Chileno: 1.29};
function convertirMonto(monto, moneda) {  if (tasasDeCambio[moneda]) {    return monto * tasasDeCambio[moneda];  } else {    alert("Moneda no válida");    return null;  }}
const NUM1 = parseFloat(prompt("Ingrese un monto en pesos argentinos"));const CONVERSION = prompt("Ingrese la moneda que quiere convertir (Dolar, Euro, Real, Uruguayo, Chileno)");
if (!isNaN(NUM1)) {  const resultado = convertirMonto(NUM1, CONVERSION);  if (resultado !== null) {    alert("El resultado es: " + resultado);  }} else {  alert("Por favor, ingrese un monto válido.");}
*/

const TASASDECAMBIO = {Dolar: 1220,  Euro: 1328.76,  Real: 204.75,  Uruguayo: 29.59,  Chileno: 1.29};
function convertirMonto (monto, moneda) {
    if (TASASDECAMBIO[moneda]) {
        return monto * TASASDECAMBIO[moneda];
    }
    else {
        alert("Moneda no válida");
            return null;
    }
};

const NUM1 = parseFloat(prompt('ingrese un monto en pesos argentinos'));
const CONVERSION = prompt('ingrese la moneda que quiere convertir (Dolar, Euro, Real, Uruguayo, Chileno)');

if(!isNaN(NUM1)) { const RESULTADO = convertirMonto(NUM1,CONVERSION); 
    if (RESULTADO !== null ) { alert("El resultado es: " + RESULTADO);
    }}
    else{
        alert("Porfavor, ingrese un monto válido.");
        };



let containerCards = document.getElementById("container-cards");

containerCards.innerHTML = `
                            <div>
                                <h2> Dolar </h2>
                                <p class = "c"> Cambio: 1220 </p>
                                <form action="">

                                <label for="amount">Ingresar monto en pesos:</label>
                                <input type="number" id="amount" name="Ingresar monto en pesos">
                                <br>  <br> 
                                <input type="submit" value="enviar monto">
                                
                                 </form>
                                
                                 <p class ="r"> Resultado: </p>
                            </div>

                            <div>
                                <h2> Euro </h2>
                                <p class = "c"> Cambio: 1328.76 </p>
                                 <form action="">

                                <label for="amount">Ingresar monto en pesos:</label>
                                <input type="number" id="amount" name="Ingresar monto en pesos">
                                <br>  <br> 
                                <input type="submit" value="enviar monto">
                                
                                 </form>

                                 <p class ="r"> Resultado: </p>
                                
                            </div>

                            <div>
                                <h2> Real </h2>
                                <p class = "c"> Cambio: 204.75 </p>
                                <form action="">

                                <label for="amount">Ingresar monto en pesos:</label>
                                <input type="number" id="amount" name="Ingresar monto en pesos">
                                <br>  <br> 
                                <input type="submit" value="enviar monto">
                                
                                 </form>

                                 <p class ="r"> Resultado: </p>
                            </div>
                            
                            <div>
                                <h2> Uruguayo </h2>
                                <p class = "c"> Cambio: 29.59 </p>
                                <form action="">

                                <label for="amount">Ingresar monto en pesos:</label>
                                <input type="number" id="amount" name="Ingresar monto en pesos">
                                <br>  <br> 
                                <input type="submit" value="enviar monto">
                                
                                 </form>
                                 <p class ="r"> Resultado: </p>
                            </div>
                            
                            <div>
                                <h2> Chileno </h2>
                                <p class = "c"> Cambio: 1.29 </p>
                               <form action="">

                                <label for="amount">Ingresar monto en pesos:</label>
                                <input type="number" id="amount" name="Ingresar monto en pesos">
                                <br>  <br> 
                                <input type="submit" value="enviar monto">
                                
                                 </form>
                                 <p class ="r"> Resultado: </p>
                            </div>




                            `;

                            
                            const formulario = document.getElementById('amount')
                            formulario.addEventListener('submit', function(evento){
                               const montoInput = document.getElementById('amount').value 
                            });

