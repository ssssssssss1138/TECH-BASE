async function getPokemonData(pokemonName) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await response.json();
	//console上でdataを表示する
	console.log(data);
}

getPokemonData("ditto")