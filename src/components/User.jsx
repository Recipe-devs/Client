import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import RecipeContext from '../context'
import ProfileFavourites from './ProfileFavourites'
import ProfileRatings from './ProfileRatings'
import ProfileComments from './ProfileComments'
import ProfileRecipes from './ProfileRecipes'
import { HashLink } from 'react-router-hash-link'
import LoadingPage from './LoadingPage'

const User = () => {
	useEffect(() => { window.scrollTo(0, 0) }, [])

	const { loggedInUser, setLoggedInUser, recipeList, setRecipeList } = useContext(RecipeContext)

	if (recipeList.length === 0) {
		return (
		  <LoadingPage />
		)
	}

	return (
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5" >

			<nav className="navbar user-home">
				<form className="container-fluid justify-content-center">
					<HashLink to="#favouritesAnchor"> <button className="btn btn-success m-1 btn-sm" type="button" >Favourites</button> </HashLink>
					<HashLink to="#recipesAnchor"> <button className="btn btn-success m-1 btn-sm" type="button" >Recipes</button> </HashLink>
					<HashLink to="#commentsAnchor"> <button className="btn btn-success mx-1 btn-sm" type="button" >Comments</button> </HashLink>
					<HashLink to="#ratingsAnchor"> <button className="btn btn-success mx-1 btn-sm" type="button" >Ratings</button> </HashLink>
				</form>
			</nav>
			<div style={{paddingTop: "40px"}}></div>
			<h1>Welcome {loggedInUser.username}</h1>
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

