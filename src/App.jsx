import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Footer from './component/Footer'


const App = () => {
  return (
    <Router>
      <div>
        
        <main>
          <Routes>
            <Route path="/" exact element={(<Home />)} />
            <Route path="/services" element={(<Services />)} />
            <Route path="/about" element={(<About/>)} />
            <Route path="/contact" element={(<Footer />)} />
         </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App