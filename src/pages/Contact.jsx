import React from 'react'
import { useTranslation } from 'react-i18next';
import CV_ES from './../assets/CV - 2023 ES.pdf'
import CV_EN from './../assets/CV - 2023 EN.pdf'


export const Contact = () => {

    const { t, i18n } = useTranslation();

    const ContatBtn = [
        {
            label: "CV",
            href: (i18n.language === 'es') ? CV_ES : CV_EN,
            icon: "fa-solid fa-file",
            targer: "_blank"
        },
        {
            label: "Email",
            href: "mailto:israeledezmag@gmail.com",
            icon: "fa-solid fa-envelope",
            targer: "_blank"
        },
        {
            label: "Github",
            href: "https://github.com/LedezmaG",
            icon: "fa-brands fa-github",
            targer: "_blank"
        },
        {
            label: "Linkedin",
            href: "https://www.linkedin.com/in/israel-ledezma/",
            icon: "fa-brands fa-linkedin-in",
            targer: "_blank"
        },
    ]
    

    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <p className='title-md'>{t('contact_title')}</p>
                <p> 
                    {t('contact_msj')}
                </p>
            </div>
            <div className="col-12 col-md-12">
                <p className='text-center mt-5'>
                    {ContatBtn.map(item =>     
                        <a 
                            href={item.href}
                            target={item.targer}
                            type="button" 
                            className="btn btn-outline-secondary btn-cus mx-1 my-1"
                        >
                            <i className={item.icon} /> {item.label}
                        </a>
                    )}
                </p>
            </div>
        </div>
    )
}
