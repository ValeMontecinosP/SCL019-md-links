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

test("should returnLinks", () => {
    expect(index.returnLinks(index.mdData("/Users/valemontecinosp/SCL019-md-links/prueba.md"))).toEqual(arrayPrueba);
});

describe('isAbsolutePath', () => {

  it("should return false if not an absolute path", () => {
    expect(index.isAbsolutePath("prueba.md")).toBe(false);
  });

});

describe('validMd', () => {

  it("should return true if extension is .md", () => {
    expect(index.validMd("prueba.md")).toBe(true);
  });

});

test("should test mdData", done => {
  const data = "prueba.js";
  function callback (error, data) {
    if (error) {
      done(error);
      return
    }
    try {
      expect(data).toBeFalsy();
      done(); 
    } catch (error) {
      done(error);
    }
    
      expect(data).toBe(arrayPrueba)
  };

  index.mdData(callback);
});

// test('the fetch fails with an error', () => {
//   return expect(index.mdData("prueba.md")).rejects.toMatch('error');
// });

// describe("mdData", () => {
//   it("should...", ()=>{
//     expect(index.mdData("prueba.js")).toBeFalsy();
//   });

// });

