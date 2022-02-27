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
        <div id={"lore"} className="row" style={{marginTop:'250px',marginBottom:'200px',display: 'flex',}}>
            <div className='col' style={{marginBottom:'250px',filter:'brightness(100%)',width:'300px',marginRight:'100px'}}>
                <h1 style={{fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif',fontSize:'45px',color:'#fff',marginLeft:'150px'}} className="legend">Lore</h1>
            </div>
            <div className='col' style={{width:'700px'}}>
            <Typography style={{color:'lightgrey',fontSize:'21px',fontWeight:'500',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>Legions of War
The 21st century paved the way for the emergence of power humankind never imagined possible. Driven by pure
greed and lust for ultimate governance, the carefully thought out plan to unseat every nation in dominion led to
the death of millions of people, first through a pandemic, then followed by the most terrifying war known to men,
the ‘Adimiro’s Plague.’</Typography>
      <Accordion className='col' style={{backgroundColor:'transparent',color:'#fff',width:'700px'}}>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}
        >
          <Typography className='readmore' style={{fontFamily:'cursive',fontSize:'30px',textAlign:'center',marginLeft:'35%',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>Read More </Typography><ArrowDropDownIcon style={{fontSize:'25px',color:'aqua',marginTop:'10px'}} className="arrowkey" />
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:'lightgrey',fontSize:'17px',fontWeight:'500',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>.
          Six centuries later, the same man that drove planet earth into utter chaos is now revered and worshiped like a
celestial by his kind and sits at the top of the food chain.
<Typography style={{color:'lightgrey',fontSize:'17px',fontWeight:'500'}}>
During a time in his six centuries-long reign, the ‘Great Knight Adimiro’ discovered the greatest power a mere
mortal can have- the Elixir. It resulted from endless experimentation on time travel and the quest for immortality.
However, only the Great Knight can harness the power of the Elixir to its full potential, thus making him ‘The
Undead.’ Elixir is a time-bending portal that enables humans to traverse galaxies, steal knowledge, and conquer
through warfare. And because of this power, humans have been the most feared race in the entire universe as
they extended their realm called ‘The Empirious Dominion.’
</Typography><br></br>
<Typography style={{color:'lightgrey',fontSize:'17px',fontWeight:'500',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>
The Great Knight fathered many children in his lifetime, all biologically engineered, born, and bred by his finest
harem. They are equipped with superhuman powers and are unique in their own way. These sons, dubbed the
‘Golden Horde,’ are now leading their battleship across the galaxy, conquering worlds, bringing honor to the
human race and exaltation to the Great Knight name. That is until a coup ensued in the year 2666- the
‘Blasphemy of the Damned.’
</Typography><br></br>
<Typography style={{color:'lightgrey',fontSize:'17px',fontWeight:'500',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>
Like everything in the world, nothing is created into perfection. Flaws determine change and advancement. And
this imperfection is what catapults many of the Great Knight children to go against him and try to kill their own
father to take reign. It is believed that their mind was hazed every time they entered the Elixir. This weakened link
in the wires of their brains left them vulnerable to vultures, often mad and cunning alien races, and implants illicit
pieces of information to corrupt their minds. The schemes worked, for they were able to pollute many of the Great
Knight descendants to do their bidding. These fallen sons fight for the ultimate seat of power, and they will go to
great lengths to fulfill their destiny. Now more than ever, the human race must stand together to fight the common
enemy.
</Typography><br></br>
<Typography style={{color:'lightgrey',fontSize:'17px',fontWeight:'500',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>
Due to the recent events, the Great Knight fortified his castle defenses. He called his remaining loyal offsprings
‘Omega Knights’ an elite group of loyals in charge of protecting humanity across the galaxy. In their midst, they
find themselves warring against their denounced brethren, now called the ‘Alpha Horde.’ And while some of the
Omega Knights still hope to bring back their fallen brothers into the Golden Horde once more, they must confront
and kill every alien race controlling them. That is at least until time decides they’ve lost the cause- and time, they
discovered, is their greatest adversary.
</Typography><br></br>
<Typography style={{color:'lightgrey',fontSize:'17px',fontWeight:'500',fontFamily: 'Montserrat,ui-serif,Georgia,Cambria,Times New Roman,Times,serif'}}>
For now, they have no choice but to dance to the music of death and war
</Typography>
         </Typography>
        </AccordionDetails>
      </Accordion>
 
  
            </div>
        </div>
    )
}
export default Legend;