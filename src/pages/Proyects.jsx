import React from 'react'

const projets = [
    {
        title: "Elektra",
        description: "Creacion, optimizacion y mantenimiento de modulos para pagina de elektra.com.mx haciendo uso de un marco de trabajo agil como Scrum",
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
        description: "Sistema de administracion de almacenes (WMS) con diferentes roles de usuario y permisos por modulo, con implementacion a canales de venta como woocommerce y mercado libre haciendo segimiento desde la venta hasta salida del almacen. ",
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
        description: " Aplicacion movil con diferentes roles de usuario y permisos por modulo, haciendo seguimiento de las diferentes etapas del flijo de surtido de un almacen cada usuario con funciones esfecificas a su rol.",
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
        description: "Sistema web con diferentes roles de usuario y permisos por modulo, generando revisiones de entrada y salida de veiculos a rutas de entrega de ultimo punto, asi como levantamiento de accidentes y control de conductores, vehiculos y de mas.",
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
        description:  "Sistema web estudiantil con diferentes roles de usuario y permisos por modulo, con varias funcionalidades como listas de alumnos, toma de asistencias, tareas, avisos, control de maestros, materias y mas.",
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
        description:  "Sistema web de envio remesas con diferentes roles de usuario y permisos por modulo, con varias funcionalidades como revison de saldos, envio y recibo de remesas. ",
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
    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <p className='title-md'>Proyectos</p>
                { projets.map((project) => 
                    <div className='row'>
                        <div>
                            <h4>{ project.title }</h4>
                            <p>
                                <b>Compañía:</b> {project.company} 
                                <br />
                                <b>Posición:</b> {project.position}
                            </p>
                            <p>
                                <b>Descripción:</b><br />
                                { project.description} 
                            </p>
                        </div>
                        <div className="col-12">
                            <p>
                                <b>Tecnologias:</b>
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
