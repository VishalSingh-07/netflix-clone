import React, { useEffect } from "react"
import "./App.css"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import ProfileScreen from "./screens/ProfileScreen"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { auth } from "./firebase"
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from "./features/userSlice"
function App() {
	// const user = null;
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// Logged In
				// console.log("User is loggedIn")
				// console.log(userAuth)
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				)
			} else {
				// Logged Out
				dispatch(logout())
			}
		})
		return unsubscribe
	}, [dispatch])
	return (
		<div className="App">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Routes>
						<Route path="/profile" element={<ProfileScreen />}></Route>
						<Route path="/" element={<HomeScreen />}></Route>
					</Routes>
				)}
			</Router>
		</div>
	)
}

export default App
