import React from 'react'
import { useTranslation } from 'react-i18next';

const projets = [
    {
        title: "Elektra",
        description: "pys_des_1",
        company: "Grupo Salinas",
        position: "Fontend developer",
        tecnologies: [
            "JavaScript",
            "TypeScript",
            "Vtex",
            "React.js",
            "Node",
            "Express",
            "GraphQL",
            "SonarQube",
        ]
    },
    {
        title: "Vinos America Suite",
        description: "pys_des_1",
        company: "Dynamic Solutions",
        position: "Fullstack developer",
        tecnologies: [
            "JavaScript",
            "TypeScript",
            "React.js",
            "Node",
            "Express",
            "GraphQL",
            "Sequelize",
        ]
    },
    {
        title: "Vinos America App",
        description: "pys_des_1",
        company: "Dynamic Solutions",
        position: "Fullstack developer",
        tecnologies: [
            "JavaScript",
            "TypeScript",
            "React Native",
            "Node",
            "Express",
            "GraphQL",
            "Sequelize",
        ]
    },
    {
        title: "Go Logistics",
        description: "pys_des_1",
        company: "Dynamic Solutions",
        position: "Fullstack developer",
        tecnologies: [
            "JavaScript",
            "React.js",
            "Node",
            "Express",
        ]
    },
    {
        title: "Kipper",
        description: "pys_des_1",
        company: "Dynamic Solutions",
        position: "Fullstack developer",
        tecnologies: [
            "JavaScript",
            "React.js",
            "Firebases"
        ]
    },
    {
        title: "Bankple",
        description: "pys_des_1",
        company: "Dynamic Solutions",
        position: "Fullstack developer",
        tecnologies: [
            "JavaScript",
            "React.js",
            "Node",
            "Express",
        ]
    },
]

export const Proyects = () => {
    
    const { t } = useTranslation();

    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <p className='title-md'>{t('projects')}</p>
                { projets.map((project) => 
                    <div className='row'>
                        <div>
                            <h4>{ project.title }</h4>
                            <p>
                                <b> {t('company')}:</b> {project.company} 
                                <br />
                                <b> {t('position')}:</b> {project.position}
                            </p>
                            <p>
                                <b> {t('description')}:</b><br />
                                {t(project.description)}
                            </p>
                        </div>
                        <div className="col-12">
                            <p>
                                <b>{t('technologies')}:</b>
                                <br />
                                { project.tecnologies.map((item)=> <span className="badge rounded-pill text-bg-secondary mx-1">{item}</span>)}
                            </p>
                        </div>
                        <hr />
                    </div>
                )}
            </div>
        </div>
    )
}
