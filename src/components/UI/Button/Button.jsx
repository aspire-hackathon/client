import * as React from 'react';
import Button from '@mui/material/Button';

const Buttons = (props) => {

    //variant can be => text/outlined/contained
    return (
        <Button variant={props.type} sx={{ bgcolor: (props.type === "contained" ? "#dd4343" : '') }}>{props.children}</Button>
    );
}

export default Buttons;