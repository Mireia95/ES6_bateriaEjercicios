//*Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

//Sugerencia de array:

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
];

const swap = (array, indice1, indice2) => {
  let save = array[indice1];
  array[indice1] = array[indice2];
  array[indice2] = save;
  console.log(array);
  return array;
};

swap(fantasticFour, 0, 2);
swap(fantasticFour, 3, 0);
