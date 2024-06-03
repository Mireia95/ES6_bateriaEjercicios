//*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.Sugerencia de función:

//Ej array:
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
];

function findArrayIndex(array, text) {
  for (const element of array) {
    if (element === text) {
      console.log(array.indexOf(text));
      return array.indexOf(text);
    }
  }
}

//llamo la function
findArrayIndex(mainCharacters, 'Rey'); //4
findArrayIndex(mainCharacters, 'Obi-Wan'); //6
findArrayIndex(mainCharacters, 'Leia'); //1
