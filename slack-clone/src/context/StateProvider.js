import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
/* 
children is the entire app which is wrapped by the statecontext.provider which is the data layer or the state management 

-- push the login data into the data layer which is the StateContext.Provider and then we can pull it wherever we are inside any of the component*/

/* to make these work we should use the props and the value is the props and which is some kind of the reducer and the some kind of the initialstate.

Reducer==>essential listen to the any kind of the actions to shoots at the data layer
and these case the reducer get's the  action to set the user and gives the user to the data layer


initialState==> it refers to the what the data layer looks at the initail stage befor we passed the value in it and do any thing */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
/* our custom hooks to access the data from the datalayer which is StateContext */

export const useStateValue = () => useContext(StateContext);
