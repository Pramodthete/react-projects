import Fragment from './components/fragment'
import './App.css'
import React from 'react'
import Map from './components/Map'
import ErrorMessage from './components/ErrorMessage'

function App() {

  let foodItems = ["Dal","Green Vegetable","Roti","Salad","Milk","Ghee"];

  return (
    <React.Fragment>
      <Fragment items={foodItems} />
      <Map items={foodItems}/>
      <ErrorMessage items={foodItems}/>
    </React.Fragment>
  )
}

export default App
