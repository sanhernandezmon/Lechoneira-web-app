import React, {Component} from 'react';
import 'react-fancybox/lib/fancybox.css'
import Sectiontitle from '../section-title'
import './style.css'

import galimg1 from '../../images/gal/img-1.jpg'
import galimg2 from '../../images/gal/img-2.jpg'
import galimg3 from '../../images/gal/img-3.jpg'
import galimg4 from '../../images/gal/img-4.jpg'
import galimg5 from '../../images/gal/img-5.jpg'
import galimg6 from '../../images/gal/img-6.jpg'

const un_mensaje = "Galeria de fotos";


const Gallery  = () => {
    return (
      <div id="gallery" className="Gallery-section section-padding">
              <Sectiontitle mensaje={un_mensaje}/> 
             <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <img src={galimg1} alt="gallery" />
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <img src={galimg2} alt="gallery" />
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <img src={galimg3} alt="gallery" />
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <img src={galimg4} alt="gallery" />
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <img src={galimg5} alt="gallery" />
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <img src={galimg6} alt="gallery" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );

}

export default Gallery;