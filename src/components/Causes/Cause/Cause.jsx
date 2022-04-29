import React from 'react';

import Card from "../../UI/Card/CardComponent";
import Button from '../../UI/Button/Button'
// import { Link, Navigate, Outlet } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Cause.module.css';
import tempImg from '../../../assets/images/HH.png';
import {getCauseById} from  '../../../redux/actions/causes';

const Cause = (props) => {

    const { _id, title, aimDescription, causeStatus, volunteers, causeImage, address } = props.cause;
    const currentId = _id;

    const COMPLETED = {text: "Completed", className: 'completed'};
    const INPROGRESS = {text: "In Progress", className: 'progress'};

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getStatus = () => +causeStatus === 1 ? COMPLETED : INPROGRESS;
    const viewCauseClick = () => {
        console.log(currentId);
        dispatch(getCauseById(currentId));
        navigate(`/causes/${currentId}`);
    }

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
                    <Button variant="contained" onClick={viewCauseClick} className={classes.button}>View Cause</Button>
                </div>
            </div>
        </Card>
    )
};

export default Cause;