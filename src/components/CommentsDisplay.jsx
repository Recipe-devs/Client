import React from 'react'

export default ({ comments }) => {

  const commentHeader = comments.length === 1 ? '1 Comment' : `${comments.length} Comments`

  const commentsList = comments.map((comment, index) => {
    return (
      <div className='row' key={index}>
        <div className='col-sm-12 col-md-2'>
          <h6>{comment.username.username}</h6>
        </div>
        <div className='col-sm-12 col-md-8'>
          <p>{comment.comment}</p>
        </div>
      </div>
    )
  })

  return (
  <div className='row justify-content-md-center'>
    <div className='col my-3'>
      <h4>{commentHeader}</h4>
    </div>
    {commentsList}
  </div>
  )
}