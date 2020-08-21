/* the value in the props of the StateContext.Provider we have the props name the value where we have used the useReducer which will takes the two parameter one is the reducer and the sencond one is the initialState and defining the reducer and the initialState in these files

where the initial state of the data layer has the user null */

/* initial state */
export const initialState = {
  user: null,
};

/* actions  */
export const actionTypes = {
  SET_USER: "SET_USER",
};

/* reducers */

const reducer = (state, action) => {
  console.log(
    "value from the dispacth action.type",
    action.type,
    "the value of the action.user",
    action.user
  );

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
