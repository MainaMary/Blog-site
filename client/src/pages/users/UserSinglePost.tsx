import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllPostsCommentsQuery } from '../../features/user/commentApi'

const UserSinglePost = () => {
  const {id} = useParams()
  const {data} = useGetAllPostsCommentsQuery(id)
  console.log(data,'post comments')
 
  return (
    <div>UserSinglePost</div>
  )
}

export default UserSinglePost