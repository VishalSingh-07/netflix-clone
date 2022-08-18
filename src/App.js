import React from "react"
import "./App.css"
import HomeScreen from "./HomeScreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<HomeScreen />}></Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
