import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCauses } from "../../../redux/actions/causes";

import Cause from '../Cause/Cause'

import classes from './CauseList.module.css';

//Temp
import causeSample from '../causesSample.js'

const CauseList = (props) => {

    const causes = causeSample;

    const dispatch = useDispatch();
    const cause = useSelector(state => state.causes.causes);
    const loading = useSelector(state => state.causes.loading);
    const error = useSelector(state => state.causes.error);

    useEffect(() => {
        dispatch(getCauses());
    }, []);

    console.log(causes);
    return (
        <div>
            {causes.length > 0 &&
                <ul className={classes.causeList}>
                    {causes.map((cause) => (
                        <li key={cause.causeOwner}>
                            <Cause cause={cause} />
                        </li>
                    ))}
                </ul>}
        </div>
    )
};

export default CauseList;


/* 
    title: { type: String, require: true },

aimDescription: { type: String, required : true },

causeImage: { type: String, required : true },

address: { type: AddressSchema, required:true},

causeOwner: {type: Schema.Types.ObjectId, ref: 'user'},

volunteers: {type: [Schema.Types.ObjectId], ref: 'user'},

causeStatus: { type: String, required :false },
*/