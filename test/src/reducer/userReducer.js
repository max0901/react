import React, { useReducer } from "react";

export const Context = React.createContext();

const initialState = [
  { id: 1, name: "lee" },
  { id: 2, name: "jee" },
  { id: 3, name: "mee" },
];

export const add = "ADD";
export const remove = "DELETE";

const reducer = (state, action) => {
  switch (action.type) {
    case add:
      return [...state, { id: action.id, name: action.name }];
    case remove:
      return state.filter((v) => v.id !== action.id);
    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default ContextProvider;
