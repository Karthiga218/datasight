import registeredUserReducer from "./users/reducers";
import unregisteredUserReducer from "./unregistereduser/reducers";
import projectMemberships from "./projectmembership/reducers";

const reducers = { 
    registeredUserReducer, 
    unregisteredUserReducer,
    projectMemberships
};


export default reducers;