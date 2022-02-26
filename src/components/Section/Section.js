import React from 'react';
import Title from 'react-vanilla-tilt';

import './section.css';

function Section(){
    return(
        <div class="container" style={{marginTop:'190px'}}>
 <Title style={{max: 25,  speed: 300,glare:true,
            "max-glare":1 }}>
        <div class="card">
            <div class="content">
                <h2>01</h2>
                <h3>NFT One</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptatem.</p>
                <a href="#">Read More</a>
            </div>
        </div>
        </Title>
        <Title style={{scale: 2, max: 25,  speed: 300,glare:true,
            "max-glare":1 }}>
        <div class="card">
            <div class="content">
                <h2>02</h2>
                <h3>NFT Two</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptatem.</p>
                <a href="#">Read More</a>
            </div>
        </div>
        </Title>
        <Title style={{scale: 2, max: 25,  speed: 300,glare:true,
            "max-glare":1 }}>
        <div class="card">
            <div class="content">
                <h2>03</h2>
                <h3>NFT Three</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptatem.</p>
                <a href="#">Read More</a>
            </div>
        </div>
        </Title>
    </div>
    
    );

}
export default Section;