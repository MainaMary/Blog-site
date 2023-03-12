import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
    reducerPath:"user",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:5000/"}),
    tagTypes:['user'],
    endpoints: (builder) => ({
        addUser : builder.mutation({
            query: payload =>({
                url: '/signup',
                method: 'POST',
                body:payload,
                
            })
        }),
        loginUser : builder.mutation({
            query : payload =>({
                url:"/login",
                method:"POST",
                body:payload
            })
        })
    })
})
export const {useAddUserMutation, useLoginUserMutation} = userApi