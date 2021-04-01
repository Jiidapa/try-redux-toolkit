import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inclement, decrement, selectCount } from "./CounterSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <div>
      My Counter
      <div>
        <button onClick={() => dispatch(inclement())}>Increment counter</button>
      </div>
      <div>{count}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement counter</button>
      </div>
    </div>
  );
}
