import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfileFavourites from './ProfileFavourites'
import ProfileRatings from './ProfileRatings'
import ProfileComments from './ProfileComments'
import ProfileRecipes from './ProfileRecipes'
import { HashLink } from 'react-router-hash-link'


const User = ({ loggedInUser, setLoggedInUser, recipeList, setRecipeList}) => {
	useEffect(() => { window.scrollTo(0, 0) }, [])

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
		<div className="container text-center" style= {{marginTop:"100px"}}>
			<h1>Welcome {loggedInUser.username}</h1>

			<nav className="navbar bg-light">
				<form className="container-fluid justify-content-center">
					<HashLink to="#commentsAnchor"><button className="btn btn-outline-success me-2" type="button" >Comments</button></HashLink>
					<HashLink to="#recipesAnchor"><button className="btn btn-outline-success me-2" type="button" >Recipes</button></HashLink>
					<HashLink to="#ratingsAnchor"><button className="btn btn-outline-success me-2" type="button" >Ratings</button></HashLink>
					<HashLink to="#favouritesAnchor"><button className="btn btn-outline-success me-2" type="button" >Favourites</button></HashLink>
				</form>
			</nav>



			<div id="commentsAnchor" style={{padding: "20px"}}></div>
			<div className="container text-center">
				<ProfileComments />
				<ProfileRecipes />
				<ProfileRatings />
				<ProfileFavourites loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
			</div>
		</div>
	)
}

export default User

