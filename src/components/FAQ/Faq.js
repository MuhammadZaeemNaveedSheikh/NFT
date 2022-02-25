import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './stylefaq.css';

function Faq(){
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='faqmain' style={{ backgroundColor:'transparent',justifyContent:'center',margin:'auto',marginBottom:'30px'}}>
        <h1 style={{color:'#fff',fontWeight:'bolder',fontSize:'50px',marginBottom:'40px',marginTop:'155px'}}>FAQ</h1>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ backgroundColor:'transparent',color:'white',borderBottom:'1px solid white',fontWeight:'bolder',marginBottom:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{color:'white'}}
        >
          <Typography sx={{ width: '100%', flexShrink: 0,color:'white',fontSize:'25px'}}>
          Where can I buy Lunaroid NFT and be a part of the community?<ArrowDropDownIcon style={{fontSize:'25px',float:'right'}} className="accordation" />
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <div style={{borderLeft:'3px solid aqua',marginRight:'10px'}}></div>
          <Typography style={{borderLeft:'3px solid aqua',marginRight:'10px',color:'lightgrey',fontSize:'23px' }}>
          Minting date and website will be published soon. We will post the details ahead of time on our Discord server and Twitter account. The whitelist will be reserved for early adopters and the fan base community. After the mint is over, there will be an option to trade on secondary market platforms.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ backgroundColor:'transparent',color:'white',borderBottom:'1px solid white',fontWeight:'bolder',marginBottom:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
         <Typography sx={{ width: '100%', flexShrink: 0,color:'white',fontSize:'25px',}}>
         How much does a minting of Lunaroid NFT cost?<ArrowDropDownIcon style={{fontSize:'25px',float:'right'}} className="accordation" />
          </Typography>
       
        </AccordionSummary>
        <AccordionDetails>
        <div style={{borderLeft:'3px solid aqua',marginRight:'10px'}}></div>
          <Typography style={{borderLeft:'3px solid aqua',marginRight:'10px',color:'lightgrey',fontSize:'23px' }}>
          The cost of Lunaroids NFT will be determined 24 hours before the mint date.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ backgroundColor:'transparent',color:'white',borderBottom:'1px solid white',fontWeight:'bolder',marginBottom:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0,color:'white',fontSize:'25px',}}>
          How was the Lunaroids NFT created?<ArrowDropDownIcon style={{fontSize:'25px',float:'right'}} className="accordation" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div style={{borderLeft:'3px solid aqua',marginRight:'10px'}}></div>
          <Typography style={{borderLeft:'3px solid aqua',marginRight:'10px',color:'lightgrey',fontSize:'23px' }}>
          Each Lunaroid has been constructed algorithmically by a special script that basically mixes a variety of hand-drawn properties with different possibilities in the following categories: Background, Clothing, Side vent, Mask, Element, Hair.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ backgroundColor:'transparent',color:'white',borderBottom:'1px solid white',fontWeight:'bolder',marginBottom:'20px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0,color:'white',fontSize:'25px',}}>
          How to get whitelisted?<ArrowDropDownIcon style={{fontSize:'25px',float:'right'}} className="accordation" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div style={{borderLeft:'3px solid aqua',marginRight:'10px'}}></div>
          <Typography style={{borderLeft:'3px solid aqua',marginRight:'10px',color:'lightgrey',fontSize:'23px' }}>
          You can get whitelisted by inviting new members into our discord server or by staying active and help others inside our community, you can find more about our whitelist requirements in our discord server #whitelist-requirements .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ backgroundColor:'transparent',color:'white',borderBottom:'1px solid white',fontWeight:'bolder',marginBottom:'100px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0,color:'white',fontSize:'25px',}}>
          Are there benefits to holding multiple Lunaroid NFT?<ArrowDropDownIcon style={{fontSize:'25px',float:'right'}} className="accordation" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div style={{borderLeft:'3px solid aqua',marginRight:'10px'}}></div>
          <Typography style={{borderLeft:'3px solid aqua',marginRight:'10px',color:'lightgrey',fontSize:'23px' }}>
          Yes, there will be air drops in the future and fair votes. So, each Lunaroid NFT that you hold will give you more voting power in the community and get you more benefits.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div></div>
    </div>
  );


}
export default Faq;
