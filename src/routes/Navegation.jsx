import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Layout } from '../components/layout/Layout';
import { AboutMe } from '../pages/AboutMe';
import { Proyects } from '../pages/Proyects';
import { Contact } from '../pages/Contact';
import { ProyectsDetails } from '../pages/ProyectsDetails';


export const Navegation = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={ <AboutMe /> } />
                    <Route path="/home" element={ <AboutMe /> } />
                    <Route path="/projets" element={ <Proyects /> } />
                    <Route path="/projets/:id" element={ <ProyectsDetails /> } />
                    <Route path="/contact" element={ <Contact /> } />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
