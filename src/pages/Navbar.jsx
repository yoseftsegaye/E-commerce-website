import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home"); // Default active link
    const links = ["Home", "Contact", "About", "SignUp"]; // List of links

    const [open, setOpen] = useState(false);

    // Close menu when clicking outside
    const closeMenu = () => {
        setOpen(false);
    }

    return (
        <nav className="flex items-center top-0 left-0 fixed z-[999] w-full h-20 pt-4 px-[2%] md:px-[5%] border-black/50 shadow-md">
            <div className="flex flex-row items-center justify-between w-full h-10">

                {/* Logo and Links */}
                <div className='flex flex-row justify-between items-center w-fit lg:w-[50%] h-6'>

                    {/* Logo */}
                    <div className='w-fit'>
                        <h1 className="font-bold text-xl md:text-2xl transition-transform hover:scale-105">Exclusive</h1>
                    </div>

                    {/* Link for large screen */}
                    <div className="hidden lg:flex justify-end gap-10">
                        {links.map((link) => (
                            <div key={link} className="w-auto px-1">
                                <a
                                    href="/"
                                    className="font-normal hover:text-[#DB4444]"
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent page reload
                                        setActiveLink(link); // Set active link
                                    }}
                                >
                                    {link}
                                </a>
                                <div
                                    className={`w-full h-[2px] rounded bg-black transition-opacity ${activeLink === link ? "opacity-50" : "opacity-0"
                                        }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Search and Buttons */}
                <div className='flex flex-row justify-center items-center w-[70%] lg:w-[40%] h-10 gap-[5%]'>

                    {/* Search section */}
                    <div className='flex items-center justify-center w-full rounded bg-slate-100 h-full pl-3 md:pl-5 pr-3 py-2 relative'>
                        <div className='flex flex-row items-center w-full h-full'>
                            <input
                                type="text"
                                placeholder='What are you looking for?'
                                className='text-sm font-normal bg-slate-100 w-full h-full outline-none'
                            />
                        </div>

                        {/* Search button */}
                        <div className='absolute right-2 top-2 w-6 h-6'>
                            <button>
                                <img
                                    src="/Navbar/Search.png"
                                    alt="SearchButton"
                                    className='w-5 h-5' />
                            </button>
                        </div>
                    </div>

                    {/* Button section */}
                    <div className='flex flex-row justify-center items-center w-[88px] md:w-[120px] h-8 gap-2 md:gap-4'>
                        <div className='flex flex-row justify-center items-center w-4 md:w-8 h-3 md:h-8'>
                            <button>
                                <img src="/Navbar/Like.png" alt="Like" className='w-full h-full' />
                            </button>
                        </div>
                        <div className='flex flex-row justify-center items-center w-5 md:w-8 h-6 md:h-8'>
                            <button>
                                <img src="/Navbar/Cart.png" alt="Cart" className='w-full h-full' />
                            </button>
                        </div>
                        <div className='flex flex-row justify-center items-center w-5 md:w-8 h-6 md:h-8'>
                            <button>
                                <img src="/Navbar/User.png" alt="User" className='w-full h-full' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu for small screen */}
            <div className="lg:hidden z-[1002] pl-2">
                <img
                    src="/Navbar/menu.png"
                    alt="Menu Icon"
                    className="w-8 h-8 cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-[1000] lg:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-1/2 md:w-1/3 bg-gradient-to-r bg-white text-black shadow-md pt-10 z-[1001] transition-transform transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'
                    } lg:hidden`}
            >
                <div className="flex items-center justify-center w-full mb-10 pl-0">
                    <h1 className="font-bold text-xl md:text-2xl transition-transform hover:scale-105">Exclusive</h1>
                </div>
                <div className='flex flex-col items-start px-10 py-10 font-medium text-lg gap-6'>
                    <a href="/" className="transition-transform hover:scale-105 hover:text-[#DB4444]">Home</a>
                    <a href="/" className="transition-transform hover:scale-105 hover:text-[#DB4444]">Contact</a>
                    <a href="/" className="transition-transform hover:scale-105 hover:text-[#DB4444]">About</a>
                    <a href="/" className="transition-transform hover:scale-105 hover:text-[#DB4444]">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
