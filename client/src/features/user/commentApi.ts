import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const commentPostsApi = createApi({
    reducerPath:"comment",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/'}),
    tagTypes:["Comment"],
    endpoints: (builder) => ({
        addComment :builder.mutation({
            query: payload =>({
                url:'/comment',
                method: 'POST',
                body:payload
            }),
            invalidatesTags:['Comment']
        })

    })
})
export const { useAddCommentMutation} = commentPostsApi