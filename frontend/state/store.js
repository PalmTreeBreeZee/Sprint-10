import { configureStore, createSlice } from '@reduxjs/toolkit'


const exampleReducer = (state = { count: 0 }) => {
  return state
}
const sizeReducer = (state = {size: 'All'}) =>{
  return state
}

export const resetStore = () => configureStore({
  reducer: {
    example: exampleReducer, 
    filters: sizeReducer,
    // add your reducer(s) here
  },
  middleware: getDefault => getDefault().concat(
    // if using RTK Query for your networking: add your middleware here
    // if using Redux Thunk for your networking: you can ignore this
  ),
})

export const store = resetStore()
