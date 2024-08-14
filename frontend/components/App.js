import React from 'react'
import PizzaForm from './PizzaForm'
import OrderList from './OrderList'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import { pizzaApi } from '../state/store'
export default function App() {
  return (
   
    <div id="app">
      <PizzaForm />
      <OrderList />
    </div>

)
}
