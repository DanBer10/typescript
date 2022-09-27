import React, { useReducer } from "react";
import { counterReducer, initialState } from "../UseReducerComponent";

const useReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <div>{state.counter}</div>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 10,
          })
        }
      >
        Increment
      </button>
      |
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 5,
          })
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default useReducerComponent;
