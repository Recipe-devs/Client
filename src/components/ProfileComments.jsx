import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeContext from '../context'

const ProfileComments = () => {

	const { loggedInUser, recipeList, setRecipeList } = useContext(RecipeContext)

	const [commentList, setCommentList] = useState([])

	//on click remove comment from recipeList
	const handleClick = (commentId, recipeId, commentIndex) => {
		// pop comment from recipeList by recipeId and commentIndex, then update recipeList using setRecipeList
		let comment = recipeList.find((recipe) => recipe._id === recipeId)
		comment.comments.splice(commentIndex, 1)
		//set commentId  and comment to '' of the recipe that matches the recipeId
		comment.commentId = ''
		comment.comment = ''
		setRecipeList(recipeList)
		sendData(commentId, recipeId)
		setCommentList(commentList.filter(recipe => recipe._id !== recipeId))
	}

	const sendData = async (commentId, recipeId) => {
	try {
		const response = await fetch(`https://server-production-6a0e.up.railway.app/recipes/${recipeId}/comments/${commentId}`, 
		{
			method: "DELETE",
			headers: {"Content-Type": "application/json"}
		})
		const data = await response.json()
		console.log(data)
	}
	catch (error) {
		console.error(error)
	}}
 

	//adds the user's comment to the recipe object
	for (let i = 0; i < recipeList.length; i++) {
		let comment = recipeList[i].comments.find((comment) => comment.username.username === loggedInUser.username)
		recipeList[i].comment = comment ? comment.comment : ""
		recipeList[i].commentId = comment ? comment._id : ""
		recipeList[i].commentIndex = comment ? recipeList[i].comments.indexOf(comment) : ""
	}

	//loop through object if ratings is not '', add to ratings object with recipe name and id
	const comments = Object.values(recipeList).map((recipe,index) => {
		if (recipe.comment !== "") {
			return (
				<div className="container" key={index} >
					<div className="card mb-3">
						<div className="row g-0">
							<div className="col-md-2">
								<Link to={`/recipe/${recipe.id}`}>
									<img src={recipe.image} className="img-fluid rounded-start my-3"  alt={recipe.name} />
								</Link>
							</div>
							<div className="col-md-10 text-start">
									<div className="card-body">
											<Link to={`/recipe/${recipe.id}`}>
												<h4>{recipe.name}</h4>
												<p>"{recipe.comment}"</p>
											</Link>
									<button type="button" className="btn btn-danger" onClick={() => handleClick(recipe.commentId, recipe._id, recipe.commentIndex)}>Remove</button>
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
	<div id="commentsAnchor" style={{padding: "30px"}}></div>
	  <div className="h-100 d-flex flex-column align-items-center justify-content-center " >
			<h1>Submitted Comments</h1>
			{comments}
		</div>
	</>
)}

export default ProfileComments