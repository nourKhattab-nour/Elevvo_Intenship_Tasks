import { useState } from 'react'
import './App.css'
import BlogPage from "./pages/blog"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
   <BlogPage/>
    </div>
  )
}

export default App
