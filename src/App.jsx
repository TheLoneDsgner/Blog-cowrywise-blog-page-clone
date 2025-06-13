import './App.css'
import Blog from './Blog'
import BlogDetail from './BlogDetail'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Router>
      <div className='app'>

        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/blog" element={ <Blog /> }>  </Route>
          </Routes>         
          <Routes>
            <Route path="/blog/:id" element={ <BlogDetail /> }>  </Route>
          </Routes>         
        </div>
        
      </div> 
    </Router> 
    </>
  )
}

export default App
