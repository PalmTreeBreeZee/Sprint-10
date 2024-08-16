import React from 'react'
import { useReducer} from 'react'
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
  const [size, sizeState] = React.useState('All')

if(isLoading) return <div>Loading...</div> 
if(error) return <div>Error returning data</div>
//if there is a filter applied lets filter the response
//console.log(data)
let arr = data

const onClick = evt => {
  sizeState(evt.target.value)
}
const filteredPizzas = data.filter(pizza =>{
  if(size === 'All'){
    return pizza
  } else {
    return pizza.size === size
  }
})
return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          filteredPizzas.map((order) => {
            return (
              <li key={order.id}>
                <div>
                 {order.customer} ordered a size {order.size} with {order.toppings.length} toppings </div>
              </li>
            )
          })
              }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(sizes => {
            const className = `button-filter${sizes === size ? ' active' : ''}`

            return <button
              data-testid={`filterBtn${sizes}`}
              className={className}
              key={sizes}
              onClick={onClick}
              value= {sizes}
            
              >{sizes}</button>
          })
        }
      </div>
    </div>
  )
}
