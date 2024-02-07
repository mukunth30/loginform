import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Create from './pages/Create'
import Footer from './pages/Footer'
import Header from './pages/Header'
import Read from './pages/Read'
import Update from './pages/Update'

function App() {
  return (
    <div>
       <Router>
          <Header/>
           <Routes>
              <Route path='/' exact element={<Create/>}></Route>
              <Route path='/read' element={<Read/>}></Route>
              <Route path='/update' element={<Update/>}></Route>
           </Routes>
           <Footer/>
       </Router>
    </div>
  )
}

export default App