import React from 'react';
import logo from '../../images/LOGO.gif';
import './styleFounder.css';
function Founder(){
    return(
        <div id={""} className='artist' style={{marginTop:'250px',marginBottom:'250px'}}>
            <img src={logo} alt="" />
            <h1 className='yann' style={{ fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif;',letterSpacing:'12px',fontSize:'50px',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>Alpha Legion</h1>
            <p className='data' style={{fontSize:'30px',fontWeight:'100',fontFamily:'sans-serif',letterSpacing:'2px',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>
                Omega Knights are here to protect us all, but wherever there is good, evil will come soon. Omega Knights holders will receive a free NFT drop of the evil Alpha Horde.
            </p>
        </div>
    )
}

export default Founder;