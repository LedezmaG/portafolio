import React from 'react'

export const Contact = () => {
    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <p className='title-md'>Contacto</p>
                <p>
                    Si quieres ponerte en contacto conmigo, hablar conmigo sobre un proyecto de colaboración o simplemente decir hola,
                    puedes comunicarte a mi correo eletronico o segirme atravez de mis redes sociales.
                    {/* completa el formulario a continuación o envíe un correo electrónico a  */}
                    <a className='link' href="mailto:israeledezmag@gmail.com"> israeledezmag@gmail.com </a>
                    
                </p>
            </div>
            {/* <div className="col-12 col-md-12 px-5 py-3 form-contact">
                <div className="mb-3">
                    <label for="msgName" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="msgName" />
                </div>
                <div className="mb-3">
                    <label for="msgEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="msgEmai" />
                </div>
                <div className="mb-3">
                    <label for="msgContent" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="msgContent" rows="3" />
                </div>
                <div className="mb-3 text-end">
                    <button className='btn btn-outline-secondary btn-cus'> 
                        <i className="fa-solid fa-paper-plane" /> Enviar 
                    </button>
                </div>
            </div> */}
            <div className="col-12 col-md-12">
                <p className='text-center mt-5'>
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
