//*5.6 Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

//creo funcion para crear el array filtrado cada vez que escribo en el input
const filter = (event) => {
  console.log(event.target.value);
  //creo array filtrado
  const streamerFilter = streamers.filter((streamer) => {
    //si incluye las letras del input
    if (streamer.name.includes(event.target.value)) {
      return streamer.name; //devuelve el nombre
    }
  });
  console.log(streamerFilter);
};

const input = document.querySelector('input');
input.addEventListener('input', filter);
