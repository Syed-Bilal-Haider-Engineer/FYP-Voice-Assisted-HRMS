import  React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import FaqAPI from './Faqjs.json';
import arrow from '../../../Images/toparrow.png';
import Slide from "react-reveal/Slide";
import {
    Container,
    Box,
    Typography,
    Button,
    Divider,
    Grid,
  } from "@mui/material";
export default function FaqApp({ index, setIndex, currentFaqId,setCurrentFaqId }) {
    const [expanded, setExpanded] = useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
  return (
    <div>
       
          <Box sx={{ py:10, backgroundColor: "white" }}>
        <Container>
          <Box sx={{ textAlign: "center", py: 2 }}>
            <Typography
              sx={{
                m: 1,
                background: "linear-gradient(#ff9b44 0%, #fc6075 100%)",
                backgroundClip: " text",
                textFillColor: " transparent",
                backgroundClip: "text",
                textFillColor: " transparent",
                textStroke: "2px rgb(245, 245, 245)",
                textTransform: " uppercase",
              }}
            >
             Faq App
            </Typography>

            <Slide left>
              <Typography
                sx={{
                  color: "#28395a",
                  fontSize: { xs: "30px", md: "50px" },
                  fontWeight: 700,
                  py: 1,
                }}
              >
                Frequently Asked Questions
              </Typography>
            </Slide>
          </Box><br/>
     {FaqAPI.map((items,i)=>{
        //  const i=0;
    return <>
      <Accordion key={items.id}
       elevation={0}
       style={{boxShadow:'none'}}
       sx={{mt:1}}
       aria-expanded={`panel-header-${items.id}`}
      expanded={expanded === `panel${i + 1}`}
      onChange={handleChange(`panel${i + 1}`)}>
        <AccordionSummary
          expandIcon={<img src={arrow} alt="" style={{width:'10px',height:'10px'}}/>}
        aria-controls={`panel${i + 1}d-content`}
        id={`panel${i + 1}d-header`}
          onClick={() => {
            if (items.id === currentFaqId) {
              console.log('True');
              setCurrentFaqId(null);
              setIndex(null);
            } else {
              setCurrentFaqId(items.id);
              setIndex(items.id - 1);
            }
          }}
        >
          <Typography sx={{fonrSize:"16px",color:'#28395'}}>{items.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize:'12px'}}>
            {items.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
     })} 
   
    
      </Container>
      </Box>
    </div>
  );
}
