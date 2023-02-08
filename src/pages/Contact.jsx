import React from 'react'
import cv from './../assets/CV - 2023 ES .pdf'

export const Contact = () => {
    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <p className='title-md'>Contacto</p>
                <p>
                    Si quieres ponerte en contacto conmigo, hablar conmigo sobre un proyecto de colaboración o simplemente decir hola,
                    puedes comunicarte a mi correo eletronico o segirme atravez de mis redes sociales.
                    <a className='link' href="mailto:israeledezmag@gmail.com"> israeledezmag@gmail.com </a>
                    
                </p>
            </div>
            <div className="col-12 col-md-12">
                <p className='text-center mt-5'>
                    <a 
                        href={cv}
                        target="_blank"
                        type="button" 
                        className="btn btn-outline-secondary btn-cus mx-1"
                    >
                        <i className="fa-solid fa-file" /> CV
                    </a>
                    <a 
                        href="mailto:israeledezmag@gmail.com"
                        type="button" 
                        className="btn btn-outline-secondary btn-cus mx-1"
                    >
                        <i className="fa-solid fa-envelope" /> Email
                    </a>
                    <a 
                        href='https://github.com/LedezmaG'
                        target="_blank"
                        type="button" 
                        className="btn btn-outline-secondary btn-cus mx-1"
                    >
                        <i className="fa-brands fa-github" /> Github
                    </a>
                    <a 
                        href='https://www.linkedin.com/in/israel-ledezma/'
                        target="_blank"
                        type="button" 
                        className="btn btn-outline-secondary btn-cus mx-1"
                    >
                        <i className="fa-brands fa-linkedin-in" /> Linkedin
                    </a>
                </p>
            </div>
        </div>
    )
}
