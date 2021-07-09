import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unshift, shift, push, pop, selectArray } from "../redux/arraySlice";

export function MainArray() {
  const selectedArray = useSelector(selectArray);
  const dispatch = useDispatch();
  const displayArray = (arr) => {
    let result = "";
    for (let item of arr) {
      result += `[${item}]`;
    }
    return result;
  };

  return (
    <div>
      <h2>{displayArray(selectedArray)}</h2>
      <input type="text" name="unshift" id="unshift" />
      <button
        onClick={(e) =>
          dispatch(unshift(document.getElementById("unshift").value))
        }
      >
        unshift
      </button>
      <input type="text" name="shift" id="shift" />
      <button onClick={() => dispatch(shift())}>shift</button>
      <input type="text" name="push" id="push" />
      <button
        onClick={(e) => dispatch(push(document.getElementById("push").value))}
      >
        push
      </button>
      <input type="text" name="pop" id="pop" />
      <button onClick={() => dispatch(pop())}>pop</button>
    </div>
  );
}
