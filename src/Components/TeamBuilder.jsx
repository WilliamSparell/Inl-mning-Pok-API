import { useState } from 'react'

const TeamBuilder = ({removeTeamMember, teamMembers}) => {
	const [isEditingName, setIsEditingName] = useState(true)
	const [newName, setNewName] = useState('')

	const idOf = (url) => {
        let trimmed = url.split('/')
        return trimmed[trimmed.length - 2]
    }

	const changeName = () => {
			setIsEditingName(false)
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
						
						{isEditingName ? (
							<h3 
							className="pokemon-name"
							onClick={changeName}
							>
							{nickname}</h3>
						) : (
							<input
							className='text-editor' 
							type="text"
							defaultValue={name}
							onChange={(event) => {
								setNewName(event.target.value)
							}}
							onKeyDown={(event) => {
								if (event.key === 'Enter' || event.key === 'Escape') {
								  	
								setIsEditingName(true)
								  	event.preventDefault()
									event.stopPropagation()
								}
							}}
							 />
							
						)}
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