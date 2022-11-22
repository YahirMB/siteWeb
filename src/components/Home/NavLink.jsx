import React from 'react'
import { Link,NavLink } from 'react-router-dom'


export const NavBar = () => {

	const showMenu = () =>{
		const menu = document.querySelector('.nav-menu');
		menu.classList.toggle('nav-menu-visible');
	}
	
	return (
		<header className="header">
			<nav className="nav">
				<Link to='/' className="logo">Alexander Manjarrez</Link>
				<button onClick={showMenu} className="toggle"><i className="bi bi-list"></i></button>
				<ul className="nav-menu">
				<li className="nav-menu-item ">
						<NavLink onClick={showMenu} to='/' className='nav-menu-link'>Inicio</NavLink>
					</li>
					<li className="nav-menu-item ">
						<NavLink onClick={showMenu} to='/AboutMe' className={({isActive}) => `nav-menu-link ${isActive ? 'nav-menu-link-active': ''} `}>Acerca de mi</NavLink>
					</li>
					<li className="nav-menu-item ">
						<NavLink onClick={showMenu} to='/Videos' className={({isActive}) => `nav-menu-link ${isActive ? 'nav-menu-link-active': ''} `}>Videos</NavLink>
					</li>
		
				</ul>
			</nav>
		</header>


	)
}
