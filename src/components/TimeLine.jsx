import React from 'react'
import { TimeLineItem } from './TimeLineItem'

const timeLine = [
    {
        company: "Grupo Salinas",
        position: "Frontend developer",
        dates: "07/2022 - 02/2023",
        activities: [
            "Manejo y administracion de plataforma VTEX (e-commerce)",
            "Creacion, optimizacion y mantenimiento de modulos en plataforma VTEX",
            "Creacion, optimizacion y mantenimiento de modulos basado en React.js",
            "Consumo y creacion de funciones API Rest con Express.js y GraphQL",
            "Realizacion de pruebas funcionales y unitarias para calidad de producto",
            "Uso de metodologias agiles SCRUM (certificacion) y AGILE",
            " Optimisaciones de sonarqube"
        ]
    },
    {
        company: "Dynamic solutions",
        position: "Full stack developer",
        dates: "04/2019 - 06/2022",
        activities: [
            "Manejo y administracion de plataforma VTEX (e-commerce)",
            "Creacion, optimizacion y mantenimiento de modulos en plataforma VTEX",
            "Creacion, optimizacion y mantenimiento de modulos basado en React.js",
            "Consumo y creacion de funciones API Rest con Express.js y GraphQL",
            "Realizacion de pruebas funcionales y unitarias para calidad de producto",
            "Uso de metodologias agiles SCRUM (certificacion) y AGILE",
            "Optimisaciones de sonarqube"
        ]
    },
    {
        company: "CIS International",
        position: "Tecnico especialista",
        dates: "08/2018 - 02/20219",
        activities: [
            "Proyecto de Seguridad urbana (C5) por parte del gobierno del estado",
            "Planificación y administracion de rutas de instalación",
            "Ensamblaje y programación de switches y broad",
            "Configuracion de camaras de seguridad."
        ]
    },
] 

export const TimeLine = () => {
    return (
        <div className="timeline_area">
            { timeLine.map( (item) => 
                <div className="single-timeline-area">
                    <div className="timeline-date">
                        <p>
                            <b> {item.company} </b>
                            <small> {item.position} </small>  
                            <small> {item.dates} </small>  
                        </p>
                    </div>
                    <div className="row">
                        { item.activities.map( (activiti) => <TimeLineItem > {activiti} </TimeLineItem> )}
                    </div>
                </div>
            )}
        </div>
    )
}
