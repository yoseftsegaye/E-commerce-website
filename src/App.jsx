import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <div className='h-100vh'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App