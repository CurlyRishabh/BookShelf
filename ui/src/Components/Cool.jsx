import React from "react";
import {useContext} from "react";
import Context from "../Context";

export default function Cool() {
	const {myValue, setMyValue} = useContext(Context);
	return (
		<>
			<p className="">Value from Context: {myValue}</p>
			<div className="">Shelf</div>
			<button className="h-12 bg-rose-600" onClick={() => setMyValue((prev) => prev + 1)}>
				Click
			</button>
		</>
	);
}
