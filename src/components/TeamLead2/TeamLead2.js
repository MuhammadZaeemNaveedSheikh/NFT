import React from 'react';
import logo from './1.jpg';
import logo2 from './2.jpg';
import logo3 from './3.jpg';
import logo4 from './4.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function TeamLead2(){
    return(

        <Box sx={{ flexGrow: 1 }} style={{width:'80%',margin:'auto',marginBottom:'150px'}} >
      <Grid container spacing={2} className="teamlead4"> 
        <Grid item xs={3} style={{justifyContent:'center',alignItems:'center',textAlign:'center'}} className="teamlead4">
        <img src={logo} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px'}}>Mitsuaki</h3>
                <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder'}}>Co Founder & Marketing headmaster    </p>
        </Grid>
        <Grid item xs={3}  style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
        <img src={logo2} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px'}}>Atsushi</h3>
                <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder'}}>Co Founder & NFT master
</p>
        </Grid>
        <Grid item xs={3}  style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
        <img src={logo3} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px'}}>SHIRO</h3>
                <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder'}}>Blockchain Developer
</p>
        </Grid>
        <Grid item xs={3}  style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
        <img src={logo4} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px'}}>RAIDYN</h3>
                <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder'}}>Co Founder & Tech Expert
   </p>
        </Grid>
      </Grid>
    </Box>
       
    );

}

export default TeamLead2;