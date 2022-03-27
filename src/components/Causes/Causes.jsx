import React, { useState } from "react";

import CauseList from "./CauseList/CauseList";
import Button from "../UI/Button/Button";

import classes from "./Causes.module.css";

const Cause = () => {

    const [modalDisplay, setModalDisplay] = useState(false);

    return (
        <div className="causes">
            <div className={classes["add-cause-wrapper"]}>
                <Button variant="contained" type="link" path="/causes-form"> + Add Cause </Button>
            </div>
            <CauseList />
        </div>
    );
};

export default Cause;
