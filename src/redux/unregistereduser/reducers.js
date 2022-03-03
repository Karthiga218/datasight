import actions from "./actions";

const initialState = {
    unregisteredUsers : []
};

const unregisteredUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ALL_UNREGISTEREDUSER:
      return {
        ...state,
        unregisteredUsers: action.payload
      }
    default:
      return state;
  }
};

export default unregisteredUserReducer;