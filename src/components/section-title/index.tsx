import React from 'react';
import './style.css'


interface SectiontitleProps {
    mensaje: string;
}

const Sectiontitle: React.FC<SectiontitleProps> = ({mensaje})  => {
    return(
        <div className="section-title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>{mensaje}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectiontitle;