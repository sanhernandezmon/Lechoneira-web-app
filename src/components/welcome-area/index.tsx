
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './style.css'

interface WelcomeProps {
  className?: string;
  welcome?: string;
}

const Welcome: React.FC<WelcomeProps> = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div  className={"welcome-area.s2"}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="welcome-content">
                    <h2>Junto a nuestras familias, queremos invitarte a nuestra boda</h2>
                    <h1>Vamos a celebrarlo con un especial evento y nos encantaría contar con tu compañia</h1>    
                    <h3>Sábado 24 de Mayo de 2025</h3>        
                    <h3>3:00 pm : Ceremonia religiosa Iglesia La Plazuela Maria Auxiliadora</h3>        
                    <h3>5:00 pm : Recepción Finca El refugio</h3>        
                    <h3>Via al Neusa, La Plazuela, Cogua, Cundinamarca</h3>                    
                    <div className="btn"><AnchorLink href='#rsvp'>Rsvp</AnchorLink></div>
                        <Button className="btn" onClick={toggle}>Location</Button>
                        <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Location</ModalHeader>
                                <ModalBody>
                                    <div className="location-map">
                                      <iframe title="locationFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0726494504192!2d-73.95837492432331!3d5.091955338140122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406eb9a7f8ae39%3A0x550abfb55b1aaa8e!2sIglesia%20La%20Plazuela%20maria%20auxiliadora!5e0!3m2!1ses!2sco!4v1736525551577!5m2!1ses!2sco" />
                                    </div>
                                </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Welcome;