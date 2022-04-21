import React, { useState, useEffect } from "react";

const Pokedex = (props) => {
  	const [pokemons, setPokemons] = useState([]);
	const [searchedPokemons, setSearchedPokemons] = useState("");

	const filteredPokemons = pokemons.filter(pokemon => {
		if(searchedPokemons == "") {
			return true
		}
		else{
			return pokemon.name.toLowerCase().includes(searchedPokemons.toLowerCase())
		}
	})

	useEffect(() => {
		const fetchData = async () => {
		  	const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon?limit=151"
		 	);
			const data = await response.json();
			
		 	setPokemons(data.results);
		};

		fetchData();
	}, []);

	const handleChange = (event) => {
		setSearchedPokemons(event.target.value)
	}

	const idOf = (url) => {
        let trimmed = url.split('/')
        return trimmed[trimmed.length - 2]
    }

  	return (
		<div className="dex-container">
			<input 
        		className='search'
        		type='search'
				onChange={handleChange}
				placeholder="Search Pokémon"
    		/>
			<div className="grid-container">
				{filteredPokemons.map(({ name, url }) => (
					<div key={url} className="pokemon-container">
						<img className="Icon"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idOf(url)}.png`}
						/>
						<h3 className="pokemon-name">{name}</h3>
					</div>
				))}
			</div>
		</div>
  );
};

export default Pokedex