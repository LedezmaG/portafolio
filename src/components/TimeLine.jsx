import React from 'react'
import { useTranslation } from 'react-i18next';
import { TimeLineItem } from './TimeLineItem'

const timeLine = [
    {
        company: "Grupo Salinas",
        position: "Frontend developer",
        dates: "07/2022 - 02/2023",
        activities: [
            "homeEx1_1",
            "homeEx1_2",
            "homeEx1_3",
            "homeEx1_4",
            "homeEx1_5",
            "homeEx1_6",
            "homeEx1_7",
        ]
    },
    {
        company: "Dynamic solutions",
        position: "Fullstack developer",
        dates: "04/2019 - 06/2022",
        activities: [
            "homeEx2_1",
            "homeEx2_2",
            "homeEx2_3",
            "homeEx2_4",
            "homeEx2_5",
            "homeEx2_6",
        ]
    },
    {
        company: "Freebalance",
        position: "Fullstack developer",
        dates: "08/2018 - 02/20219",
        activities: [
            "homeEx4_1",
            "homeEx4_2",
            "homeEx4_3",
        ]
    },
    {
        company: "CIS International",
        position: "Tecnico especialista",
        dates: "08/2018 - 02/20219",
        activities: [
            "homeEx5_1",
            "homeEx5_2",
            "homeEx5_3",
            "homeEx5_4",
        ]
    },
] 

export const TimeLine = () => {
    
    const { t } = useTranslation();
    
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
                        { item.activities.map( (activiti) => <TimeLineItem > {t(activiti)} </TimeLineItem> )}
                    </div>
                </div>
            )}
        </div>
    )
}
