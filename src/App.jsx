import { useState } from 'react'
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Pokedex from './Components/Pokedex'
import TeamBuilder from './Components/TeamBuilder'
import { v4 as uuid } from 'uuid';

function App() {
    const [teamMembers, setTeamMembers] = useState([])

    const id = uuid()

    const addTeamMember = (newTeamMember) => {
        const promptNickname = window.prompt("Select a Nickname");
        let obj = { ...newTeamMember, nickname: promptNickname, id }
        setTeamMembers([...teamMembers, obj])
    }
    const removeTeamMember = (removedTeamMember) => {
        const filteredTeamMembers = teamMembers.filter(f => f.id != removedTeamMember.id )
        setTeamMembers(filteredTeamMembers)
    }

    return (
        <Router>
            <div>
                <header className="top-bar">
                    <nav>
                        <div className='top-buttons-container'>
                            <NavLink to="/home">
                                <button id='home-button' className='top-buttons'><p>Home</p></button>
                            </NavLink>
                            <NavLink to="/pokedex">
                                <button className='top-buttons'><p>Pokédex</p></button>
                            </NavLink>
                            <NavLink to="/teambuilder">
                                <button id='TB-button' className='top-buttons'><p>Team Builder</p></button>
                            </NavLink>
                        </div>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/pokedex' element={<Pokedex addTeamMember={addTeamMember} />} />
                        <Route path='/teambuilder' element={<TeamBuilder teamMembers={teamMembers} removeTeamMember={removeTeamMember} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
