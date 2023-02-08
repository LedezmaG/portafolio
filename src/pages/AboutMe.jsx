import React from 'react'
import { useTranslation } from 'react-i18next';
import { TimeLine } from '../components/TimeLine'

const tecnologies = [ 
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "GraphQL",
    "Vtex",
    "API REST",
    "SQL",
    "NoSQL",
    "Metodologias Agiles",
    "GIT"
]

export const AboutMe = () => {
    
    const { t } = useTranslation();

    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <div>
                    <p className='title-md'> {t('home')} </p>
                    <p> {t('homeMsj_1')} </p>
                    <p> {t('homeMsj_2')} </p>
                </div>

                <div>
                    <p className='title-md'> {t('skills')} </p>
                    <p>
                        {tecnologies.map( (item => 
                            <span className="badge rounded-pill text-bg-secondary mx-1">{item}</span>
                        ))}
                    </p>
                </div>
                <div>
                    <p className='title-md'> {t('experience')} </p>
                    <TimeLine />
                </div>
            </div>
        </div>
    )
}
