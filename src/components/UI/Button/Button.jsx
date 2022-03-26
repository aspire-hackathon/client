import * as React from "react";
import Button from "@mui/material/Button";
import { Link as RouterLink, MemoryRouter } from "react-router-dom";
import Link from "@mui/material/Link";

const Buttons = (props) => {
    const { children, variant, type, path, className } = props;

    //variant can be => text/outlined/contained
    if (type === "button") {
        return (
            <Button variant={variant} sx={{ bgcolor: type === "contained" ? "#dd4343" : "" }} className={className}>{children}</Button>
        );
    } else {
        return (
            <Button href={path} variant={variant} sx={{ color: type === "contained" ? "#dd4343" : "" }} className={className}>{children}</Button>
        );
    }
};

export default Buttons;
