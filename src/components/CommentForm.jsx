import React, { useState } from 'react'

export default ({ addComment }) => {
  // console.log(addComment)
  // console.log(typeof addComment)

  const [comment, setComment] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    addComment(comment)
    setComment('')
  }
  return (
    <div className='row'id='comment-anchor'>
      <h3>Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          value={comment}
          onChange={(evt) => setComment(evt.target.value)}
        />
        <button type='submit' className='btn btn-secondary mt-2'>Submit</button>
      </form>
    </div>
  )
}
