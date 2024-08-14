import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const pizzaSlice = createApi({
    reducerPath: 'pizzaSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:9009/api/pizza/'}),

    endpoints: (builder) => ({
    getAllOrders: builder.query({
    query: () => 'history',  
        }) ,
    postAllOrders: builder.mutation({
    query: (size, fullName, toppings) => ({
        url: 'order',
        method: 'POST',
        body: {size, fullName, toppings},

    })
    })
    }),
})

export const {useGetAllOrdersQuery, usePostAllOrdersMutation} = pizzaSlice;
export default pizzaSlice;