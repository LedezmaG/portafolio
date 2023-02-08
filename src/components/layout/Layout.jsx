import React, { useState } from 'react'
import { Menu } from './Menu'
import { NavBar } from './NavBar'

import '../../styles/styles.css'
import '../../styles/global.css'

export const Layout = ({ children }) => {

    const [theme, setTheme] = useState('ligth')

    const onTheme = (newTheme) => setTheme(newTheme)

    return (
        <div className='main' data-theme={theme}>
            <div className="content">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <NavBar />
                        <Menu theme={theme} onTheme={onTheme} />
                    </div>
                    <div className="col-12 col-md-8">
                        { children }  
                    </div>
                </div>
            </div>
        </div>
    )
}
