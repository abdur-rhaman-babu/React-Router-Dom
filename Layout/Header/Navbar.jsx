import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav className="Nav-bar">
                <div className="Nav-logo">
                    <h1>HRD</h1>
                </div>
                <div className="menu">
                        <ul className="main-menu">
                        <li><Link to = "/home">HOME</Link></li>
                        <li><Link to = "/post">POST</Link></li>
                        <li><Link to = "/about">ABOUT</Link></li>
                        <li><Link to = "/users">USER</Link></li>
                        <li><Link to = "/contact">CONTACT</Link></li>
                        </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;