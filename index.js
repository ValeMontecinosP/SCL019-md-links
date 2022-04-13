// // module.exports = () => {
// //   // ...
// // };
const fs = require("fs");
const path = require('path');
const colors = require("colors");
const prompt = require ( 'prompt-sync' ) ( ) ; 
let promptValue = prompt('Ingresa la ruta del archivo: ');
console.log(`ruta: ${promptValue}`);

const https = require('https')
const validateLink = (link) => {
  const options = {
    hostname: link,
    port: 40,
    path: promptValue,
    method: 'HEAD'
  }
  const req = https.request(options, link => {
    console.log(`statusCode: ${link.statusCode}`)
  
    link.on('data', d => {
      process.stdout.write(d)
    })
  })
  req.on('error', error => {
    console.error(error)
  })
  req.end()
  return link.statusCode
}


//console.log(__dirname)
// console.log(fs.readdir(promptValue, (error, archive)=> {
//   if (error) throw error;
//   if (path.extname(promptValue)==".md") return promptValue
//   console.log(archive.red);
//   //return md archives
// }))

const isAbsolutePath = (promptValue) => {
  if (path.isAbsolute(promptValue) == false) {
    console.log(`Ruta absoluta: ${path.resolve(promptValue)}`.bgGreen);
  };
};

const mdData = () => fs.readFile(promptValue, "utf-8", (error, archive)=> {
  if (error){
    console.log("archivo no existe");
  }
  else{
    const splitLines = archive.split("\n");
    let linksList = [];
    for (let i=0; i<splitLines.length; i++) {
      const line = splitLines[i];
      //const regularEx = /(http(s)?:\/\/[^\s)]+)/g; //links sin markdown
      const regularEx = /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g; //links con markdown
      const links = line.matchAll(regularEx);
      const match = regularEx.test(line);
      if (match) {
        for (const link of links) {
          const data = {
            text: link[1],
            href: link[2],
            file: promptValue,
            line: i + 1,
            status: validateLink(link[2])
          };
          linksList.push(data);
        }
      }
    }
    console.log(`Se han encontrado ${linksList.length} links`)
    console.log(linksList)
    return linksList;
  }  
});

const validMd = (promptValue) => {
  //toLowerCase, trim
  if (path.extname(promptValue.toLowerCase())==".md") {
    isAbsolutePath(promptValue);
    mdData();
    
  }
  else {
    console.log(`chao esto no es .md, es Extension: ${path.extname(promptValue)}`.rainbow)
  }
};
validMd(promptValue);


//confirmar si el archivo existe en la carpeta CHECK
//hacer funcion condicional que corrobore si el archivo es md o no CHECK
//leer con readFile el archivo md CHECCK