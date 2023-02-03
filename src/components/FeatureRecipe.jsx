import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export default ({ recipeList, setRecipeList }) => {
    //highest rated recipe for featured recipe and image url
	let highest_rated_recipe = recipeList[2]

    console.log(highest_rated_recipe)
    const featureRecipeList = JSON.parse(JSON.stringify(recipeList))
    let feature_recipe = ""
    for (let i = 0; i < featureRecipeList.length; i++) {
        let total_rating = 0
        for (let j = 0; j < recipeList[i].rating_list.length; j++) {
            total_rating += recipeList[i].rating_list[j].rating
        }
        let average_rating = total_rating / recipeList[i].rating_list.length
        featureRecipeList[i].average = average_rating
    }
    
    const featureOptions = featureRecipeList.filter((recipe) => recipe.average > 4.2)

    let featureRecipe = featureOptions[Math.floor(Math.random()*featureOptions.length)]
    // console.log(recipeList)
    // console.log(featureRecipe) }


  return (
    <>
        {/* featured recipe */}
        <div className="row d-flex align-items-center m-5 featured-recipe">
            <div className="col-lg-6 ">
                <Link to={`/recipe/${highest_rated_recipe.id}`}>
                <img src={highest_rated_recipe.image} className="img-fluid rounded featured-img" alt="place holder" />
                </Link>
                </div>
                <div className="col-lg-6">
                    <Link className="featured-recipe-link" to={`/recipe/${highest_rated_recipe.id}`}>
                        <div>
                        <p className="text-center h1 my-4">Featured Recipe</p>
                        <p className="h4">{highest_rated_recipe.name}</p>
                        <p>{highest_rated_recipe.description}</p>
                        </div>
                </Link>					
            </div>
        </div>
    </>
  )
}


