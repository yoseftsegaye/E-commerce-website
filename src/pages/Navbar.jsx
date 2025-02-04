import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Home"); // Default active link
    const links = [
        { id: 1, name: "Home", href: "#" },
        { id: 2, name: "Contact", href: "#" },
        { id: 3, name: "About", href: "#" },
        { id: 4, name: "SignUp", href: "#" },
    ]; // List of links

    const [open, setOpen] = useState(false);
    const [likeClicked, setLikeClicked] = useState(false);
    const [cartClicked, setCartClicked] = useState(false);
    const [profileClicked, setProfileClicked] = useState(false);

    // Close menu when clicking outside
    const closeMenu = () => {
        setOpen(false);
    }

    return (
        <nav className="flex items-center top-0 left-0 fixed w-full h-20 pt-4 px-[2%] md:px-[5%] border-black/50 shadow-md z-[999] bg-white">
            <div className="flex flex-row items-center justify-between w-full h-10">

                {/* Logo and Links */}
                <div className='flex flex-row justify-between items-center w-fit lg:w-[50%] h-6'>

                    {/* Logo */}
                    <div className='w-fit'>
                        <h1 className="font-bold text-xl md:text-2xl hover:scale-105 transition-transform duration-300 ">Exclusive</h1>
                    </div>

                    {/* Link for large screen */}
                    <div className="hidden lg:flex justify-end gap-10">
                        {links.map((link) => (
                            <div key={link.id} className="w-auto px-1 hover:text-primary hover:scale-110 transition-transform duration-300">
                                <a
                                    href={link.href}
                                    className="text-base font-normal"
                                    onClick={() => setActiveLink(link.name)} // Only set active link, allow navigation
                                >
                                    {link.name}
                                </a>

                                <div
                                    className={`w-full h-[2px] rounded bg-black transition-opacity ${activeLink === link.name ? "opacity-50" : "opacity-0"
                                        }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Search and Buttons */}
                <div className='flex flex-row justify-center items-center w-[70%] lg:w-[40%] h-10 gap-[5%]'>

                    {/* Search section */}
                    <div className='flex items-center justify-center w-full rounded bg-secondary h-full pl-3 md:pl-5 pr-10 py-2 relative'>
                        <div className='flex flex-row items-center w-full h-full relative'>
                            <input
                                type="text"
                                placeholder='What are you looking for?'
                                className='text-sm font-normal bg-secondary w-full h-full outline-none  placeholder-ellipsis'
                            />
                        </div>

                        {/* Search button */}
                        <div className='absolute right-2 top-2 w-6 h-6'>
                            <button>
                                <img
                                    src="/Navbar/Search.png"
                                    alt="SearchButton"
                                    className='w-5 h-5 object-contain hover:scale-110 transition-transform duration-300' />
                            </button>
                        </div>
                    </div>

                    {/* Button section */}
                    <div className='flex flex-row justify-center items-center w-[88px] md:w-[120px] h-8 md:gap-2 relative'>
                        <div className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full mb-2 ${likeClicked ? "bg-primary" : "bg-white"}`}>
                            <button onClick={() => setLikeClicked(!likeClicked)}>
                                <img src="/Navbar/Like.png" alt="Like" className={`w-5 h-5 object-contain hover:scale-125 transition-transform duration-300 ${likeClicked ? "filter invert" : ""}`} />
                            </button>
                        </div>
                        <div className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full mb-2 ${cartClicked ? "bg-primary" : "bg-white"}`}>
                            <button onClick={() => setCartClicked(!cartClicked)}>
                                <img src="/Navbar/Cart.png" alt="Cart" className={`w-5 h-5 object-contain hover:scale-125 transition-transform duration-300 ${cartClicked ? "filter invert" : ""}`} />
                            </button>
                        </div>
                        <div className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full mb-2 ${profileClicked ? "bg-primary" : "bg-white"}`}>
                            <button onClick={() => setProfileClicked(!profileClicked)}>
                                <img src="/Navbar/User.png" alt="User" className={`w-5 h-5 object-contain hover:scale-125 transition-transform duration-300 ${profileClicked ? "filter invert" : ""}`} />
                            </button>
                        </div>

                        {/* Account dropdown */}
                        <div className={`absolute bottom-0 right-0 z-10 w-[224px] h-[208px] bg-gradient-to-br from-gray-300 to-black translate-y-full rounded-md ${profileClicked ? "flex" : "hidden"}`}>
                            <div className='w-full h-full flex items-center justify-center'>
                                <div className='w-fit h-fit flex flex-col gap-1'>
                                    <div className='w-fit h-8 flex flex-row items-center gap-4'>
                                        <img src="/Account-DropDown/User.png" alt="User" className='w-6 h-6 object-contain' />
                                        <a
                                            href="#"
                                            className='text-sm font-normal text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>Manage My Account</a>
                                    </div>
                                    <div className='w-fit h-8 flex flex-row items-center gap-4'>
                                        <img src="/Account-DropDown/Order.png" alt="Order" className='w-6 h-6 object-contain' />
                                        <a
                                            href="#"
                                            className='text-sm font-normal text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>My Order</a>
                                    </div>
                                    <div className='w-fit h-8 flex flex-row items-center gap-4'>
                                        <img src="/Account-DropDown/Cancel.png" alt="Cancel" className='w-6 h-6 object-contain' />
                                        <a
                                            href="#"
                                            className='text-sm font-normal text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>My Cancellations</a>
                                    </div>
                                    <div className='w-fit h-8 flex flex-row items-center gap-4'>
                                        <img src="/Account-DropDown/Reviews.png" alt="Reviews" className='w-6 h-6 object-contain' />
                                        <a
                                            href="#"
                                            className='text-sm font-normal text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>My Reviews</a>
                                    </div>
                                    <div className='w-fit h-8 flex flex-row items-center gap-4'>
                                        <img src="/Account-DropDown/Logout.png" alt="Logout" className='w-6 h-6 object-contain' />
                                        <a
                                            href="#"
                                            className='text-sm font-normal text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>Logout</a>
                                    </div>
                                </div>
                            </div>
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
                className={`fixed top-0 right-0 h-screen w-1/2 md:w-1/3 bg-gradient-to-r bg-white text-textPrimary shadow-md pt-10 z-[1001] transition-transform transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'
                    } lg:hidden`}
            >
                <div className="flex items-center justify-center w-full mb-10 pl-0">
                    <h1 className="font-bold text-xl md:text-2xl transition-transform hover:scale-105">Exclusive</h1>
                </div>
                <div className='flex flex-col items-start px-10 py-10 font-medium text-lg gap-6'>
                    <a href="/" className="transition-transform duration-300 hover:scale-110 hover:text-primary">Home</a>
                    <a href="/" className="transition-transform duration-300 hover:scale-110 hover:text-primary">Contact</a>
                    <a href="/" className="transition-transform duration-300 hover:scale-110 hover:text-primary">About</a>
                    <a href="/" className="transition-transform duration-300 hover:scale-110 hover:text-primary">Sign Up</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
