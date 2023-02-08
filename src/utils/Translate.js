import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            home: 'Inicio',
            projects: 'Proyectos',
            contact: 'Contacto',
            about: 'Acerca de mi',
            skills: 'Habilidades',
            experience: 'Experiencia',
            languaje: 'Idioma',
            theme: 'Tema',
            footer: 'Diseñado y construido por',

            homeMsj_1: '¡Hola! Mi nombre es David Ledezma y disfruto creando cosas en Internet. Mi interés en la programación comenzó en 2016 cuando decidí estudiar la ingeniería en ciencias computacionales en UDG después de mucho esfuerzo y concluir mis estudios encontré una pasión en el desarrollo web especializandome en frontend y en el backend.',
            homeMsj_2: 'Avance rápido hasta hoy, y tuve la oportunidad de trabajar en algunas startup y empresas de diferente giro con lo cual he podido crear cosas interesantes y elevar mi nivel. Actualmente mi enfoque principal es crear productos que faciliten la vida de los usuarios.',
            
            homeEx1_1: 'Manejo y administración de plataforma VTEX (e-commerce)',
            homeEx1_2: 'Creación, optimización y mantenimiento de módulos de plataforma VTEX.',
            homeEx1_3: 'Creación, optimización y mantenimiento de módulos React',
            homeEx1_4: 'Consumo y creación de funciones API Rest con Express.js y GraphQL',
            homeEx1_5: 'Realización de pruebas funcionales y unitarias para calidad de producto',
            homeEx1_6: 'Uso de metodologías ágiles  SCRUM (certificación) y AGILE',
            homeEx1_7: 'Optimizaciones de sonarqube',

            homeEx2_1: 'Creación, optimización y mantenimiento de módulos React',
            homeEx2_2: 'Consumo y creación de funciones API Rest con Express.js y GraphQL',
            homeEx2_3: 'Creación, optimización y mantenimiento de módulos React Native',
            homeEx2_4: 'Análisis de requerimientos',
            homeEx2_5: 'Creación y mantenimiento de Landing pages basadas en React y Wordpress ',
            homeEx2_6: 'Gestión de Google Cloud Platform',

            homeEx4_1: 'Creación de sistema para alta de afiliados a partido político basado en React.js',
            homeEx4_2: 'Creación de API Rest con Express.js',
            homeEx4_3: 'Creación y diseño de base de datos SQL',

            homeEx5_1: 'Proyecto de Seguridad urbana (C5) por parte del gobierno del estado',
            homeEx5_2: 'Planificación y administracion de rutas de instalación',
            homeEx5_3: 'Ensamblaje y programación de switches y broad',
            homeEx5_4: 'Configuracion de camaras de seguridad.',

            company: 'Compañía',
            position: 'Posición',
            description: 'Descripción',
            technologies: 'Tecnologias',
            pys_des_1: 'Creacion, optimizacion y mantenimiento de modulos para pagina de elektra.com.mx haciendo uso de un marco de trabajo ágil como Scrum.',
            pys_des_2: 'Sistema de administración de almacenes (WMS) con diferentes roles de usuario y permisos por módulo, con implementación a canales de venta como woocommerce y mercado libre haciendo seguimiento desde la venta hasta salida del almacén.',
            pys_des_3: 'Aplicación móvil con diferentes roles de usuario y permisos por módulo, haciendo seguimiento de las diferentes etapas del flujo de surtido de un almacén cada usuario con funciones específicas a su rol.',
            pys_des_4: 'Sistema web con diferentes roles de usuario y permisos por módulo, generando revisiones de entrada y salida de vehículos a rutas de entrega del último punto, así como levantamiento de accidentes y control de conductores, vehículos y de más.',
            pys_des_5: 'Sistema web estudiantil con diferentes roles de usuario y permisos por módulo, con varias funcionalidades como listas de alumnos, toma de asistencias, tareas, avisos, control de maestros, materias y más.',
            pys_des_6: 'Sistema web de enviar remesas con diferentes roles de usuario y permisos por módulo, con varias funcionalidades como revisión de saldos, envío y recibo de remesas.',
        
            contact_title: 'Contacto',
            contact_msj: 'Si quieres ponerte en contacto conmigo, hablarme de un proyecto de colaboración, o simplemente saludarme, puedes contactarme por correo electrónico o seguirme a través de mis redes sociales.',

        },
    },
    en: {
        translation: {
            home: 'Home',
            projects: 'Pcorojects',
            contact: 'Contact',
            about: 'About me',
            skills: 'Skills',
            experience: 'Experience',
            languaje: 'Language',
            theme: 'Theme',
            footer: 'Designed and built by',
            
            homeMsj_1: 'Hello! My name is David and I enjoy creating things on internet. My interest in web development started back in 2016 when I decided study engineering in computer science at UDG After a lot of effort and finishing my studies, I found a passion in web development focus in frontend and backend.',
            homeMsj_2: 'Fast-forward to today, and I’ve had the privilege of working in some startup and companies of a different ambit with which he could create exciting things and raise my level. Currently, my main focus is to develop products that make life easier for users.',
            homeEx1_1: 'Platform management and administration VTEX (e-commerce)',
            homeEx1_2: 'Creation, optimization, and maintenance of platform modules VTEX.',
            homeEx1_3: 'Creation, optimization, and maintenance of modules React',
            homeEx1_4: 'Consumption and creation of functions API Rest with Express.js and GraphQL',
            homeEx1_5: 'Performance of functional and unit tests for product quality',
            homeEx1_6: 'Use of agile methodologies SCRUM (certification) and AGILE',
            homeEx1_7: 'Sonarqube optimizations',

            homeEx2_1: 'Creation, optimization, and maintenance of modules React',
            homeEx2_2: 'Consumption and creation of functions API Rest with Express.js and GraphQL',
            homeEx2_3: 'Creation, optimization, and maintenance of modules React Native',
            homeEx2_4: 'Requirements analysis',
            homeEx2_5: 'Creation and maintenance of Landing pages with React and Wordpress',
            homeEx2_6: 'Google Cloud Platform Management',

            homeEx5_1: 'Urban Security Project (C5) by the Jalisco state government',
            homeEx5_2: 'Installation route planning',
            homeEx5_3: 'Assembling and programming of switches and boards',
            homeEx5_4: 'Security camera setup',

            company: 'Company',
            position: 'Position',
            description: 'Description',
            technologies: 'Technologies',
            pys_des_1: 'Creation, optimization, and maintenance of modules for the elektra.com.mx page using an agile framework such as Scrum.',
            pys_des_2: 'Warehouse management system (WMS) with different user roles and permissions per module, with implementation to sales channels such as woo-commerce and mercado libre, monitoring from sale to exit from the warehouse.',
            pys_des_3: 'Mobile application with different user roles and permissions per module, monitoring the different stages of the assortment flow of a store, each user with specific functions for their role.',
            pys_des_4: 'Web system with different user roles and permissions per module, generating check-in and check-out of vehicles to delivery routes from the last point, as well as accident survey and control of drivers, vehicles, and more.',
            pys_des_5: 'Web system for schools with different user roles and permissions per module, with various features such as student lists, attendance, homework, notices, teacher control, subjects, and more.',
            pys_des_6: 'Web system for sending remittances with different user roles and permissions per module, with different functionalities such as checking balances, and sending and receiving remittances.',
        
            contact_title: 'Get in touch',
            contact_msj: 'If you want to get in touch with me, talk to me about a collaboration project, or just say hello, you can contact me by email or follow me through my social networks.'
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;