import React, {useReducer} from 'react'
import { usePostAllOrdersMutation } from '../state/pizzaSlice'
const CHANGE_FULLNAME = 'CHANGE_FULLNAME'
const CHANGE_SIZE = 'CHANGE_SIZE'
const CHANGE_1 = 'CHANGE_1'
const CHANGE_2 = 'CHANGE_2'
const CHANGE_3 = 'CHANGE_3'
const CHANGE_4 = 'CHANGE_4'
const CHANGE_5 = 'CHANGE_5'

const initialFormState = { // suggested
  fullName: '',
  size: '',
  
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
} 
const reducer = (state, action) => {
  switch (action.type){
    case CHANGE_FULLNAME:
    return {...state, fullName: action.payload}
    case CHANGE_SIZE: 
      return {...state, size: action.payload}
    case CHANGE_1: 
      return {...state, '1': action.payload}
    case CHANGE_2: 
      return {...state, '2': action.payload}
    case CHANGE_3: 
      return {...state, '3': action.payload}
    case CHANGE_4: 
      return {...state, '4': action.payload}
    case CHANGE_5: 
      return {...state, '5': action.payload}
    default:
      return state
  }
}

export default function PizzaForm() {
 const [state, dispatch] = useReducer(reducer, initialFormState)
 const [createOrder, error, isLoading] = usePostAllOrdersMutation()
 console.log(error)
 const onNameChange = ({target: { value }})=>{
   dispatch({type: CHANGE_FULLNAME, payload: value})
 }
 const onSizeChange = ({target: { value }})=>{
  dispatch({type: CHANGE_SIZE, payload: value})
 }
 const on1Change = () =>{
  dispatch({type: CHANGE_1, payload: 'Pepperoni'})
 }
 const on2Change = () =>{
  dispatch({type: CHANGE_2, payload: 'Green Peppers'})
 }
 const on3Change = () =>{
  dispatch({type: CHANGE_3, payload: 'Pineapple'})
 }
  const on4Change = () =>{
  dispatch({type: CHANGE_4, payload: 'Mushrooms'})
 }
 const on5Change = () =>{
  dispatch({type: CHANGE_5, payload: 'Ham'})
 }
 const reset = evt => {}
  return (
    <form>
      <h2>Pizza Form</h2>
      {isLoading && <div className='pending'>Order in progress...</div>}
      {error && <div className='failure'>Order failed: {error.status}</div>}

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            data-testid="fullNameInput"
            id="fullName"
            name="fullName"
            placeholder="Type full name"
            type="text"
            value={state.fullName}
            onChange={onNameChange}
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select data-testid="sizeSelect" id="size" name="size" value={state.size} onChange={onSizeChange}>
            <option value="">----Choose size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input data-testid="checkPepperoni" name="1" type="checkbox" checked={state.CHANGE_1} onChange={on1Change}/>
          Pepperoni<br /></label>
        <label>
          <input data-testid="checkGreenpeppers" name="2" type="checkbox" checked={state.CHANGE_2} onChange={on2Change}/>
          Green Peppers<br /></label>
        <label>
          <input data-testid="checkPineapple" name="3" type="checkbox" checked={state.CHANGE_3} onChange={on3Change}/>
          Pineapple<br /></label>
        <label>
          <input data-testid="checkMushrooms" name="4" type="checkbox" checked={state.CHANGE_4} onChange={on4Change}/>
          Mushrooms<br /></label>
        <label>
          <input data-testid="checkHam" name="5" type="checkbox" checked={state.CHANGE_5} onChange={on5Change}/>
          Ham<br /></label>
      </div>
      <input data-testid="submit" type="submit" onClick={() => createOrder(state)}/>
    </form>
  )
}
