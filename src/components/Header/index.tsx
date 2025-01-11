import AnchorLink from 'react-anchor-link-smooth-scroll'
import 'react-sticky-header/styles.css';
import MobileMenu from '../../components/MobileMenu'
import './style.css'
import { Link } from 'react-scroll';

const Header = () => {

    return(

          <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <h2><Link to='/home'>Santi Y Lina</Link></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Story</AnchorLink></li>
                                    <li><AnchorLink href='#people'>People</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Events</AnchorLink></li>
                                    <li><AnchorLink href='#gallery'>Gallery</AnchorLink></li>
                                    <li><AnchorLink href='#rsvp'>Rsvp</AnchorLink></li>
                                    <li><Link to='#'>Blog</Link>
                                        <ul className="submenu">
                                            <li><Link to='/blog'>Blog</Link></li>
                                            <li><Link to='/Blog-details'>Blog Details</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        
    )
}

export default Header;
