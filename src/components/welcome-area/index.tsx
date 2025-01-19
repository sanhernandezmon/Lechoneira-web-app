
import React  from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import iglesia from '../../images/iglesia.png'
import Sectiontitle from '../section-title'


const IglesiaSize = {
  width: '300px',
  height: '200px',
};

const MapaSize = {
  width: '600px',
  height: '200px',
};

const un_mensaje = "Celebremos juntos";

const Welcome = () => {
    
  return (
                    <div className="location-map">
                    <Sectiontitle mensaje={un_mensaje}/>                      

                    <table align="center">
                    <tbody>
                        <tr>
                          <td> 
                            <h1>Junto a nuestras familias, queremos invitarte a nuestra boda</h1>
                            <h2>Vamos a celebrarlo con un evento especial y nos encantaría contar con tu compañia</h2>    
                            <p>Sábado 24 de Mayo de 2025</p>        
                            <p>3:00 pm : Ceremonia religiosa Iglesia La Plazuela Maria Auxiliadora</p>        
                            <p>5:00 pm : Recepción Finca El refugio</p>        
                            <p>Via al Neusa, La Plazuela, Cogua, Cundinamarca</p>
                          </td> 
                        </tr>
                    </tbody>
                    </table>

                    <table align="center">
                    <tbody>
                        <tr>
                        <td> <img src={iglesia} alt="La plazuela" style={IglesiaSize} /> </td>
                        <td> <iframe title="locationFrame" style={MapaSize} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0726494504192!2d-73.95837492432331!3d5.091955338140122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406eb9a7f8ae39%3A0x550abfb55b1aaa8e!2sIglesia%20La%20Plazuela%20maria%20auxiliadora!5e0!3m2!1ses!2sco!4v1736525551577!5m2!1ses!2sco" /> </td>
                        </tr>
                    </tbody>
                    </table>

                    <table align="center">
                    <tbody>
                        <tr>
                        <td>
                            <div className="btn"><AnchorLink href='#rsvp'>Confirmar Asistencia</AnchorLink></div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
        </div>           
  );
}

export default Welcome;