import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css';

function Header(){
    
    return(
   
           <nav>
               <input id="nav-toggle" type="checkbox" />
               <div className='logo5'>NFT<strong>Code</strong></div>
               <ul className='links'>
                   <li><a href="#Lore">Lore</a></li>
                   <li><a href="#Gallery">Gallery</a></li>
                   <li><a href="#Roadmap">Roadmap</a></li>
                   <li><a href="#Artist">Artist</a></li>
                   <li><a href="#Team">Team</a></li>
                   <li><a href="#FAQ">FAQ</a></li>
                   <li><a href="#Buy" style={{fontSize:'20px',border:'1px solid aqua',borderRadius:'5%'}} className="btn7">Buy on magic eden</a></li>
                   <li><a href="#Discord" style={{fontSize:'20px',border:'1px solid aqua',borderRadius:'5%'}} className="btn7">Join our discord</a></li>
                  

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