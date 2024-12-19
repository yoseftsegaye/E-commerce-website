import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home"); // Default active link
    const links = ["Home", "Contact", "About", "SignUp"]; // List of links

    return (
        <nav className="flex items-center fixed shadow-md z-[999] w-full h-20 pt-4 px-[2%] md:px-[5%]">
            <div className="flex flex-row items-center justify-between w-full h-10">

                {/* Logo and Links */}
                <div className='flex flex-row justify-between items-center w-fit lg:w-[50%] h-6'>

                    {/* Logo */}
                    <div className='w-fit'>
                        <h1 className="font-bold text-xl md:text-2xl transition-transform hover:scale-105">Exclusive</h1>
                    </div>

                    {/* Link for large screen */}
                    <div className="hidden lg:flex justify-end gap-10 font-normal text-base">
                        {links.map((link) => (
                            <div key={link} className="w-auto">
                                <a
                                    href="/"
                                    className="transition-transform hover:scale-105"
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
                    <div className='flex items-center justify-center w-full rounded bg-slate-100 h-full pl-5 pr-3 py-2 relative'>
                        <div className='flex flex-row items-center w-full h-full'>
                            <input
                                type="text"
                                placeholder='What are you looking for?'
                                className='text-sm font-normal bg-slate-100 w-full h-full'
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
                    <div className='flex flex-row justify-center items-center w-[104px] md:w-[120px] h-8 gap-4 bg'>
                        <div className='flex flex-row justify-center items-center w-6 md:w-8 h-8'>
                            <button>
                                <img src="/Navbar/Like.png" alt="Like" className='w-5 h-5' />
                            </button>
                        </div>
                        <div className='flex flex-row justify-center items-center w-6 md:w-8 h-8'>
                            <button>
                                <img src="/Navbar/Cart.png" alt="Cart" className='w-full h-full' />
                            </button>
                        </div>
                        <div className='flex flex-row justify-center items-center w-6 md:w-8 h-8'>
                            <button>
                                <img src="/Navbar/User.png" alt="User" className='w-full h-full' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
