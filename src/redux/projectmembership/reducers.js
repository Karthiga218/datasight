import actions from "./actions";

const initialState = {
    projectMembership : []
};

const projectMemberships = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ALL_PROJECTMEMBERSHIP:
      return {
        ...state,
        projectMembership: action.payload
      }
    default:
      return state;
  }
};

export default projectMemberships;