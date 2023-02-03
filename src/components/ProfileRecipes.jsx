import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import RecipeContext from '../context'

const ProfileRecipes = () => {

	const { loggedInUser, recipeList, setRecipeList } = useContext(RecipeContext)

	//on click send delete request to server, remove recipe from recipeList
	const handleClick = (recipeId) => {
		sendData(recipeId)
		setRecipeList(recipeList.filter(recipe => recipe.id !== recipeId))
		alert("Recipe deleted!")
	}

	const sendData = async (recipeId) => {
	try {
		const response = await fetch(`https://server-production-6a0e.up.railway.app/recipes/${recipeId}/`, 
		{
			method: "DELETE",
			headers: {"Content-Type": "application/json"}
		})
		const data = await response
	}
	catch (error) {
		console.error(error)
	}}
 
	const recipes = recipeList.map((recipe, index) => {
		if (recipe.author.username === loggedInUser.username) {
			return (
				<div className="container" key={index}>
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-2">
								<Link to={`/recipe/${recipe.id}`}>
									<img src={recipe.image} className="img-fluid rounded-start my-3"  alt={recipe.name} />
								</Link>
							</div>
							<div className="col-md-8 text-start">
									<div className="card-body">
										<Link to={`/recipe/${recipe.id}`}>
											<h4>{recipe.name}</h4>
											<p>{Object.keys(recipe.comments).length} Comments</p>
											<p>{(recipe.rating_list.reduce((sum, rating) => sum + rating, 0) / recipe.rating_list.length || 0).toFixed(1)} ★️️️️️</p>
										</Link>
										<button type="button" className="btn btn-danger" onClick={() => handleClick(recipe.id)}>Remove</button>
										<Link to={`/recipe/${recipe.id}/edit`}>
											<button type="button" className="btn btn-secondary mx-2">Edit</button>
										</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	})

	return (
	<>
		<div id="recipesAnchor" style={{padding: "30px"}}></div>
	  	<div className="h-100 d-flex flex-column align-items-center justify-content-center">
			<h1>Submitted Recipes</h1>
			{recipes}
		</div>
	</>
)}

export default ProfileRecipes