import * as React from "react";
import Button from "@mui/material/Button";
import classes from './Button.module.css'

export default (props) => {
    const { children, variant, type, path, className, onClick } = props;

    //variant can be => text/outlined/contained
    
    const routeLink = () => {
        navigate(path, { replace: false });
    }

    if (type === "link") {
        return (
            <Button href={path} variant={variant} className={`${classes[variant]} ${className}`} onClick={routeLink}>{children}</Button>
        );
    } else {
        return (
            <Button variant={variant} className={`${classes[variant]} ${className}`} onClick={onClick}>{children}</Button>
        );
    }
};
