import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from '../../images/1.jpg';
// import logo1 from './wearetext.svg';
// import logo2 from './lunaroidtext.svg';

import './MainImage.css';



function MainImage(){
    return(
        <Box sx={{ flexGrow: 1 }} style={{marginBottom:'100px'}}>
            <Grid container spacing={2} style={{justifyContent:'center',alignItems:'center'}}>
                <Grid item xs={8}>
                    <img src={logo} style={{width:'70%',height:'100vh',}}  alt=""/>
                </Grid>
                <Grid item xs={4}>
                    <div style={{display:'flex',justifyContent:'center',alignItems: 'center',width:'25%',marginTop:'30%'}}>
                        <h2 style={{ filter: 'brightness(700%)',color:'white',fontSize:'150px',fontFamily:'cursive'}}>OMEGA KNIGHTS</h2>
                    </div>
                </Grid>

            </Grid>
        </Box>
    );
}

export default MainImage;