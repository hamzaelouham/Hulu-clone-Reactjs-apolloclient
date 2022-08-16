import React, { useContext, createContext, useReducer } from "react";

const CounterContext = createContext();

const initialState = {
  counter: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        counter: state.counter + 1,
      };
    case "sub":
      return {
        counter: state.counter - 1,
      };
    case "reset":
      return {
        counter: action.payload,
      };
  }
};

export const useCounter = () => {
  const {
    state: { counter },
    dispatch,
  } = useContext(CounterContext);

  return {
    counter,
    dispatch,
  };
};

export default function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}
