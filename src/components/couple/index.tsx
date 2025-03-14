import React from 'react'
import Sectiontitle from '../section-title'
import './style.css'

const un_mensaje = "El destino nos unió y ahora estamos juntos para siempre. Así somos.";
const images = [
    `${process.env.PUBLIC_URL}/couple/lina.jpg`,
    `${process.env.PUBLIC_URL}/couple/santi.jpg`,
  ];
const Couple = () => {
    return(
        <div id="couple" className={"about-wrap"}>
            <div className="couple-area section-padding">
                <Sectiontitle mensaje={un_mensaje} />
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={images[0]} alt="Lina"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Lina Maria</h3>
                                            <p>Hola, soy Lina Maria Silva, adorabe profesora de niños, amante de las mascotas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                <div className="couple-img">
                                <img src={images[1]} alt="Santi"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Santiago</h3>
                                            <p>Hola, soy Santi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;