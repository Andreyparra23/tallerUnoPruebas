//las pruebas unitarias testean FUNCIONES

//1. importar 
import suma from "../utils/ejemplo.js";

//2. definir un bloque de pruebas (ejemplo uno deberia ser de suma, otro de resta, etc )

/* 
PALABRAS RESERVADAS PARA HACER PRUEBAS SON:
describe -> agrupar el bloque de pruebas
it -> define casos individuales dentro de cada bloque de pruebas (ejemplo numero positivos, negativos, primos)
Expect - toBe  -> definimos cual es el resultado esperado
*/


//en el describe primero una descripcion y luego una funcion flecha donde estará el bloque de pruebas
describe ('esta prueba es para funcion suma', ()=>{

//caso de prueba 1: se suman numeros positivos
//descibo lo que quiero que suceda, si sea correcto, lograr hacer que sea incorrecto, etc
it ('deberia sumar 2 numeros positivos correctamente', ()=>{
    expect (suma(5,2)).toBe(7);
})

//caso de prueba 2
it ('deberia sumar numeros negativos correctamente', ()=>{
    expect (suma(-2,-4)).toBe(-6);
})


});