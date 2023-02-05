import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import RecipeContext from '../context'
import LoadingPage from './LoadingPage'

export default () => {

    const { recipeList } = useContext(RecipeContext)

    // Loading section whilst recipeList is still blank
	if (recipeList.length === 0) {
        return (<LoadingPage />)
      }

    // Add averageRating properties to all recipes
    const updatedRecipes = recipeList.map((recipe) => ({
        ...recipe,
        averageRating: recipe.rating_list.reduce((acc, curr) => acc + curr.rating, 0) / recipe.rating_list.length
    }))

    // Get a random recipe with an average rating of 4.2 or higher
    function getFeatureRecipe(recipes) {
        const featureRecipe = recipes.filter((recipe) => recipe.averageRating > 4.2)
        return featureRecipe[Math.floor(Math.random()*featureRecipe.length)]
    }

    let featureRecipe = getFeatureRecipe(updatedRecipes)

  return (
    <>
        <div className="row d-flex align-items-center my-5 mx-1 featured-recipe">
            <div className="col-lg-6 ">
                <Link to={`/recipe/${featureRecipe.id}`}>
                <img src={featureRecipe.image} className="img-fluid rounded featured-img" alt="place holder" />
                </Link>
                </div>
                <div className="col-lg-6">
                    <Link className="featured-recipe-link" to={`/recipe/${featureRecipe.id}`}>
                        <div>
                        <p className="text-center h1 my-4">Featured Recipe</p>
                        <p className="h4">{featureRecipe.name}</p>
                        <p>{featureRecipe.description}</p>
                        </div>
                </Link>					
            </div>
        </div>
    </>
  )
}


