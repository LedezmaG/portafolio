import React from 'react'
import { useTranslation } from 'react-i18next';
import { FormationData } from '../data/Data';

export const Education = () => {

    const { t } = useTranslation();

    return (
        <div className='row cont-center'>
            <div className="col-12 col-md-12">
                <p className='title-md'>{t('education')}</p>
                <div className='d-container'>
                    <span className='fs-5 fw-bold'>{t('degree')}</span> 
                    <span className='fs-6'>Universidad de Guadalajara</span> 
                    <span className=''> Centro universitario de tonala </span>
                    <span className='fw-normal'> 2016 - 2019 </span>
                </div>
                <div className="mt-3">
                    <p className='title-md'>{t('certifications')}</p>
                    { FormationData.map((item) => 
                        <div className='d-container mb-'>
                            <span className='fs-5 fw-bold'> {item.title} </span>
                            <span className='fs-6'>
                                {item.institution}  -  {item.date}  - 
                                <a href={item.diploma} target="_blank" rel="noopener noreferrer" className='link-cus'>{t('seeMore')}</a>
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
