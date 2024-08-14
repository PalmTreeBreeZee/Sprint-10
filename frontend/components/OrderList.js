import React from 'react'
import { useReducer } from 'react'
import { useGetAllOrdersQuery } from '../state/pizzaSlice'


  const CHANGE_ALL_FILTER = 'CHANGE_ALL_FILTER'

 const reducer = (state, action) => {
  switch(action.type){
    case CHANGE_ALL_FILTER:
      return {}
    default:
      return state
  }
 }
 
 
export default function OrderList() {
 const {data, error, isLoading} = useGetAllOrdersQuery()
  const [state, dispatch] = useReducer(reducer, data)

if(isLoading) return <div>Loading...</div> 
if(error) return <div>Error returning data</div>
return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          
          data.map((order) => {
            return (
              <li key={order.id}>
                <div>
                 {order.customer} ordered a size {order.size} with {order.toppings} toppings </div>
              </li>
            )
          })
              }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(sizes => {
            const className = `button-filter${sizes === 'M' ? ' active' : ''}`
            return <button
              data-testid={`filterBtn${sizes}`}
              className={className}
              key={sizes}
              
            
              >{sizes}</button>
          })
        }
      </div>
    </div>
  )
}
