import React from 'react';
import '../StylesC/header.css'
import logo from '../images/robot.svg';

function Header (){
    return (

        <div>
               
            <h1>
            <img src={logo} className="App-logo" alt="logo" />  
            <span className='H1-header'>
                     Robot Friends
            </span>
            </h1>

        </div>
    );
}

export default Header;