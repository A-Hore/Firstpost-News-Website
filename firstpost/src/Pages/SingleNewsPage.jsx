import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleNewsPage = () => {
  const {user_id , title} = useParams()
  // console.log(params);
  const [details , setDetails] = useState({})
  return (
     <div>
      {/* <h1>{user_id}</h1>
      <h1>{title}</h1> */}
      {/* <img src={params.image_url} alt="News" /> */}
     </div>
  )
}

export default SingleNewsPage
