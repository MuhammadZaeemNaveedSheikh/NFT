import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


import './Legend.css';

function Legend(){
    return(
        <div className="row" style={{marginTop:'250px',marginBottom:'200px',display: 'flex',}}>
            <div className='col' style={{marginBottom:'250px',filter:'brightness(100%)',width:'300px',marginRight:'100px'}}>
                <h1 style={{fontFamily:'cursive',fontSize:'45px',color:'#fff',marginLeft:'150px'}} className="legend">Lore</h1>
            </div>
            <div className='col' style={{width:'700px'}}>
            <Typography style={{color:'lightgrey',fontSize:'21px',fontWeight:'500'}}>Created in the year 5070 just before the World War 3 broke out, Lunaroid, a Shape Shifting Samurai Masked Robot comes back to the city of Japan after it was thought to have been destroyed or captured by the enemy force. This time around, wearing another face half angelic and half demonic. After the war had ended due to signed peace treaties, the Japanese government sent spies to other nations in a search of their whereabouts. Not out of goodwill though, but to be sure that the Masked Samurai was gone for good.</Typography>
      <Accordion className='col' style={{backgroundColor:'transparent',color:'#fff',width:'700px'}}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}
        >
          <Typography className='readmore' style={{fontFamily:'cursive',fontSize:'30px',textAlign:'center',marginLeft:'35%'}}>Read More </Typography><ArrowDropDownIcon style={{fontSize:'25px',color:'aqua',marginTop:'10px'}} className="arrowkey" />
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'lightgrey',fontSize:'17px',fontWeight:'500'}}>
          First created to be a threat to their enemies, Lunaroid soon evolved to be able to express more human emotions. It sees the government’s corrupt practices and often calls them out on it. At some point, a selected part of government officials spread false stories about Lunaroid, claiming it must have killed some top officials. When the spies confirmed that it was not in all those countries, they were relieved to hear that their plan to eliminate it by isolating it in a hot zone during the war had worked out perfectly.

Years later, when Japan was experiencing the worst form of corruption in the history of humanity, with the government destroying their financial structure and oppressing the downtrodden, the long forgotten shape shifting masked Samurai warrior appears. This time around, to actually be the city’s vigilante, serving justice without holding back.
          </Typography>
        </AccordionDetails>
      </Accordion>
 
  
            </div>
        </div>
    )
}
export default Legend;