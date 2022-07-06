import React from 'react';
import { useNavigate } from 'react-router-dom';
import bbcIcon from "../assets/images/bbc_logo.jpeg"
import "../css/Header.css"


const Header = () => {

    // let navHome = useNavigate();
    // function handleHomeClick() {
    //     navHome('./');
    // }



    return (

        <div className='header'>

            {/* <div className='home-button'>
                <button onClick={handleHomeClick}>Home</button>
            </div> */}

            {/* <img className='bbc-icon' src={bbcIcon} onClick={handleClick} /> */}
            <img className='bbc-icon' src={bbcIcon} />
            <h1>Hidden Glasgow</h1>



        </div>

    )

};

export default Header;