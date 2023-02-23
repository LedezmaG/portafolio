import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ProjectsData } from '../data/Data';

export const Proyects = () => {
    
    const { t } = useTranslation();

    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <p className='title-md'>{t('projects')}</p>
                { ProjectsData.map((project) => 
                    <div className='row'>
                        <div className="row justify-content-between w-60">
                            <div className='col'>
                                <h4>{ project.title }</h4>                                
                            </div>
                            <div className='col text-center'>
                                <Link to={`/projets/${project.id}`} className="btn btn-link link-cus mx-1 my-1" > Ver mas </Link>
                            </div>
                        </div>
                        <div className='d-container'>
                            <b> {t('company')}: </b> 
                            {project.company}
                        </div>
                        <div className='d-container'>
                            <b> {t('position')}: </b>
                            {project.position}
                        </div>
                        <div className='d-container'>
                            <b> {t('description')}: </b>
                            {t(project.description)}
                        </div>
                        <hr className='my-3' />
                    </div>
                )}
            </div>
        </div>
    )
}
