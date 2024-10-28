import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionUsage() {
  return (
    <div className='w-[74%] m-auto mb-[237px]'>

      <h2 className='text-[#2662D6] font-black text-[36px] leading-10 mb-[30px] text-center'>ხშირად დასმული შეკითხვები</h2>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            color:"#2662D6", 
            fontWeight:"900",
            border:"1.5px solid #2662D6",
            borderRadius:"30px",
            marginBottom:"24px",
          }}
        >
          რა სტრატეგიებს იყენებთ ვებაპლიკაციის მუშაობის ოპტიმიზაციისთვის?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            color:"#2662D6", 
            fontWeight:"900",
            border:"1.5px solid #2662D6",
            borderRadius:"30px",
            marginBottom:"24px",
          }}
        >
          რა სტრატეგიებს იყენებთ ვებაპლიკაციის მუშაობის ოპტიმიზაციისთვის?
        </AccordionSummary>
        <AccordionDetails >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            color:"#2662D6", 
            fontWeight:"900",
            border:"1.5px solid #2662D6",
            borderRadius:"30px",
            marginBottom:"24px",
          }}
        >
          რა სტრატეგიებს იყენებთ ვებაპლიკაციის მუშაობის ოპტიმიზაციისთვის?
        </AccordionSummary>
        <AccordionDetails >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            color:"#2662D6", 
            fontWeight:"900",
            border:"1.5px solid #2662D6",
            borderRadius:"30px",
            marginBottom:"24px",
          }}
        >
          რა სტრატეგიებს იყენებთ ვებაპლიკაციის მუშაობის ოპტიმიზაციისთვის?
        </AccordionSummary>
        <AccordionDetails >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      
      


  

    </div>
  );
}
