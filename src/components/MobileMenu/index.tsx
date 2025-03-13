import { useState } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import './style.css';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../domains/Paths';
import { Locals } from '../../domains/Locals';

const MobileMenu  = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const menuHandler = () => {
        setIsMenuShow(!isMenuShow)
    }
    const [isOpen, setIsOpen] = useState(false);

    const setNotIsOpen = () => {
        setIsOpen(!isOpen);
    }
    const navigate = useNavigate();
    const handleNavigate = (route: string) => {
        console.log(route)
        setIsMenuShow(false)
        navigate(route)
    }
    const handleChangeLocation = (local: Locals) => {
        setIsMenuShow(false)
        console.log(local)
    }
    return (
        <div>
            <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                <div className="logo2">
                    <h2>Lechoneira</h2>
                </div>
                
                <ul className="responsivemenu">
                <li>
                    <p onClick={() => setNotIsOpen()}>{"Locations "} <i className="fa fa-angle-right" aria-hidden="true"></i></p>
                </li>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                                <li onClick={() => handleChangeLocation(Locals.LOCAL_15)}>Cra 15</li>
                                <li onClick={() => handleChangeLocation(Locals.LOCAL_16)}>Cra 16</li>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <li onClick={() => handleNavigate(Paths.INVENTARY)}>Inventario</li>
                    <li onClick={() => handleNavigate(Paths.SELLS)}>Ventas</li>
                </ul>
                
            </div>

            <div className="showmenu" onClick={menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
        </div>
    )

    
}

export default MobileMenu;

