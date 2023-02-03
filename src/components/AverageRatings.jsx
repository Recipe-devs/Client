import React, { useState, useEffect } from 'react'

export default ({ recipeList }) => {

    // const [avRating, setAvRating] = useState([])

    // useEffect(() => {
    //     async function getRecipeList() {
    //       const res = await fetch(`127.0.0.1:8080/averagerating`)
    //       console.log(res)
    //       const data = await res.json()
    //       setAvRating(res) 
    //     }
    //     getRecipeList()
    //   }, [])

    // Return object with id:average objects
    const recipeAverages = () => {
        let result = []
        for (let recipe of recipeList) {
            let total = 0
            let count = 0
            for (let ratings of recipe.rating_list) {
                total += ratings.rating
                count ++
            }
            let average = total / count
            result.push({
                id: recipe.id,
                average: average})
            // result[recipe.id] = {[recipe.id]: average}
            // result[recipe.id] = average
        }
        // console.log(result)
        console.log(Object.values(result))
        return result
    }

    const randomFeature = () => {
        let average = recipeAverages()
        let filtered = Object.fromEntries(Object.entries(average).filter(([key, value]) => value > 4.0))
        // console.log(filtered)
        var item = filtered[Math.floor(Math.random()*filtered.length)]
        // console.log(item)
        return item
    }

    // let average = recipeAverages()
    let result = randomFeature()
    // console.log(result)

    // let result = average[10]
    // console.log(average[10])

  return (
    <div className="form-group m-3">
        <h1>Favs</h1>
        {/* <p>{result}</p> */}
    </div>
  )
}


import React from 'react'
import { Link } from 'react-router-dom'

const ProfileRatings = ({loggedInUser, recipeList}) => {


	// adds the user's ratings to the recipe object
	for (let i = 0; i < recipeList.length; i++) {
		let rating = recipeList[i].rating_list
		recipeList[i].rating = rating ? rating.rating : null
	}
	//loop through object if ratings is not null, add to ratings object with recipe name and id
	const ratings = Object.values(recipeList).map((recipe, index) => {
		if (recipe.rating !== null) {
			return (
				<div className="container text-center" key={index}>
					<div className="container" key={index}>
						<div className="card mb-3">
							<div className="row g-0">
								<div className="col-md-2">
									<Link to={`/recipe/${recipe.id}`}>
										<img src={recipe.image} className="img-fluid rounded-start my-3" alt={recipe.name} />
									</Link>
								</div>
								<div className="col-md-8 text-start">
										<div className="card-body">
											<Link to={`/recipe/${recipe.id}`}>
												<h4>{recipe.name}</h4>
												<h4>Rated: {recipe.rating}★️️️️️</h4>
											</Link>
									</div>
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
		<div id="ratingsAnchor" style={{padding: "30px"}}></div>
	  	<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
			<h1>Ratings</h1>
			{ratings}
		</div>
	</>
)}

export default ProfileRatings



	//highest rated recipe for featured recipe and image url
	// let highest_average_rating = 0;
	// let highest_rated_recipe = ""
	// for (let i = 0; i < recipeList.length; i++) {
	// 	let total_rating = 0
	// for (let j = 0; j < recipeList[i].rating_list.length; j++) {
	// 	total_rating += recipeList[i].rating_list[j].rating
	// }
	// let average_rating = total_rating / recipeList[i].rating_list.length
	// if (average_rating > highest_average_rating) {
	// 	highest_average_rating = average_rating
	// 	highest_rated_recipe = recipeList[i]
	// }
	// }


    // const averageRating = Math.round(recipeRating.reduce((acc, curr) => acc + curr.rating, 0) / recipeRating.length)