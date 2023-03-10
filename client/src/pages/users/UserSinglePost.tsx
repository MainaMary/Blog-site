import React from 'react'
import { useParams } from 'react-router-dom'
import CommentTitle from "../../components/CustomTitle"
import { useGetAllPostsCommentsQuery } from '../../features/user/commentApi'

const UserSinglePost = () => {
  const {id} = useParams()
  const {data} = useGetAllPostsCommentsQuery(id)
  console.log(data,'post comments')
 
  return (
<div className="mt-12">
      <CommentTitle>Single Post</CommentTitle>

      <div className="block md:flex mt-12 gap-8">
       
        <div className="w-full md:w-[45%]">
        <p>Post</p>
         
        </div>

        <div className="w-full md:w-[55%] ">
          <p>Comments</p>
          {data?.data?.map((label) => (
            <div
              className="px-4 py-2 border-solid border-2 border-gray-400 rounded-md my-2 "
              key={label.id}
            >
              <p>{label?.body}</p>
              <p>
                Name: <span className="text-dark-blue">{label.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserSinglePost