import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Collapse, CardBody, Card } from 'reactstrap';
import './style.css';
import { Link } from 'react-scroll';

const MobileMenu  = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuHandler = () => {
        setIsMenuShow(!isMenuShow)
    }
    const setNotIsOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                <div className="logo2">
                    <h2><Link to='/home'>Santiago y Lina</Link></h2>
                </div>
                <ul className="responsivemenu">
                    <li><p onClick={() => setNotIsOpen()}>Home<i className="fa fa-angle-right" aria-hidden="true"></i></p></li>
                    <Collapse isOpen={isOpen}>
                        <Card>
                            <CardBody>
                                <li><Link to='/home'>Home style 1</Link></li>
                                <li><Link to='/home2'>Home style 2</Link></li>
                                <li><Link to='/home3'>Home style 3</Link></li>
                                <li><Link to='/home4'>Home style 4</Link></li>
                                <li><Link to='/home5'>Home video</Link></li>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                    <li><AnchorLink href='#story'>Story</AnchorLink></li>
                    <li><AnchorLink href='#people'>People</AnchorLink></li>
                    <li><AnchorLink href='#event'>Events</AnchorLink></li>
                    <li><AnchorLink href='#gallery'>Gallery</AnchorLink></li>
                    <li><AnchorLink  href='#rsvp'>Rsvp</AnchorLink></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/Blog-details'>Blog Details</Link></li>
                </ul>
                
            </div>

            <div className="showmenu" onClick={menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>         
        </div>
    )

    
}

export default MobileMenu;

