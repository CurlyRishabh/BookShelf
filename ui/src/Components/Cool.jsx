import React from "react";
import {useContext} from "react";
import Context from "../Context";

export default function Cool() {
	const {myValue, setMyValue} = useContext(Context);
	return (
		<>
			<p className="bg-slate-600">Value from Context: {myValue}</p>
			<div className="">Shelf</div>
			<button onClick={() => setMyValue((prev) => prev + 1)}>Click</button>
		</>
	);
}
