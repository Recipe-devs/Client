import React, { useState, useContext } from 'react'
import RecipeContext from '../context'

export default ({ recipe }) => {

  const { loggedInUser, setLoggedInUser } = useContext(RecipeContext)

  const [favourite, setFavourite] = useState(
    loggedInUser.favourites.some(fav => fav._id === recipe._id)
  )

  const handleClick = async () => {
    setFavourite(!favourite)
    await updateFavourites()
  }

  const updateFavourites = async () => {
    const newFavourites = favourite ? loggedInUser.favourites.filter(fav => fav._id !== recipe._id) : [...loggedInUser.favourites, recipe]

    const res = await fetch(`https://server-production-6a0e.up.railway.app/users/${loggedInUser._id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ favourites: newFavourites })
    })
    const data = await res.json()
    
    // Update state 
    setLoggedInUser({ ...loggedInUser, favourites: newFavourites })
  }

  return (
    <>
      <button 
        type="button" 
        className={favourite ? "btn btn-success" : "btn btn-danger"} 
        onClick={handleClick} data-bs-toggle="button" 
        autoComplete="off"
      >
        {favourite ? "Added" : "Favourite"}
      </button>
    </>
  )
}
