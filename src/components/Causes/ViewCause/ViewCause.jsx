import React from 'react';

import Card from "../../UI/Card/CardComponent";
import Button from '../../UI/Button/Button'
import { Link ,useParams} from 'react-router-dom';
import  axios  from 'axios';
import classes from './ViewCause.module.css';

const ViewCause = (props) => {
    let param = useParams();
    React.useEffect(() => {
     console.log("sss",param.id);
     axios.get(`http://a42f5461f582449a29fdc102149e9fd5-390825282.us-east-1.elb.amazonaws.com/api/cause/byid/623ece840d8b74d3ecf5d9d1`).then((data)=>{
         console.log("data"+data);
     })
    }, []);

return(
    <div>View</div>
)
    // const { causeOwner, id, title, aimDescription, causeStatus, volunteers, causeImage, address } = props.cause;

    // const COMPLETED = {text: "Completed", className: 'completed'};
    // const INPROGRESS = {text: "In Progress", className: 'progress'};

    // const getStatus = () => +causeStatus === 1 ? COMPLETED : INPROGRESS;

    // return (
        // <div className={classes.cause}>
        //     <div className={classes.image}>
        //         <img src={causeImage} alt="Cause Image" />
        //     </div>
        //     <div className={classes.details}>
        //         <h3 className={classes.title}>{title}</h3>
        //         <div className={classes.desc}><b>Description: </b> {aimDescription}</div>
        //         <div className={classes.location}><b>Where: </b> {address.district}, {address.state}</div>
        //         <div className={classes.volunteer}><b>Volunteers Applied: </b> {volunteers.length}</div>
        //         <div className={classes.cardFooter}>
        //             <div className={` ${classes.status} ${classes[getStatus().className]} `}>{ getStatus().text }</div>
        //             <Link to={{ 
        //                 pathname: "/causes", 
        //                 cause:{props} 
        //                 }}>
        //                 View cause
        //                 </Link>
        //             {/* <Button variant="contained" type="link" path={`/causes/${id}`} className={classes.button}>View Cause</Button> */}
        //         </div>
        //     </div>
        // </div>
    // )
};

export default ViewCause;