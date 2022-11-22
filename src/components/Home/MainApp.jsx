import React from 'react'
import { Link, Routes, Route } from "react-router-dom";
import { AboutMe } from '../AboutMe/AboutMe';
import { Contact } from '../Contact/Contact';
import { Home } from '../Inicio/Home';
//import { Login } from '../Login/Login';
import { NavBar } from './NavLink';
import '../Inicio/styleHome.css'
import '../Inicio/styleProyectos.css'
import '../Inicio/styleOla.css';
import { Footer } from './Footer';


export const MainApp = () => {

	return (
		<>




			<NavBar />

			<Routes>

				<Route path='/' element={<Home />} />
				<Route path='/AboutMe' element={<AboutMe />} />
				<Route path='/Videos' element={<Contact />} />
			</Routes>

			
		</>
	)
}
