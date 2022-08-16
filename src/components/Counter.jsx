import React from "react";
import { useCounter } from "../context/Provider";

export default function Counter() {
  const { counter, dispatch } = useCounter();

  const increment = () => dispatch({ type: "add" });
  const decrement = () => dispatch({ type: "sub" });
  const reset = () => dispatch({ type: "reset", payload: 0 });

  return (
    <div>
      <div>
        <h3>Counter :{counter} </h3>
      </div>
      <div>
        <button onClick={() => increment()}>increment +</button>
      </div>
      <div>
        <button onClick={() => decrement()}>decrement -</button>
      </div>
      <div>
        <button onClick={() => reset()}>reset </button>
      </div>
    </div>
  );
}
