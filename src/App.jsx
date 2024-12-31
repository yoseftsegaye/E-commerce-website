import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
