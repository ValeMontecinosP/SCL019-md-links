// // module.exports = () => {
// //   // ...
// // };
// //esta es una prueba
const fs = require("fs");
// const {readFile} = require("fs");
const path = require('path');
const colors = require("colors");

const prompt = require ( 'prompt-sync' ) ( ) ; 
let promptValue = prompt('Ingresa la ruta del archivo: ');
console.log(`ruta: ${promptValue}`);

// // fs.readFile("./README.md", "utf-8", (error, archive)=> {
// //   if (error) throw error;
// //   console.log(archive.red);
// // });

// console.log(process.argv)
// console.log("hola".blue)

console.log(`Es o no absoluta: ${path.isAbsolute(promptValue)}`.bgYellow);
console.log(`Extension: ${path.extname(promptValue)}`.rainbow);
console.log(`Ruta absoluta: ${path.resolve(promptValue)}`.bgGreen);
console.log(__dirname)

// const mdlinks = require('dc-md-links');

//confirmar si el archivo existe en la carpeta
//hacer funcion condicional que corrobore si el archivo es md o no
//leer con readFile el archivo md