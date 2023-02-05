import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import RecipeContext from '../context'

const ProfileFavourites = () => {

	const { loggedInUser, setLoggedInUser, recipeList } = useContext(RecipeContext)

	const extractIds = (favourites) => {
    	return favourites.map((recipe) => recipe._id);
  	}

  const handleClick = (recipeId) => {
    const updatedFavourites = loggedInUser.favourites.filter((recipe) => recipe.id !== recipeId)
    setLoggedInUser({ ...loggedInUser, favourites: updatedFavourites })
    sendData(extractIds(updatedFavourites))
	alert("Removed From Favourites!")
  }

  const sendData = async (favourites) => {
    try {
      const response = await fetch(`http://server-production-6a0e.up.railway.app/users/${loggedInUser._id}/favourites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
          "favourites": favourites
          }
          )
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
 
	//display favourites
	const favourites = loggedInUser.favourites && Array.isArray(loggedInUser.favourites) ? loggedInUser.favourites.map((recipe, index) => {		  
		return (
			<div className="container" key={index}>
				<div className="card mb-3">
					<div className="row g-0">
						<div className="col-md-2">
							<Link className="card-link" to={`/recipe/${recipe.id}`}>
							<img src={recipe.image} className="img-fluid rounded-start my-3 " alt={recipe.name} />
							</Link>
						</div>
						<div className="col-md-8 text-start">
								<div className="card-body">
										<Link className="card-link" to={`/recipe/${recipe.id}`}>
											<h4>{recipe.name}</h4>
											<p>{recipe.description}</p>
										</Link>
									<button type="button" className="btn btn-danger" onClick={() => handleClick(recipe.id)}>Remove</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	})
	: ''

  	return (
	<>
		<div id="favouritesAnchor" style={{padding: "20px"}}></div>
		<div className="h-100 d-flex flex-column align-items-center justify-content-center" >
			<h1>Favourites</h1>
			{favourites}
		</div>
	</>
)}

export default ProfileFavourites