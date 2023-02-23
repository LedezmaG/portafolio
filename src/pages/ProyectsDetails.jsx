import React from 'react'
import { useTranslation } from 'react-i18next';
import ReactResponsiveGallery from 'react-responsive-gallery';
import { Link, useParams } from 'react-router-dom';
import { ProjectsData } from '../data/Data';

export const ProyectsDetails = () => {

    const { id: _id} = useParams()
    const { t } = useTranslation();

    const data = ProjectsData.find((item) => {
        if (item.id == _id) {
            return item
        }
    })


    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/projets" className='link-cus'>{t('projects')}</Link></li>
                        <li class="breadcrumb-item link-cus">Detalles</li>
                    </ol>
                </nav>
                <div className='row'>
                    <div className="col-12">
                        <p className='title-md'>{data.title}</p>
                        <div className='d-container my-2'>
                            <b> {t('company')}: </b> 
                            {data.company}
                        </div>
                        <div className='d-container my-2'>
                            <b> {t('position')}: </b>
                            {data.position}
                        </div>
                        <div className='d-container my-2'>
                            <b> {t('description')}: </b>
                            {t(data.description)}
                        </div>
                        <div className='d-container my-2'>
                            <b> {t('activities')}: </b>
                            <ul>
                                {data.activities.map((item) => <li>{t(item)}</li> )}
                            </ul>                            
                        </div>
                        <div className='d-container my-2'>
                            <b> {t('technologies')}: </b>
                            <div>
                                { data.tecnologies.map((item)=> 
                                    <span className="badge rounded-pill text-bg-secondary mx-1">{t(item)}</span>
                                )}
                            </div>
                        </div>
                        <div className='d-container my-2'>
                            <b> {t('gallery')}: </b>
                            <ReactResponsiveGallery
                                useLightBox
                                images={ data.gallery } 
                            />
                        </div>
                        <div className='my-2'>
                            <b> {t('demo')}: </b>
                            { data.liveView 
                                ? <div>
                                    <a 
                                        href={data.liveView}
                                        target="_blank"
                                        type="button" 
                                        className="btn btn-outline-secondary btn-cus mx-1 my-1"
                                        >
                                        {t('seeMore')}
                                    </a>
                                </div>
                                : <>{t('available')}</>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
