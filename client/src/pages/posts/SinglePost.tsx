import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/Store";
import { baseUrl } from "../../api/api";
import { useParams } from "react-router-dom";
import { CommentProps, PostProps } from "../../model/types";
import CommentTitle from "../../components/CustomTitle";
interface P {
  data: CommentProps[];
}
const SinglePost = () => {
  const [post, setPost] = useState<PostProps>({
    body: "",
    id: "",
    title: "",
    userId: "",
  });
  const [comments, setComments] = useState<CommentProps[]>();
  const { commentItems } = useAppSelector((state) => state.comments);
  console.log(commentItems, "comment");

  const { id } = useParams();
  //https://jsonplaceholder.typicode.com/posts?id=1
  const fecthSinglePost = async () => {
    try {
      const response = await baseUrl.get(`/posts?id=${id}`);
      setPost(response?.data[0]);
      console.log(response?.data[0], "data");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const fetchComments = async () => {
    try {
      const res = await baseUrl.get(`/comments?postId=${id}`);
      console.log(res?.data, "response");
      setComments(res?.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fecthSinglePost();
    fetchComments();
  }, [id, commentItems]);

  return (
    <div className="mt-12">
      <CommentTitle>Single Post</CommentTitle>

      <div className="block md:flex mt-12 gap-8">
       
        <div className="w-full md:w-[45%]">
        <p>Post</p>
          <div className="w-full h-max shadow-md rounded-md bg-white px-4 py-2">
            <p className="font-semibold text-dark-blue capitalize">
              {post.title}
            </p>
            <p className="capitalize">{post?.body}</p>
            {comments?.length ? (
              <p>{`${comments?.length} comments`}</p>
            ) : (
              <p>Loading..</p>
            )}
          </div>
        </div>

        <div className="w-full md:w-[55%] ">
          <p>Comments</p>
          {comments?.map((label) => (
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
  );
};

export default SinglePost;
