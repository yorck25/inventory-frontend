import React, { useState } from 'react'; 
import './style.module.scss';
const login = () => {

    return ( 
            <div className='container'>
            <div className="header">
            <div className="text">
                
            </div>
            <div className="underline"></div> 
            <div className="inputs">
                <input type="text" placeholder ="Name" />
            </div>
            <div className= "input">
                <input type="password" placeholder="Password"/>
                </div>
        </div>
        <div className = "submit-container"></div>
            <div className="submit">Login</div>
        </div>
    );
};

export default login