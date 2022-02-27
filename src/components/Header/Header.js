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
                <li><a href='#lore'>Lore</a></li>
                <li><a href="#corosel">Gallery</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#artist">Artist</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a target={"_blank"} href="https://twitter.com/OmegaKnightsNFT"><TwitterIcon /></a></li>
                <li><a target={"_blank"} href="https://www.instagram.com/omegaknightsnft/"><InstagramIcon /></a></li>
                <li><a target={"_blank"} href="https://discord.gg/omegaknightsnft"><BsDiscord /></a></li>
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