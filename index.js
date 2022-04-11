// // module.exports = () => {
// //   // ...
// // };
const fs = require("fs");
const path = require('path');
const colors = require("colors");
// const MarkdownIt = require ("markdown-it"),
//   md = new MarkdownIt();
// const result = md.render("# markdownt-it rulez")
// console.log(result)
const prompt = require ( 'prompt-sync' ) ( ) ; 
let promptValue = prompt('Ingresa la ruta del archivo: ');
console.log(`ruta: ${promptValue}`);

const md = require('markdown-it')();
console.log(`${(md.validateLink("hola"))}`.red)

function isAbsolutePath (promptValue) {
  if (path.isAbsolute(promptValue) == false) {
    console.log(`Ruta absoluta: ${path.resolve(promptValue)}`.bgGreen);
  };
}

// const validLink = (input) => {
//   const md = require('markdown-it')();
//   // enable everything
//   md.validateLink(input)
  
//   console.log(`¿es un enlace válido? ${md.validateLink()}`)
// };

const mdData = () => fs.readFile(promptValue, "utf-8", (error, archive)=> {
  if (error){
    console.log("archivo no existe");
  }
  else{
    console.log(archive); //esto se puede borrar después
  }
  return archive
});

function validMd(promptValue) {
  if (path.extname(promptValue)==".md") {
    isAbsolutePath(promptValue);
    mdData();
    
  }
  else {
    console.log(`chao esto no es .md, es Extension: ${path.extname(promptValue)}`.rainbow)
  }
};
validMd(promptValue);
//validLink(mdData);

// if (validLink=="true"){
//   return console.log(`${mdData} es un link válido`)
// } else {
//   return console.log(`${mdData} no es un link válido`)
// }



//console.log(`Es o no absoluta: ${path.isAbsolute(promptValue)}`.bgYellow);

//console.log(__dirname)
// console.log(fs.readdir(promptValue, (error, archive)=> {
//   if (error) throw error;
//   console.log(archive.red);
// }))

// const mdlinks = require('dc-md-links');

//confirmar si el archivo existe en la carpeta
//hacer funcion condicional que corrobore si el archivo es md o no
//leer con readFile el archivo md