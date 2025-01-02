import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart'

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      {/* <div className="flex-grow">
        <Home />
      </div> */}
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <Wishlist /> */}
      <Cart />
      <Footer className="absolute bottom-0 left-0" />
    </div>
  );
}

export default App;
