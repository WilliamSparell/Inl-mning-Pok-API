import { useState } from 'react'

const TeamBuilder = ({removeTeamMember, teamMembers}) => {

	const idOf = (url) => {
        let trimmed = url.split('/')
        return trimmed[trimmed.length - 2]
    }
	
	return(
		<div className="dex-container">
			<h1 className="title-teambuilder">Your team</h1>
			<div className="grid-container">
				{teamMembers.map(({ name, url, id, nickname }) => (
					<div key={id}
						className="pokemon-container">
						<img className="Icon"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idOf(url)}.png`}
						/>
						
						<h3>Name: {name}</h3>

						<h3>Nickname: {nickname}</h3>

						<button 
						className="add-remove-button"
						type='button'
						onClick={() => removeTeamMember({ name, url, id })}
						>
						Remove</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default TeamBuilder