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
                        <div>
                            <div className="row justify-content-between w-60">
                                <div className='col'>
                                    <h4>{ project.title }</h4>                                
                                </div>
                                <div className='col text-center'>
                                    <Link to={`/projets/${project.id}`} className="btn btn-link link-cus mx-1 my-1" > Ver mas </Link>
                                </div>
                            </div>
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
                                { project.tecnologies.map((item)=> <span className="badge rounded-pill text-bg-secondary mx-1">{t(item)}</span>)}
                            </p>
                        </div>
                        <hr />
                    </div>
                )}
            </div>
        </div>
    )
}
