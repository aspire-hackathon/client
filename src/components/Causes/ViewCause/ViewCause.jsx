import React, { useState } from 'react';
import {Card,Box,CardContent,CardMedia,Typography,CardActions} from '@mui/material';
import Button from '../../UI/Button/Button'
import { Link ,useParams} from 'react-router-dom';
import  axios  from 'axios';
import classes from './ViewCause.module.css';
import { display, typography } from '@mui/system';
import tempImg from '../../../assets/images/HH.png';

const ViewCause = (props) => {
    const [causeData,setCauseData] = useState();
    let param = useParams();
    React.useEffect(() => {
     console.log("sss",param.id);
     axios.get(`http://a42f5461f582449a29fdc102149e9fd5-390825282.us-east-1.elb.amazonaws.com/api/cause/byid/623ece840d8b74d3ecf5d9d1`).then(({data})=>{
         setCauseData(data);
     })
    }, []);

return(
    <Box component="div" display="flex" alignContent="center"  justifyContent="center" >
    <Card sx={{width:'80%',boxShadow:'none',display:'flex'}}>
      <CardContent sx={{flex:'2'}}>
      <Typography variant="h4" component="h4" sx={{padding:'10px 15px'}}>{causeData?.title}</Typography>
      <CardMedia sx={{padding:'10px 15px'}}
        component="img"
        height="250"
        image={tempImg}
        alt='Healping hands'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {causeData?.aimDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Typography variant='h6' component='span'>Volunteers : </Typography>
        {causeData?.volunteers.map((item,i)=>(
            <Typography component="span">{item}{i < causeData?.volunteers.length-1 && ", "}</Typography>
        ))}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Typography variant='h6' component='span'>Address : </Typography>
        <Typography component='span'>{causeData?.address?.district} , </Typography>
        <Typography component='span'> {causeData?.address?.state} , </Typography>
        <Typography component='span'>{causeData?.address?.pincode}</Typography>
        </Typography>
      </CardContent>
      </CardContent>
      <CardActions sx={{display:'flex', flexDirection:'column', gap:'40px', justifyContent:'center'}}>
        <Button variant="contained" sx={{mt: 3,mb: 2, bgcolor: "#dd4343",":hover": {bgcolor: "#ac3434",},width:'135px'}} > Join the Cause</Button>
        <Button variant="contained" sx={{mt: 3,mb: 2, bgcolor: "#dd4343",":hover": {bgcolor: "#ac3434",},width:'135px'}} > Donate</Button>
      </CardActions>
    </Card>
    </Box>
    )
};

export default ViewCause;