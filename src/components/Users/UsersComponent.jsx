import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/users";
import Card from "../UI/Card/CardComponent";

import classes from './Users.module.css';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <Card className={classes.users}>
            {users.loading && <p>Loading...</p>}
            <ul>
                {users.length > 0  && users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul> 
            {error && !loading && <p>{error}</p>}
        </Card>
    );
}

export default Users;