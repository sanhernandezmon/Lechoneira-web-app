import 'react-sticky-header/styles.css';
import MobileMenu from '../../components/MobileMenu'
import './style.css'
import { Locals } from '../../domains/Locals';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../domains/Paths';



const Header = () => {
    const handleLocationClick = (local: Locals) => {
        console.log(`Clicked on ${local}`);
    };
    
    const navigate = useNavigate();
    const handleNavigate = (route: string) => {
        navigate(route)
    }
    return(

          <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo">
                                <h2 onClick={() => handleNavigate(Paths.ROOT)}>Lechoneira</h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex" style={{ padding: '0 10px' }}>
                                    <li style={{ padding: '0 10px' }}><h3 onClick={() => handleNavigate(Paths.INVENTARY)}>Inventario</h3></li>
                                    <li style={{ padding: '0 10px' }}><h3 onClick={() => handleNavigate(Paths.SELLS)}>Ventas</h3></li>
                                    <li style={{ padding: '0 10px', position: 'relative' }}>
                                        <h3>Locations</h3>
                                        <ul className="submenu">
                                            <li onClick={() => handleLocationClick(Locals.LOCAL_15)}>Cra 15</li>
                                            <li onClick={() => handleLocationClick(Locals.LOCAL_16)}>Cra 16</li>
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
