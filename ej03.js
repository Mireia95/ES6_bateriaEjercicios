//*3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListDos = [...pointsList];
console.log(pointsListDos);
/* [ 32, 54, 21, 64, 75, 43 ] */

//*3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toy2 = { ...toy };
console.log(toy2);
/* { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' } */

//*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const pointsList3 = [...pointsList1, ...pointsList2];
console.log(pointsList3);
/* [
  32, 54, 21, 64, 75,
  43, 54, 87, 99, 65,
  32
] */

//*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy3 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };

const toyFinal = { ...toy, ...toyUpdate };
console.log(toyFinal);
/* {
  name: 'Bus laiyiar',
  date: '20-30-1995',
  color: 'multicolor',
  lights: 'rgb',
  power: [ 'Volar like a dragon', 'MoonWalk' ]
} */

//*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colors2 = [...colors];
colors2.splice(2, 1);
console.log(colors2); //[ 'rojo', 'azul', 'verde', 'naranja' ]
