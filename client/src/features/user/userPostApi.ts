import { PostProps } from "../../model/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userspostsApi = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({

      getAllPosts: builder.query({
        query: () => "post",
        providesTags: ["Posts"],
      }),
      getSinglePost :builder.query({
         query:(id) => `post/${id}`
      }),
      addPost :builder.mutation<void, PostProps>({
        query: payload =>({
            url: '/post',
            method:'POST',
            body: payload
        })
      }),
      updatePost : builder.mutation<void, PostProps>({
        query: ({id,...rest}) =>({
            url: `/post/${id}`,
            method:'PUT',
            body: rest

        })
      }),
      deletePost : builder.mutation<void, string>({
        query: (id) =>({
            url: `/post/${id}`,
            method:'DELETE',
           
        })
      })
    }),
  });
  export const { useGetAllPostsQuery, useGetSinglePostQuery, useAddPostMutation, useDeletePostMutation, useUpdatePostMutation} = userspostsApi