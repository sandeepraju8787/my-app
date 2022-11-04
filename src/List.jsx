import React from "react";
import { add, sub, mul } from "./Calculator";

function List() {
  return (
    <ol>
      <li>Music + {add(1, 2)}</li>
      <li>Tech {mul(3, 3)}</li>
      <li>Sports {sub(9, 4)}</li>
      <li>Business</li>
      <li>Please subscribe</li>
    </ol>
  );
}

export default List;
