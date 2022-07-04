import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    //home can later be changed to logo or header to navigate back to the homepage.
    return (
        <nav>

            <ul>
                <li>
                    <Link to="/">Home</Link> 
                </li>
                {/* <li>
                    <Link to="/map">Map</Link> // not in use anymore, using useNavigate() instead
                </li> */}
            </ul>
        </nav>
    )
}
export default NavBar;