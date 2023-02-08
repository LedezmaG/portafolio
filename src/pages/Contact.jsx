import React from 'react'
import { useTranslation } from 'react-i18next';
import cv from './../assets/CV - 2023 ES .pdf'

export const Contact = () => {
    
    const { t } = useTranslation();

    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <p className='title-md'>{t('contact_title')}</p>
                <p> 
                    {t('contact_msj')}
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
