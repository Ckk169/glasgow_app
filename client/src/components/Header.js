import React from 'react';
import { Link } from 'react-router-dom';
import bbcIcon from "../assets/images/bbc_logo.jpg"
import bbcGif from "../assets/images/bbc_gif.gif"
import "../css/Header.css"


const Header = () => {

    // let navHome = useNavigate();
    // function handleClick() {
    //     navHome('./');
    // }



    return (

        <div className='header'>
            <Link to="/">
                <img className='bbc-icon' src={bbcGif} />
            </Link>

            {/* <img className='bbc-icon' src={bbcGif}/> */}

            {/* <div className='home-button'>
                <button onClick={handleHomeClick}>Home</button>
            </div> */}



        </div>

    )

};

export default Header;