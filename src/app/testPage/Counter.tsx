import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { decrement, increment } from "@/redux/slices/counterReducer";
import { RootState } from "@/redux/store";
import React from "react";

const Counter = () => {
  const { value } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>{value}</p>
      <button
        className="w-[40px] h-[40px]"
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        className="w-[40px] h-[40px]"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
