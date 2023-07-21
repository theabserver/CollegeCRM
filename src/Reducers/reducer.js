import { GET_USER, USER_LOADED } from "../Actions/types.js";

const initialState = {
  user: {},
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, loading: true };
    case USER_LOADED:
      return { ...state, user: action.user, loading: false };
    default:
      return state;
  }
};
export default rootReducer;
