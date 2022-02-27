import React from 'react';
// import logo from '../Artist/5.png';
// import EmailIcon from '@mui/icons-material/Email';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import './style1.css';



function Footer(){
    return(
        <div className='copyright1'>
            {/* <footer>
                {/* <div className='row'>
                    <div className='col'>
                        < img src={logo} className="logo"/>
                        <p>NFT Data Here</p>
                    </div>
                    <div className='col'>
                        <h3>HeadQuater <div className='underline'><span></span></div></h3>
                        <p>California</p>
                        <p>st 19, Alaska</p>
                        <p className='email-id'>sample@gmail.com</p>
                        <p>+00000000000</p>
                    </div>
                    <div className='col'>
                        <h3>Links <div className='underline'><span></span></div></h3>
                        <ul>
                            <li><a href="">Home</a> </li>
                            <li><a href="">ARTIST</a> </li>
                            <li><a href="">RoadMap</a> </li>
                            <li><a href="">FAQ</a> </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h3>GET NFTS <div className='underline'><span></span></div></h3>
                        <form>
                            <EmailIcon className='emailicon'/>
                            <input type="text" placeholder="NFT CODES" required />
                            <button type="submit"><ArrowCircleRightIcon className='button3' /></button>
                        </form>
                        <div className='social-icons'>
                            <FacebookIcon className='icons5'/>
                            <TwitterIcon  className='icons5'/>
                            <WhatsAppIcon  className='icons5'/>
                            <PinterestIcon  className='icons5'/>

                        </div>
                    </div>
                </div> 
            </footer> */}
            <hr></hr>
            <p className='copyright'>Omega Knights NFT. © All rights reserved</p>
        </div>
    )

}
export default Footer;
