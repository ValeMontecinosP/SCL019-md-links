const fs = require("fs");
const path = require('path');
const colors = require("colors");
const prompt = require ( 'prompt-sync' ) ( ) ; 
const url = require("url");


let promptValue = prompt('Ingresa la ruta del archivo: '.bgMagenta);
console.log(`ruta: ${promptValue}`);

const https = require('https')

const validateLink = (link) => {
  const options = {
    hostname: url.parse(link).host,
    port: 443,
    path: url.parse(link).pathname,
    method: "HEAD",
  }
  const req = https.request(options, link => {
    console.log(`Status Code: ${link.statusCode} para ${options.hostname+options.path}`)
  
    link.on('data', d => {
      process.stdout.write(d)
    })
    return link.statusCode
  })
  req.on('error', error => {
    //console.error(error)
    console.log(`Status Code: NOTFOUND ${link} no existe`)
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

const returnLinks = (archive) => {
  const splitLines = archive.split("\n"); //eslint-disable-line
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
          };
          validateLink(link[2])
          linksList.push(data);
        }
      }
    }
    console.log(`Se han encontrado ${linksList.length} links`)
    console.log(linksList)
    return linksList;
}

const isAbsolutePath = (promptValue) => {
  if (path.isAbsolute(promptValue) == false) {
    console.log(`Ruta absoluta: ${path.resolve(promptValue)}`.bgGreen);
    return false
  };
};

const mdData = () => fs.readFile(promptValue, "utf-8", (error, archive)=> {
  if (error){
    console.log("archivo no existe"); //eslint-disable-line no-alert
    return false;
  }
  else{
    returnLinks(archive)
  }  
}); //asincrona

//1
const validMd = (promptValue) => {
  //toLowerCase, trim
  if (path.extname(promptValue.toLowerCase())==".md") {
    isAbsolutePath(promptValue);
    mdData();
    return true
  }
  else {
    console.log(`chao esto no es .md, es Extension: ${path.extname(promptValue)}`.rainbow)
    return false
  }
};
validMd(promptValue);

exports.validMd = validMd;
exports.isAbsolutePath = isAbsolutePath;
exports.mdData = mdData;
exports.returnLinks = returnLinks;

// () => {
//   // ...
// };


//confirmar si el archivo existe en la carpeta CHECK
//hacer funcion condicional que corrobore si el archivo es md o no CHECK
//leer con readFile el archivo md CHECK