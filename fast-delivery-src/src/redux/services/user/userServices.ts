import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface loggedUser {
    id: number
    name:string
    last_name:string
    status:string
    role:string
}

export const userApi = createApi({
    reducerPath:'user',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/users'
    }),
    endpoints: (builder)=> ({
        getMe:builder.query<loggedUser,null>({
            query: () => 'users/me'
        })
    })
})

export const {useGetMeQuery} = userApi