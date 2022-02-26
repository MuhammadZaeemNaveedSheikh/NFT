import React from 'react';
import logo from './5.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './App.css';

function Artist(){
    return(
        <div className='artist' style={{marginTop:'200px',marginBottom:'350px'}}>
            <img src={logo} alt=""/>
            <h1 className='yann' style={{ fontFamily: 'cursive',letterSpacing:'10px',fontSize:'50px'}}>YANIV SHAHAR</h1>
            <h5 style={{fontFamily:'cursive',marginBottom:'5px'}}>The Artist</h5>
            <FacebookIcon className='icon1'/>
            <TwitterIcon className='icon1'/>
            <p className='data' style={{fontSize:'30px',fontWeight:'lighter',fontFamily:'sans-serif',fontWeight:'100',letterSpacing:'2px'}}>Yaniv Shahar is a veteran designer with leading expertise in 3D and art design. His passion lies at the intersection of art and design. His works are a masterpiece of unconventional art laced with curiosity and a futuristic-driven idea to express the beauty of art in its purest form. Having collaborated with diverse clients across the world in the past and garnered a rich design experience in the process, Yaniv now explores his ever raving flair for art as an NFT art designer.</p>
        </div>
    )

}
export default Artist;