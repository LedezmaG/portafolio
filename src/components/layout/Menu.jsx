import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'


export const Menu = ({ theme, onTheme }) => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="nav-menu">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : '' } >
                    {t('home')}
                </NavLink>
                <NavLink to="/projets" className={({ isActive }) => isActive ? 'active' : '' } >
                    {t('projects')}
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : '' } >
                    {t('contact')}
                </NavLink>
                <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : '' } >
                    {t('education')}
                </NavLink>
            </div>

            <br />

            <div className='sub-menu'>
                <b> {t('languaje')} </b>
                <span className={`${i18n.language === 'es' && 'active'} mx-2`} onClick={() => i18n.changeLanguage('es')} > ES </span>
                <span className={`${i18n.language === 'en' && 'active'} mx-2`} onClick={() => i18n.changeLanguage('en')} > EN </span>
            </div>
            <div className='sub-menu'>
                <b> {t('theme')} </b>
                <span className={`${theme === 'ligth' && 'active'} mx-2`} onClick={()=>onTheme('ligth')} > Light </span>
                <span className={`${theme === 'dark' && 'active'} mx-2`} onClick={()=>onTheme('dark')} > Dark </span>
            </div>
        </>
    )
}
