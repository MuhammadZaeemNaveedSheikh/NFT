import React from 'react';
import logo from '../../images/LOGO.gif';
import './styleFounder.css';
function Founder(){
    return(
        <div className='artist' style={{marginTop:'250px',marginBottom:'250px'}}>
            <img src={logo} alt="" />
            <h1 className='yann' style={{ fontFamily: 'cursive',letterSpacing:'12px',fontSize:'50px'}}>Alpha Legion</h1>
            <p className='data' style={{fontSize:'30px',fontWeight:'100',fontFamily:'sans-serif',letterSpacing:'2px'}}>His father, Lunaroid, is a legendary shapeshifting samurai. He fought in World War 3 against the enemy force. However, he was captured by the enemy and brought to Japan. According to legend, it is said that Lunaroid's special capacity can turn into a destruction machine which Zentaro, his son, inherited. Zentaro is looking for his father's whereabouts and joins him to fight against the government. Now, the new Shape-Shifting Samurai Zentaro wants to join the battle and walk with his father to form the most legendary duo in the world.</p>
        </div>
    )
}

export default Founder;