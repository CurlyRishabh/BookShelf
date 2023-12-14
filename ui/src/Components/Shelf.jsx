import React from "react";
import { useContext } from "react";
import Context from '../Context'
import Cool from "./Cool";

export default function Shelf() {
  const {myValue, setMyValue} = useContext(Context);
  return (
		<>
			<p>Value from Context: {myValue}</p>
			<div className="">Shelf</div>
			<button className="h-8 w-12 bg-gray-600" onClick={() => setMyValue((prev) => prev + 1)}>
				Click
			</button>
      <Cool/>
		</>
  );
}
