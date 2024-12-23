import React, { useState } from 'react';

const Home = () => {
    const [detail, setDetail] = useState(true);
    const [open, setOpen] = useState(false);

    const handleCloseDetail = () => {
        setDetail(false);
    };

    return (
        <div className="flex flex-row w-full mt-20 lg:px-[2%] md:px-[5%]">
            {/* Side menu bar */}
            <div className="w-10 lg:w-[233px] h-[344px] lg:h-auto pr-1 lg:pr-4 pt-10 border-r border-black/50 relative">
                <div className="hidden lg:flex flex-col items-start w-[217px] h-[344px] gap-4">
                    <div className="flex flex-row items-center justify-between w-full">
                        <button className="font-normal text-base hover:text-[#DB4444]">Women's Fashion</button>
                        <button>
                            <img src="/Home/DropDown.png" alt="DropDown" className="w-2 h-3" />
                        </button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                        <button className="font-normal text-base hover:text-[#DB4444]">Men's Fashion</button>
                        <button>
                            <img src="/Home/DropDown.png" alt="DropDown" className="w-2 h-3" />
                        </button>
                    </div>
                    <button className="font-normal text-base hover:text-[#DB4444]">Electronics</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Home & Lifestyle</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Medicine</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Sport & Outdoor</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Baby's & Toys</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Groceries & pets</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Health & Beauty</button>
                </div>

                {/* Sidebar menu */}
                <div className="relative w-full h-full">
                    <button
                        className="flex items-center justify-center w-8 h-5 rounded-xl bg-[#f19393] hover:bg-[#DB4444] text-white bottom-0 right-0 lg:hidden absolute"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? '<<' : '>>'}
                    </button>
                </div>



                {/* Side menu list */}
                <div className={`absolute flex flex-col items-start w-[217px] h-[344px] gap-4 top-0 left-0 pt-[3%] text-black shadow-md transition-transform transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'
                    } lg:hidden`}>
                    <div className="flex flex-row items-center justify-between w-full">
                        <button className="font-normal text-base hover:text-[#DB4444]">Women's Fashion</button>
                        <button>
                            <img src="/Home/DropDown.png" alt="DropDown" className="w-2 h-3" />
                        </button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                        <button className="font-normal text-base hover:text-[#DB4444]">Men's Fashion</button>
                        <button>
                            <img src="/Home/DropDown.png" alt="DropDown" className="w-2 h-3" />
                        </button>
                    </div>
                    <button className="font-normal text-base hover:text-[#DB4444]">Electronics</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Home & Lifestyle</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Medicine</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Sport & Outdoor</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Baby's & Toys</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Groceries & pets</button>
                    <button className="font-normal text-base hover:text-[#DB4444]">Health & Beauty</button>
                </div>
            </div>

            {/* Front image */}
            <div className="w-full h-auto pl-[3%] pt-[3%]" onClick={handleCloseDetail}>
                <div className="relative flex flex-row justify-center md:justify-between w-full h-full bg-black md:pl-4 lg:pl-16">
                    {/* Description section */}
                    <div className="hidden md:flex flex-col w-[300px] gap-8 py-10 left-0">
                        <div className="flex flex-row justify-between items-center w-36 md:w-[190px]">
                            <img src="/Home/Apple.png" alt="Apple" className="w-10 h-12" />
                            <h1 className="text-sm md:text-base font-normal text-white">iPhone 14 Series</h1>
                        </div>
                        <div className="w-32 md:w-[294px] text-2xl md:text-5xl font-semibold text-[#FAFAFA]">
                            <p>Up to 10% off voucher</p>
                        </div>
                        <a href="" className='hover:scale-105 px-4'>
                            <div className="flex flex-row items-center gap-2 w-fit h-7">
                                <div className="flex flex-col w-fit">
                                    <p className="text-sm md:text-base font-medium text-white">Shop Now</p>
                                    <div className="w-full h-[2px] rounded bg-white opacity-50"></div>
                                </div>
                                <div className="flex items-center w-6 h-6">
                                    <img src="/Home/Arrow-right.png" alt="Arrow-right" className="w-5 h-4" />
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Detail overlay for small screens */}
                    {detail && (
                        <div
                            className="absolute bottom-0 left-0 w-full h-auto text-white flex flex-col items-start pb-4 px-4 z-10 md:hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the detail
                        >
                            <div className="flex flex-row items-center gap-8 w-full">
                                <img src="/Home/Apple.png" alt="Apple" className="w-10 h-12" />
                                <h1 className="text-sm font-normal">iPhone 14 Series</h1>
                            </div>
                            <div className="w-full text-2xl font-semibold">
                                <p>Up to 10% off voucher</p>
                            </div>
                            <a href="" className='hover:scale-105 px-2'>
                                <div className="flex flex-row items-center gap-2 w-fit h-7">
                                    <div className="flex flex-col w-fit">
                                        <p className="text-sm font-medium">Shop Now</p>
                                        <div className="w-full h-[2px] rounded bg-white opacity-50"></div>
                                    </div>
                                    <div className="flex items-center w-6 h-6">
                                        <img src="/Home/Arrow-right.png" alt="Arrow-right" className="w-5 h-4" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}

                    {/* Sample image */}
                    <div
                        className="flex items-center justify-center max-w-[496px] h-full pt-4 overflow-hidden"
                        onClick={(e) => {
                            e.stopPropagation();
                            setDetail(!detail);
                        }}
                    >
                        <img src="/Home/Phone.jpg" alt="Phone" className="w-fit h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;





