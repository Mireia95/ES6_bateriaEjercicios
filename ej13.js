//!Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
//!Finalmente retorna el array.

//!De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

//array del ej 12
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
];

//funcion del ej 12
function findArrayIndex(array, text) {
  for (const element of array) {
    if (element === text) {
      return array.indexOf(text);
    }
  }
}

//ejercicio 13
const removeItem = (array, texto) => {
  let position = findArrayIndex(array, texto);
  array.splice(position, 1);
  console.log('mi array ahora es: ' + array);
};

removeItem(mainCharacters, 'Leia'); //mi array ahora es: Luke,Han Solo,Chewbacca,Rey,Anakin,Obi-Wan
removeItem(mainCharacters, 'Chewbacca'); //mi array ahora es: Luke,Han Solo,Rey,Anakin,Obi-Wan

removeItem(mainCharacters, 'Han Solo'); //mi array ahora es: Luke,Rey,Anakin,Obi-Wan
