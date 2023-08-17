import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseApi = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:3000',
        prepareHeaders : (headers,{getState}) => {
            const token=localStorage.getItem("Auth");
            if(token)
            {
                headers.set("Authorization",`Bearer ${token}`)
            }
            return headers;
        }
    }),
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true,
    endpoints:()=>({}),
    tagTypes:['xyz']
});

export default baseApi