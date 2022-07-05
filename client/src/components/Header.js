import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {


    // let navHeader = useNavigate();
    // function handleClick() {
    //     navHeader('/');
    // }


    return (

        <div className='header'>
            <h1>Hidden Glasgow</h1>
            {/* <h1 onClick={handleClick}>Hidden Glasgow</h1> */}


        </div>

    )

};

export default Header;