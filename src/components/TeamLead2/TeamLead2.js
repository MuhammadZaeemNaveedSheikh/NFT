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
                    <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>KNIGHT 1</h3>
                    <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>Co Founder & Marketing headmaster    </p>
                </Grid>
                <Grid item  xs={6} md={6} lg={3} xl={3}  style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                    <img src={logo2} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                    <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>KNIGHT 2</h3>
                    <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>Co Founder & NFT master
                    </p>
                </Grid>
                <Grid item  xs={6} md={6} lg={3} xl={3}  style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                    <img src={logo3} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                    <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>KNIGHT 3</h3>
                    <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>Blockchain Developer
                    </p>
                </Grid>
                <Grid item  xs={6} md={6} lg={3} xl={3} style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                    <img src={logo4} alt="" style={{borderRadius:'100%',filter:'brightness(100%)' }} />
                    <h3 style={{fontFamily:'cursive',color:'aqua',fontSize:'35px',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>KNIGHT 4</h3>
                    <p style={{fontSize:'20px',color:'lightgray',fontWeight:'bolder',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>Co Founder & Tech Expert
                    </p>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TeamLead2;