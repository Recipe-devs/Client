import React from 'react'
import { Link } from 'react-router-dom'
import FavouriteButton from './FavouriteButton'
import RatingsSection from './RatingsSection'
import { HashLink } from 'react-router-hash-link'

export default ({ recipe }) => {

  return (
    <div className='container w-75 mb-3 mt-5'>
      <div className='row align-items-center justify-content-center'>

        {/* Image column */}
        <div className='text-center col-md-12 col-lg-6 p-3'>
          <img src={recipe.image || 'https://placekitten.com/200/300'} className='img-fluid' />
        </div>

        {/* Column with Recipe Name, Author Name, Rating, and Favourite button */}
        <div className='text-center col-md-12 col-lg-6'>
            <h1>{recipe.name}</h1>
          <div className='row row-cols-2'>
            <div className='col p-3'>
              <h4>{recipe.author.username}</h4>
            </div>
            <div className='col p-3'>
              <h4><HashLink to='#comment-anchor' className='text-decoration-none'>Comments</HashLink></h4>
            </div>
            <div className='col p-3'>
              <h4>Rating</h4>
              <RatingsSection recipeRating={recipe.rating_list} recipe={recipe} />
            </div>
            <div className='col p-3'>
              <FavouriteButton recipe={recipe} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}