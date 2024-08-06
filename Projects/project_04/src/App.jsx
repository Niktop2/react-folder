import { useState } from 'react'
import './App.css'
import Comp1 from './components/comp1'
import Comp2 from './components/Comp2/comp2'
import Comp3 from './components/Comp3'

function App() {
  const [pageChange, setPageChange] = useState()

  return (
    <>
     <h1>Nikhil Topre</h1>
     <p>I am skilled in Html, Css, JavaScript, React</p>
     <button>Click Me</button>
     <Comp1 />
     <Comp2 />
     <Comp3 />
    </>
  )
}

export default App
