import React from 'react';
// import logo from './roadmap.png';
import './Roadmap.css';

function Roadmap(){
    return(
        <div style={{width:'100%',marginBottom:'300px',filter:'brightness(200%)',marginLeft:'15%'}}>
            <h1 style={{color:'white',marginLeft:'25%',fontFamily:'cursive',fontSize:'50px',marginBottom:'100px'}}>ROAD MAP</h1>
            <div style={{display:'flex',flexDirection:'row'}} >

                <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:'65%',marginLeft:'5%'}} >
                    <div style={{marginBottom:'30px'}}>
                        <h1 style={{marginBottom:'15px',fontSize:'40px',fontFamily:'sans-serif',color:'#ddd',fontWeight:'100',letterSpacing:'3px'}}>- Supreme Art</h1>
                        <p style={{fontSize:'25px',color:'lightgray'}}>Not another derivative, our unique art will make you stand out in the crowd of boring
                            repetitive NFT projects. Omega Knights rarity and hierarchy is still under work, will be
                            published soon.</p>
                    </div>
                    <div style={{marginBottom:'30px',marginTop:'30px'}}>
                        <h1 style={{marginBottom:'15px',fontSize:'40px',fontFamily:'sans-serif',color:'#ddd',fontWeight:'100',letterSpacing:'3px'}}>- Play 2 Earn</h1>
                        <p style={{fontSize:'25px',color:'lightgray'}}>We’re developing a P2E multiplayer shooter PvP. We have a working demo of the game we
                            hope to ship soon.
                            Game rewards will come in our upcoming token, and Omega Knights NFT holders will have
                            improved attributes and rewards.
                            Omega Knights NFT holders will receive airdrops of epic weapons and relics, giving them a
                            significant advantage over non-holders players.</p>
                    </div>

                    <div style={{marginBottom:'30px'}}>
                        <h1 style={{marginBottom:'15px',fontSize:'40px',fontFamily:'sans-serif',color:'#ddd',fontWeight:'100',letterSpacing:'3px',marginTop:'70px'}}>- Omegaverse</h1>
                        <p style={{fontSize:'25px',color:'lightgray'}}>Omega Knights were forged in 3D, hence are native citizens of the Metaverse. We’re
                            working on building the branding and utility on top of Omega Knights.
                            Omega Knights ownership is mandatory to gain access to the Omegaverse.
                            We plan on having holders exclusive merchandise through the members only Omegaclub.
                            Holders will get prestigious whitelist spots, giveaways and airdrops.</p>
                    </div>
                    <div style={{marginBottom:'30px'}}>
                        <h1 style={{marginBottom:'15px',fontSize:'40px',fontFamily:'sans-serif',color:'#ddd',fontWeight:'100',letterSpacing:'3px',marginTop:'70px'}}>- Free NFT </h1>
                        <p style={{fontSize:'25px',color:'lightgray'}}>Omega Knights are here to protect us all, but wherever there is good, evil will come soon.
                            Omega Knights holders will receive a free NFT drop of the evil Alpha Horde.
                        </p>
                    </div>
                    <div style={{marginBottom:'30px'}}>
                        <h1 style={{marginBottom:'15px',fontSize:'40px',fontFamily:'sans-serif',color:'#ddd',fontWeight:'100',letterSpacing:'3px',marginTop:'70px'}}>- Community Focused</h1>
                        <p style={{fontSize:'25px',color:'lightgray'}}>We constantly work on growing our Omega Knights community on Discord and Twitter.
                            Early supporters will get whitelist access, holders will receive various giveaways, Omega
                            Knights will also participate in charity initiatives.
                            Before the minting date, we’ll airdrop Omega Knights to the most active members to thank
                            them for their support.
                            Omega Knights continuously evolve, post minting date we’ll work on formalizing our on-chain
                            governance system to ensure fair participation for all holders.
                            We plan on listing the project on all major marketplaces to ensure maximal value and
                            liquidity to holders.
                            We have and will expand our partnerships on behalf of the holders.
                        </p>
                    </div>
                    <div>
                        <h1 style={{marginBottom:'15px',fontSize:'40px',fontFamily:'sans-serif',color:'#ddd',fontWeight:'100',letterSpacing:'3px',marginTop:'70px'}}>- Team Expansion</h1>
                        <p style={{fontSize:'25px',color:'lightgray'}}>Omega Knights recruits only the best and brightest to their ranks,
                            for the role of Discord Knight Moderators</p>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Roadmap;