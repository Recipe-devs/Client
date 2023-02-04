import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import RecipeContext from '../context'

export default ({ setSearchInput }) => {

	const { loggedInUser } = useContext(RecipeContext)

	const [isOpen, setIsOpen] = useState(false)
	const handleLinkClick = () => {setIsOpen(false),setSearchInput("")}
	const [navbarClass, setNavbarClass] = useState("")
	const [isLoggedIn, setIsLoggedIn] = useState(true)

	// Listens for scroll event and adds class to navbar if scrolled down 
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 70) {
				setNavbarClass("scrolled")
		  	} 	else {
			setNavbarClass("")
		  	}
		}
		window.addEventListener("scroll", handleScroll)
			return () => {
		  		window.removeEventListener("scroll", handleScroll)
			}
	}, [])

	return (
		<nav className={`navbar  fixed-top  navbar-expand-lg navbar-light bg-light ${navbarClass}`}>
			<div className="container-fluid">
				<Link className="navbar-brand" onClick={() =>setSearchInput("")} to="/">Recipe Realm</Link>
				<button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
					<ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
						<li className="nav-item ">
							<Link className="nav-link" onClick={handleLinkClick} to="/search" >Search</Link>
						</li>
						<li className="nav-item" >
							<Link className="nav-link" onClick={handleLinkClick} to="/recipe/add">Submit Recipe</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" onClick={handleLinkClick} to="/user">{isLoggedIn ? `${loggedInUser.username} Profile` : "Login"}</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}