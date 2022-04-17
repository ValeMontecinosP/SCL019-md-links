const index = require('../index.js');
//const prueba = "prueba.md";
const arrayPrueba = [
  {
    text: 'ggugul',
    href: 'https://www.google.com',
    file: 'prueba.md',
    line: 1
  },
  {
    text: 'quizas es falso',
    href: 'https://nosesiexisteestelink.cl',
    file: 'prueba.md',
    line: 1
  },
  {
    text: 'Markdown',
    href: 'https://es.wikipedia.org/wiki/Markdown',
    file: 'prueba.md',
    line: 3
  },
  {
    text: 'Node.js',
    href: 'https://nodejs.org/',
    file: 'prueba.md',
    line: 14
  }
]

test("returnLinks", () => {
  it("should return links", () => {
    expect(index.returnLinks("prueba.md")).toEqual(arrayPrueba);
  });
});

describe('isAbsolutePath', () => {

  it("should return false if not an absolute path", () => {
    expect(index.isAbsolutePath("prueba.md")).toBe(false);
    console.log(index.isAbsolutePath("prueba.md"))
  });

});

describe('validMd', () => {

  it("should return true if extension is .md", () => {
    expect(index.validMd("prueba.md")).toBe(true);
  });

});

describe("mdData", () => {
  it("should...", ()=>{
    expect(index.mdData("prueba.js")).toBeFalsy();
  });

});

