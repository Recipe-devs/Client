import React, { useState, useContext } from 'react'
import CommentsDisplay from './CommentsDisplay'
import CommentForm from './CommentForm'
import RecipeContext from '../context'

export default ({ recipe }) => {
  const { loggedInUser, recipeList, setRecipeList } = useContext(RecipeContext)
  const recipeComments = recipe.comments

  const [comments, setComments] = useState(recipeComments)

  const addComment = (newComment) => {
    const newComments = [...comments, { username: loggedInUser, date: new Date(), comment: newComment }]
    newComments.sort((a, b) => new Date(b.date) - new Date(a.date))
    setComments(newComments)
    updateComments(newComment)
    updateState(newComments)
  }

  const updateComments = async (newComment) => {
    const updatedComments = [...recipe.comments, {username: loggedInUser, date: new Date(), comment: newComment}]
    const sortedComments = updatedComments.sort((a, b) => new Date(b.date) - new Date(a.date))

    const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/edit/${recipe._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comments: sortedComments
        })
      })
    // const data = await res.json()
    // console.log(data)
  }

  function updateState(newComments) {
    const newRecipeList = JSON.parse(JSON.stringify(recipeList))
    const indexToEdit = newRecipeList.findIndex((sub) => sub.id == recipe.id)
    const oldRecipe = newRecipeList[indexToEdit]
    oldRecipe.comments = newComments
    setRecipeList(newRecipeList)
  }
  

  return (
    <div className='container row justify-content-md-center mx-auto'>
      <div className='col-12 col-lg-10'>
        <CommentForm addComment={addComment} />
        <CommentsDisplay comments={comments} />
      </div>
    </div>
  )
}