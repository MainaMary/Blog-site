import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/Store";
import CustomLoader from "../../components/CustomLoader";
import { useGetAllPostsQuery } from "../../features/postsApi";
import {FaCommentAlt} from "react-icons/fa"
import {AiFillLike} from "react-icons/ai"
import CommentModal from "../../components/CommentModal";
import { useAppSelector } from "../../store/Store";
import { fetchComments } from "../../slice/CommentsSlice";
interface PProps {
  body: string;
    id: string;
    title: string;
    userId?: number;
}
const AllPosts = () => {
  const [openModal,setOpenModal] = useState<boolean>(false)
  const {commentItems} = useAppSelector((state)=> state.comments)
  const [postId, setPostId] = useState<string>('')
  const { data, isLoading, isError, error } = useGetAllPostsQuery("posts");
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  if (isError) {
    console.log(error, "error");
  }
  const handleModal =() =>{
    setOpenModal(prev => !prev)
  }
  useEffect(()=>{
    dispatch(fetchComments())
   
  },[])
  console.log(postId,'post id');

  //https://jsonplaceholder.typicode.com/comments?postId=1
  //console.log(data?.slice(0, 15));
  return (
    <>
    <div>
      {isLoading ? <CustomLoader/> : (<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data?.slice(0, 12).map((label: PProps) => 
       
       {
     
        return  (
          <div
            key={label.id}
            className=" mt-12 px-3 py-2 bg-white shadow-md rounded-md"
          >
            
            <p className="text-blue">{label.title}</p>
            <p>{`${label.body}...`}</p>
            <p  className="cursor-pointer font-semibold text-dark-blue" onClick={() =>navigate(`/singlePost/${label.id}`)}>View post</p>
            <div className="flex my-2 py-2 h-auto items-center border-b border-gray-500">
               
                {/* <p>{4} <span>comments</span></p> */}
            </div>
            <div  className="flex justify-between w-full my-2 h-auto items-center">
                {/* <div className="flex h-auto items-center">
                <AiFillLike className="text-gray-500"/>
                <p className="ml-4">Like</p>
                </div> */}
                <div className="flex h-auto items-center cursor-pointer" onClick={() =>{handleModal(), setPostId(label.id)}}>
                <FaCommentAlt className="text-gray-500"/>
                <p className="ml-4">comment</p>
                </div>
                <div>

                </div>
            </div>
          </div>
        )
       })}
      </div>)}
    </div>
    {openModal && <CommentModal postId={postId} openModal={openModal} handleModal={handleModal}/>}
    </>
  );
};

export default AllPosts;
