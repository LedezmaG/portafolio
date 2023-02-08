import React from 'react'
import { NavLink } from 'react-router-dom'


export const Menu = ({ theme, onTheme }) => {
    return (
        <div className='nav-menu'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : '' } >
                Inicio
            </NavLink>
            <NavLink to="/projets" className={({ isActive }) => isActive ? 'active' : '' } >
                Proyectos
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : '' } >
                Contacto
            </NavLink>

            <br />

            <div className='theme'>
                <b className={`${theme === 'ligth' && 'active'} mx-2`} onClick={()=>onTheme('ligth')} >Light </b>
                <b className={`${theme === 'dark' && 'active'} mx-2`} onClick={()=>onTheme('dark')}>Dark </b>
            </div>
        </div>
    )
}
