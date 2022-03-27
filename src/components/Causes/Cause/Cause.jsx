import React from 'react';

import Card from "../../UI/Card/CardComponent";
import Button from '../../UI/Button/Button'
import { Link, Outlet } from 'react-router-dom';
import classes from './Cause.module.css';
import tempImg from '../../../assets/images/HH.png';

const Cause = (props) => {

    const { causeOwner, _id, title, aimDescription, causeStatus, volunteers, causeImage, address } = props.cause;

    const COMPLETED = {text: "Completed", className: 'completed'};
    const INPROGRESS = {text: "In Progress", className: 'progress'};

    const getStatus = () => +causeStatus === 1 ? COMPLETED : INPROGRESS;

    return (
        <Card className={classes.cause}>
            <div className={classes.image}>
                <img src={tempImg} alt="Cause Image" />
            </div>
            <div className={classes.details}>
                <h3 className={classes.title}>{title}</h3>
                <div className={classes.desc}><b>Description: </b> {aimDescription}</div>
                <div className={classes.location}><b>Where: </b> {address.district}, {address.state}</div>
                <div className={classes.volunteer}><b>Volunteers Applied: </b> {volunteers.length}</div>
                <div className={classes.cardFooter}>
                    <div className={` ${classes.status} ${classes[getStatus().className]} `}>{ getStatus().text }</div>
                    <Button variant="contained" type="link" path={`/causes/${_id}`} className={classes.button}>View Cause</Button>
                </div>
            </div>
        </Card>
    )
};

export default Cause;