import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/Store";
import CustomLoader from "../../components/CustomLoader";
import { useGetAllPostsQuery } from "../../features/postsApi";
import {FaCommentAlt} from "react-icons/fa"
import {AiFillLike} from "react-icons/ai"
import CommentModal from "../../components/CommentModal";
import { useAppSelector } from "../../store/Store";
import { fetchComments} from "../../slice/CommentsSlice";
import { fetchPhotos } from "../../slice/PhotosSlice";
import { PhotoProps } from "../../model/types";
interface PProps {
  body: string;
    id: string;
    title: string;
    userId?: number;
}
const AllPosts = () => {
  const [openModal,setOpenModal] = useState<boolean>(false)
 const [like, setLike] = useState<boolean>(false)
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
    dispatch(fetchPhotos());
   
  },[])
  const handleLike = (id:string) =>{
    setPostId(id)
    setLike(prev => !prev)

  }
  const state = useAppSelector((state) => state.photos);
  const comments = useAppSelector((state) => state.comments);
  const email = comments?.commentItems.slice(0, 12).map((name) => name.email);
  const img = state?.data.slice(0, 12).map((name:PhotoProps) => name.url);

  //https://jsonplaceholder.typicode.com/comments?postId=1
  //console.log(data?.slice(0, 15));
  return (
    <>
    <div>
      {isLoading ? <CustomLoader/> : (<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data?.slice(0, 12).map((label: PProps, index:number) => 
       
       {
     
        return  (
          <div
            key={label.id}
            className=" my-12 px-3 py-2 bg-white shadow-md rounded-md"
          >
            <div className="flex items-center">
              <div>
                <img src={img[index]} alt="post" className="w-[30px] h-[30px] rounded-full"/>
              </div>
              <div className="text-sm ml-4">
                <p>{email[index]?.split('@')[0]}</p>
                <p> 2 hours ago</p>
              </div>
            </div>
            <p className="text-dark-blue h-[60px] mt-4">{label.title}</p>
            <div className="h-[80px]">
            <p>{`${label.body.slice(0, 70)}...`}<span onClick={() =>navigate(`/singlePost/${label.id}`)} className="text-dark-blue font-semibold cursor-pointer">Read more</span></p>
            </div>
           
            <div>
                <img src={img[index]} alt="post" className="w-full h-[150px] rounded-md"/>
              </div>
            <p  className="cursor-pointer font-semibold text-dark-blue mt-4" onClick={() =>navigate(`/singlePost/${label.id}`)}>View post</p>
            <div className="flex my-2 py-2 h-auto items-center border-b border-gray-500">
               
                {/* <p>{4} <span>comments</span></p> */}
            </div>
            <div  className="flex justify-between w-full my-2 h-auto items-center">
                <div className="flex h-auto items-center" onClick={() =>handleLike(label.id)}>
                <AiFillLike className={ like && label.id === postId  ? 'text-red-500':'text-gray-500' }/>
                <p className="ml-4">Like</p>
                </div>
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
