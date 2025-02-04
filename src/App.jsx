import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut';
import Account from './pages/Account';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className="h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-grow">
        {/* <Home /> */}
        {/* <SignUp /> */}
        {/* <LogIn /> */}
        {/* <Wishlist /> */}
        {/* <Cart /> */}
        {/* <CheckOut /> */}
        {/* <Account /> */}
        {/* <About /> */}
        {/* <Contact /> */}
        {/* <NoMatch /> */}
        <ProductDetail />
      </div>
      <Footer className="absolute bottom-0 left-0" />
    </div>
  );
}

export default App;
