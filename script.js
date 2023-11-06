//alert("Hola este es mi Javascript");

//let nombre = "Marta";
//nombre = "Andres";

//var nombre1 = "Marta";

//const nombre2 = "Marta"

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//var miNombre = "Fernando Andres Villegas";
//console.log(miNombre);
let contenidoTitulo = "otro titulo";

let titulo = document.querySelector("title");
titulo.innerHTML = contenidoTitulo;

//condisionales

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "otro titulo") {
   titulo.innerHTML = "otro";
} else {
   console.log("no se cumple");
}

//let nombre = "Fer"
//let ciudad = "Guaymalen"
//let gusto = "chocolate"

//let parrafo = document.querySelector("#parrafo_2");

//function cambiarTexto(nombre, ciudad, gusto){
// let contenido = `me llamo ${nombre}, naci en ${ciudad} y vivo en Caballito. me gusta el ${gusto}`
//return contenido;
//}
//parrafo.innerText = cambiarTexto(nombre, ciudad,gusto);
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
   navBar = document.querySelector(".navbar");
   navBar.classList.toggle("active");
};
