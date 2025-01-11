import React from 'react'

import {Link} from 'react-router-dom'

import './style.css'

interface BreadcrumbsProps {
    Blog: string;
    Blogd: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) =>{
    return(
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <h2>{props.Blog}</h2>
                        <ol className="breadcrumb">
                            <li><Link to='/home'>Home</Link></li>
                            <li>{props.Blogd}</li>
                        </ol>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Breadcrumbs;