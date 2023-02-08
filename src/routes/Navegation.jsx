import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from '../components/layout/Layout';
import { AboutMe } from '../pages/AboutMe';
import { Proyects } from '../pages/Proyects';
import { Contact } from '../pages/Contact';


export const Navegation = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={ <AboutMe /> } />
                    <Route path="/home" element={ <AboutMe /> } />
                    <Route path="/projets" element={ <Proyects /> } />
                    <Route path="/contact" element={ <Contact /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
