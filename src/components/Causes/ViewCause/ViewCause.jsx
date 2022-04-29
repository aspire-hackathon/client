import React from 'react';
import {Card,Box,CardContent,CardMedia,Typography,CardActions} from '@mui/material';
import Button from '../../UI/Button/Button'
import { useParams} from 'react-router-dom';
import {joinCause} from  '../../../redux/actions/causes';
import classes from './ViewCause.module.css';
import {useDispatch,useSelector} from 'react-redux';
import tempImg from '../../../assets/images/HH.png';

const ViewCause = (props) => {
    const dispatch = useDispatch();
    const causeData = useSelector(state => {
      console.log(state);
      return  state.causes.cause
    });
    const loading = useSelector(state => state.causes.loading);
    const error = useSelector(state => state.causes.error);

    let param = useParams();
    React.useEffect(() => {
    //  dispatch(getCauseById(param.id));

    }, []);

    const addVolunteer = () => {
      dispatch(joinCause(param.id,'623ecf370d8b74d3ecf5d9d9'));
    }

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
        <Typography variant='h6' component='span'>Volunteers : {causeData?.volunteers?.length}</Typography>
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
        <Button variant="contained" sx={{mt: 3,mb: 2,color:"#444", bgcolor: "#dd4343",":hover": {bgcolor: "#a8dadc",color:"#FFF"},width:'135px'}} onClick={addVolunteer}> Join the Cause</Button>
        <Button variant="contained" sx={{mt: 3,mb: 2,color:"#444", bgcolor: "#dd4343",":hover": {bgcolor: "#a8dadc",color:"#FFF"},width:'135px'}} > Donate</Button>
      </CardActions>
    </Card>
    </Box>
    )
};

export default ViewCause;