import { combineReducers } from "redux";
import users from './users';
import causes from './causes'

const rootReducer = combineReducers({
    users: users,
    causes: causes
});


export default rootReducer;