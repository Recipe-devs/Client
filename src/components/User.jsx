import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import RecipeContext from '../context'
import ProfileFavourites from './ProfileFavourites'
import ProfileRatings from './ProfileRatings'
import ProfileComments from './ProfileComments'
import ProfileRecipes from './ProfileRecipes'
import { HashLink } from 'react-router-hash-link'


const User = () => {
	useEffect(() => { window.scrollTo(0, 0) }, [])

	const { loggedInUser, setLoggedInUser, recipeList, setRecipeList } = useContext(RecipeContext)

	let nav = document.getElementsByClassName("navbar")
	let sticky = nav.offsetTop;
	window.onscroll = function() {sticker()};
	function sticker() {
	if (window.pageYOffset >= sticky) {
		nav.classList.add("sticky")
	} else {
		nav.classList.remove("sticky");
   }
	}


	return (
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
			<h1>Welcome {loggedInUser.username}</h1>

			<nav className="navbar bg-light">
				<form className="container-fluid justify-content-center">
					<HashLink to="#favouritesAnchor"><button className="btn btn-outline-success me-2" type="button" >Favourites</button></HashLink>
					<HashLink to="#recipesAnchor"><button className="btn btn-outline-success me-2" type="button" >Recipes</button></HashLink>
					<HashLink to="#commentsAnchor"><button className="btn btn-outline-success me-2" type="button" >Comments</button></HashLink>
					<HashLink to="#ratingsAnchor"><button className="btn btn-outline-success me-2" type="button" >Ratings</button></HashLink>
				</form>
			</nav>

			<div style={{padding: "20px"}}></div>
			<div className="container text-center">
				<ProfileFavourites />
				<ProfileRecipes />
				<ProfileComments />
				<ProfileRatings />
			</div>
		</div>
	)
}

export default User

