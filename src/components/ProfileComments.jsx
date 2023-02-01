import React from 'react'
import { Link } from 'react-router-dom'

const ProfileComments = ({loggedInUser, recipeList, setRecipeList}) => {

    //on click remove comment from recipeList
    const handleClick = (commentId, recipeId) => {
    sendData(commentId, recipeId)
    setRecipeList(recipeList.filter((recipe) => recipe._id !== recipeId))
    }

    const sendData = async (commentId, recipeId) => {
    try {
        const response = await fetch(`http://localhost:8080/recipes/${recipeId}/comments/${commentId}`, 
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
 
    // adds the user's comment to the recipe object
    for (let i = 0; i < recipeList.length; i++) {
        let comment = recipeList[i].comments.find((comment) => comment.username.username === loggedInUser.username)
        recipeList[i].comment = comment ? comment.comment : null
        recipeList[i].commentId = comment ? comment._id : null
    }

    //loop through object if ratings is not null, add to ratings object with recipe name and id
    const comments = Object.values(recipeList).map((recipe,index) => {
        if (recipe.comment !== null) {
            return (
                <div className="container" key={index}>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={recipe.image} class="img-fluid rounded-start my-3" alt={recipe.name} />
                            </div>
                            <div class="col-md-8 text-start">
                                    <div class="card-body">
                                            <Link to={`/recipe/${recipe.id}`}>
                                                <h4>{recipe.name}</h4>
                                                <p>"{recipe.comment}"</p>
                                            </Link>
                                    <button type="button" className="btn btn-danger" onClick={() => handleClick(recipe.commentId, recipe._id)}>Delete</button>
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
      <div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h1>Subbmited Comments</h1>
            {comments}
        </div>
    </>
)}

export default ProfileComments