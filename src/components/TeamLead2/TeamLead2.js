import React from 'react';
import logo from '../../images/2.jpg';
import logo2 from '../../images/3.jpg';
import logo3 from '../../images/4.jpg';
import logo4 from '../../images/5.jpg';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function TeamLead2(){
    return(
        <Box id={"team"} sx={{ flexGrow: 1 }} style={{width:'80%',margin:'auto',marginBottom:'150px'}} >
            <Grid container spacing={2} className="teamlead4">
                <Grid item xs={6} md={6} lg={3} xl={3} style={{justifyContent:'center',alignItems:'center',textAlign:'center'}} className="teamlead4">
                    <img src={logo} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                    <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px'}}>Russo</h3>
                    <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder'}}>Co Founder & Marketing headmaster - Leader of the Black Scars</p>
                </Grid>
                <Grid item  xs={6} md={6} lg={3} xl={3}  style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                    <img src={logo2} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                    <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px'}}>Sangin</h3>
                    <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder'}}>Co Founder & NFT master - Leader of the Night Dukes</p>
                </Grid>
                <Grid item  xs={6} md={6} lg={3} xl={3}  style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                    <img src={logo3} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                    <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px'}}>Valamir</h3>
                    <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder'}}>Blockchain Developer - Leader of the Armor Hands</p>
                </Grid>
                <Grid item  xs={6} md={6} lg={3} xl={3} style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                    <img src={logo4} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                    <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px'}}>Manigo</h3>
                    <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder'}}>Co Founder & Tech Expert - Leader of the Mech Lords</p>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TeamLead2;