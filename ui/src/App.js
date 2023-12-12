// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Shelf from './Components/Shelf';
import MyProvider from './Provider';
import Cool from './Components/Cool';




function App() {
	const path = window.location.pathname;
	console.log(path);
	return (
		<BrowserRouter basename="/">
			<MyProvider>
				<Routes>
					<MyProvider>
						<Route path="/" element={<Shelf />}></Route>
					</MyProvider>
				</Routes>
			</MyProvider>
		</BrowserRouter>
		// <MyProvider>
		// 	<Shelf/>
		// 	<Cool/>
		// </MyProvider>
	);
}


export default App;
