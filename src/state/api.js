import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gozonkeanulrich.azurewebsites.net',
        headers: {
            'Content-Type': 'application/json'
          }
    }),
    reducerPath: 'adminApi',
    tagType: ['Post'],
    endpoints: (builder) => ({
        getPortfolio: builder.query({
            query: ()=>'api/post'
        }),
        getResource: builder.query({
            query: () => 'api/resource'
        }),
        getResourceById: builder.query({
            query: (id) => `api/resource/${id}`
        })
    })
});

export const {
                useGetPortfolioQuery,
                useGetResourceQuery,
                useGetResourceByIdQuery
            } = api;