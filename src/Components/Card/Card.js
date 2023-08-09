import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import news4 from "../../assets/news4.png";
const CardComponent = (props) => {
    const fullImageUrl = process.env.REACT_APP_BACKEND_URL+"storage/" + props.pic;

  return (
    <Card sx={{ width: 320, }} className={props.className}>
      <CardMedia component="img" className="card-media" alt="img" height="190" image={fullImageUrl} />
      <CardContent>
        <Typography sx={{textAlign:"right"}} gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button sx={{fontSize:"17px"}} size="small">المزيد</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
