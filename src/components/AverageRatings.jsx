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