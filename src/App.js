import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from  "react-router-dom" ;
import Addnew from "./components/Addnew";


function App() {
  return (
    <>
      	<BrowserRouter>
			<Routes>
				<Route path='/' element = {<Home />} />
				<Route path="/Home/Addnew" element = {<Addnew />} />
			</Routes>
		</BrowserRouter>
    </>
  );
}

export default App;
