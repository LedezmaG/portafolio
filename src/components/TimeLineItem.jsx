import React from 'react'

export const TimeLineItem = ({children}) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="single-timeline-content d-flex">
                <div className="timeline-text">
                    <p>
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}
