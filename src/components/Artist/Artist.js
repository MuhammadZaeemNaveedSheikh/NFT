import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArtstation
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './App.css';
library.add(faArtstation);

function Artist(){
    return(
        <div id={"artist"} className='artist' style={{marginTop:'200px',marginBottom:'350px'}}>
            <img src={"/images/alex.jpeg"} alt="" style={{borderRadius:'50%'}}/>
            <h1 className='yann' style={{ fontFamily: 'cursive',letterSpacing:'10px',fontSize:'50px'}}>Alexander Karichi</h1>
            <h5 style={{fontFamily:'cursive',marginBottom:'5px'}}>The Artist</h5>
            <a href="https://www.artstation.com/karichi" target={"_blank"}>
                <FontAwesomeIcon icon={["fab", "artstation"]} size="xl" />
            </a>
            <p className='data' style={{fontSize:'30px',fontWeight:'lighter',fontFamily:'sans-serif',letterSpacing:'2px'}}>
                Alexander Karichi is a veteran designer with leading expertise in 3D and art design.
                His passion lies at the intersection of art and design.
                His works are a masterpiece of unconventional art laced with curiosity and a futuristic-driven idea to express the beauty of art in its purest form.
                Having collaborated with diverse clients across the world in the past and garnered a rich design experience in the process,
                Alexander now explores his ever raving flair for art as an NFT art designer.
            </p>
        </div>
    )

}
export default Artist;