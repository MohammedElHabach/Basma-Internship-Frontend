import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      props.expanded === "panel" ? (
        <AddIcon sx={{ fontSize: "1.5rem" }} />
      ) : (
        <RemoveIcon />
      )
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    // transform: 'rotate(90deg)',
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ direction: "rtl", maxWidth: "44rem",marginLeft:"1.5rem" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel1" ? (
              <div
                style={{
                  backgroundColor: "red",
                  height: "3rem",
                  marginLeft: "-1rem",
                  borderRadius: "8%",
                }}
              >
                <RemoveIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    paddingTop: "0.5rem",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: "#38bb84",
                  height: "3rem",
                  marginRight: "-1rem",
                  borderRadius: "8%",
                }}
              >
                <AddIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    paddingTop: "0.5rem",
                  }}
                />
              </div>
            )
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography sx={{marginRight:"0.5rem"}}>لوريم إيبسوم هو نص النماذج.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          لوريم إيبسوم هو نص شكلي يُستخدم في صناعات المطابع ودور النشر لتصميم النماذج. لا يزال النص الشكلي لوريم إيبسوم لديه قرون من النص الشكلي الكلاسيكي، وقد وُجد وقت الكتابة في القرون الخمسة عشرة، عندما قام مجهول برصف مقطع من النص اللاتيني بشكل غير تقليدي.
 </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel2" ? (
              <div
                style={{
                  backgroundColor: "red",
                  height: "3rem",
                  marginLeft: "-1rem",
                  borderRadius: "8%",
                }}
              >
                <RemoveIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    paddingTop: "0.5rem",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: "#38bb84",
                  height: "3rem",
                  marginRight: "-1rem",
                  borderRadius: "8%",
                }}
              >
                <AddIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    paddingTop: "0.5rem",
                  }}
                />
              </div>
            )
          }
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography sx={{marginRight:"0.5rem"}}>لوريم إيبسوم هو نص شكلي يُستخدم في</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          لوريم إيبسوم هو نص شكلي يُستخدم في صناعات المطابع ودور النشر لتصميم النماذج. لا يزال النص الشكلي لوريم إيبسوم لديه قرون من النص الشكلي الكلاسيكي، وقد وُجد وقت الكتابة في القرون الخمسة عشرة، عندما قام مجهول برصف مقطع من النص اللاتيني بشكل غير تقليدي.
</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            expanded === "panel3" ? (
              <div
                style={{
                  backgroundColor: "red",
                  height: "3rem",
                  marginLeft: "-1rem",
                  borderRadius: "8%",
                }}
              >
                <RemoveIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    paddingTop: "0.5rem",
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  backgroundColor: "#38bb84",
                  height: "3rem",
                  marginRight: "-1rem",
                  borderRadius: "8%",
                }}
              >
                <AddIcon
                  sx={{
                    fontSize: "2.5rem",
                    color: "white",
                    paddingTop: "0.5rem",
                  }}
                />
              </div>
            )
          }
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography sx={{marginRight:"0.5rem"}}>دور النشر لتصميم النماذج. لا يزال النص الشكلي لوريم </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          لوريم إيبسوم هو نص شكلي يُستخدم في صناعات المطابع ودور النشر لتصميم النماذج. لا يزال النص الشكلي لوريم إيبسوم لديه قرون من النص الشكلي الكلاسيكي، وقد وُجد وقت الكتابة في القرون الخمسة عشرة، عندما قام مجهول برصف مقطع من النص اللاتيني بشكل غير تقليدي.
 </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
