import React from 'react'
import { useTranslation } from 'react-i18next';
import { TimeLineData } from '../data/Data';
import { TimeLineItem } from './TimeLineItem'

export const TimeLine = () => {
    
    const { t } = useTranslation();
    
    return (
        <div className="timeline_area">
            { TimeLineData.map( (item) => 
                <div className="single-timeline-area">
                    <div className="timeline-date">
                        <p>
                            <b> {item.company} </b>
                            <small> {item.position} </small>  
                            <small> {item.dates} </small>  
                        </p>
                    </div>
                    <div className="row">
                        { item.activities.map( (activiti) => <TimeLineItem > {t(activiti)} </TimeLineItem> )}
                    </div>
                </div>
            )}
        </div>
    )
}
