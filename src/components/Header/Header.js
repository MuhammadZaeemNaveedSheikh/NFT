import React from 'react';
import logo from '../../images/LOGO.gif'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { BsDiscord } from "react-icons/bs";

import './Header.css';

function Header(){
    
    return(
   
           <nav>
               <input id="nav-toggle" type="checkbox" />
               <div className='logo5'><img src={logo} style={{width: '75px',height:'75px'}} alt=""/></div>
               <ul className='links'>
                   <li><a href='./components/Legend/Legend.js'>Lore</a></li>
                   <li><a href="./components/Corosel/Corosel.js">Gallery</a></li>
                   <li><a href="./components/Roadmap/roadmap.js">Roadmap</a></li>
                   <li><a href="#Artist">Artist</a></li>
                   <li><a href="#Team">Team</a></li>
                   <li><a href="#FAQ">FAQ</a></li>
                   <li><a href="https://twitter.com/OmegaKnightsNFT"><TwitterIcon /></a></li>
                   <li><a href="https://www.instagram.com/omegaknightsnft/"><InstagramIcon /></a></li>
                   <li><a href="https://discord.gg/omegaknightsnft"><BsDiscord /></a></li>
                   {/* <li><a href="#Buy" style={{fontSize:'20px',border:'1px solid aqua',borderRadius:'5%'}} className="btn7">Buy on magic eden</a></li> */}

                  

               </ul>
               <label for="nav-toggle" className='icon-burger'>
                   <div className='line'></div>
                   <div className='line'></div>
                   <div className='line'></div>
               </label>
           </nav>
           
    );
}
export default Header;