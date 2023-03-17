import React from 'react'
import { useParams } from 'react-router-dom'
import CommentTitle from "../../components/CustomTitle"
import { useGetAllPostsCommentsQuery, useDeleteCommentMutation } from '../../features/user/commentApi'

interface Props {
  body:string;
  createdAt:string,
  email:string,
  name:string,
  postId: string,
  updatedAt:string,
  id:string,
  _v: number
}

const UserSinglePost = () => {
  const [deleteComment] = useDeleteCommentMutation()
  const {id} = useParams()
  const {data} = useGetAllPostsCommentsQuery(id)
  console.log(data,'post comments')
const handleUpdate = (id:string) =>{} 
const handleDelete = (id:string) =>{
  deleteComment(id)
}
  return (
<div className="mt-12">
      <CommentTitle>Single Post</CommentTitle>

      <div className="block md:flex mt-12 gap-8">
       
        <div className="w-full md:w-[45%]">
        <p>Post</p>
         
        </div>

        <div className="w-full md:w-[55%] ">
          <p>Comments</p>
          {data?.data?.map((label:Props) => (
            <div
              className="px-4 py-2 border-solid border-2 border-gray-400 rounded-md my-2 "
              key={label.id}
            >
              <p>{label?.body}</p>
              <p>
                Name: <span className="text-dark-blue">{label.name}</span>
              </p>
              <div className="flex justify-between mt-2">
                  <button
                    onClick={() => handleUpdate(label.id)}
                    className=" rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-solid border-2 border-dark-blue bg-white text-dark-blue flex h-auto items-center"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(label.id)}
                    className="rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 border-solid border-2 border-red-600 text-red-600 flex h-auto items-center cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserSinglePost