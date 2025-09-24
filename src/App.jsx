import { useState } from 'react'
import ListEmployee from './components/ListEmployee'
import './App.css'
import CreateEmployee from './components/CreateEmployee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateEmployee />
      <ListEmployee />
    </>
  )
}

export default App
