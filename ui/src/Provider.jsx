// MyProvider.js
import React, {useState} from "react";
import Context from "./Context";

const MyProvider = ({children}) => {
	const [myValue, setMyValue] = useState("Context value");

	return <Context.Provider value={{myValue, setMyValue}}>{children}</Context.Provider>;
};

export default MyProvider;
