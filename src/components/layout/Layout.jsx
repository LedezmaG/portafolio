import React, { useState } from 'react'
import { Menu } from './Menu'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

import './../../utils/Translate';
import '../../styles/styles.css'
import '../../styles/global.css'

export const Layout = ({ children }) => {

    const [theme, setTheme] = useState('ligth')

    const onTheme = (newTheme) => setTheme(newTheme)

    return (
        <div className='main' data-theme={theme}>
            <div className="content row">
                <div className="col-12 col-md-3">
                    <div className="nav-content">
                        <NavBar />
                        <Menu theme={theme} onTheme={onTheme} />
                    </div>
                </div>
                <div className="col-12 col-md-9 wrapper">
                    { children }  
                    <Footer />
                </div>
            </div>
        </div>
    )
}
