import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCauses } from "../../../redux/actions/causes";

import Cause from '../Cause/Cause'

import classes from './CauseList.module.css';

const CauseList = (props) => {

    const dispatch = useDispatch();
    const causes = useSelector(state => state.causes.causes);
    const loading = useSelector(state => state.causes.loading);
    const error = useSelector(state => state.causes.error);

    useEffect(() => {
        dispatch(getCauses());
    }, []);

    return (
        <div>
            {causes.length > 0 &&
                <ul className={classes.causeList}>
                    {causes.map((cause) =>  <li key={cause._id}>
                            <Cause cause={cause} /></li>
                    )}
                </ul>}
        </div>
    )
};

export default CauseList;