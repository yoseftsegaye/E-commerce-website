import React from 'react'

const Featured = () => {
    return (
        <div className='w-full h-fit my-10 md:my-20 px-[2%] md:px-[5%]'>
            <div className='flex flex-col items-center gap-5 md:gap-[60px]'>
                {/* Featured */}
                <div className='flex flex-row items-center w-full relative'>
                    <div className='flex flex-col justify-start gap-2 md:gap-5 w-fit mb-2'>
                        <div className="flex flex-row items-center w-fit gap-4">
                            <div className="w-3 h-6 md:w-4 md:h-8 lg:w-5 lg:h-10 rounded bg-primary"></div>
                            <h1 className="text-sm md:text-base font-semibold text-primary">Featured</h1>
                        </div>
                        <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">New Arrival</h1>
                    </div>
                </div>

                {/* Samples */}
                <div className='w-full h-fit flex flex-row gap-[2%]'>
                    <div className='w-[50%] h-fit flex justify-center px-[3%] pt-8 md:pt-15 bg-black'>
                        {/* Image */}
                        <div className='w-[511px] h-fit flex items-center justify-center relative'>
                            <img src="/Featured/Playstation.png" alt="Playstation" className='w-full h-full object-contain' />
                            {/* Detail */}
                            <div className='absolute bottom-4 md:bottom-10 left-0 w-fit h-fit flex flex-col gap-2 md:gap-4'>
                                <div className='w-44 md:w-[242px] h-fit flex flex-col gap-2 md:gap-4'>
                                    <h1 className='text-lg md:text-2xl font-semibold text-textSecondary hover:scale-110 transition-transform duration-300'>PlayStation 5</h1>
                                    <p className='text-xs md:text-sm font-normal text-textSecondary leading-tight hover:scale-110 transition-transform duration-300'>Black and white version of the PS5 coming out on sale</p>
                                </div>
                                <a
                                    href='#'
                                    className='w-fit h-fit text-sm md:text-base font-medium text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>
                                    Shop Now
                                    <div className='w-auto h-[2px] bg-white rounded-md'></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] h-auto flex flex-col gap-[4%]'>
                        <div className='w-full h-[50%] flex items-center justify-between bg-[#0D0D0D] relative'>
                            {/* Image Container */}
                            <div className='absolute right-0 top-0 bottom-0 w-[80%] md:w-[65%] h-full flex items-center justify-end'>
                                <img
                                    src="/Featured/WomenCollection.png"
                                    alt="WomenCollection"
                                    className='w-full h-full object-contain'
                                />
                            </div>
                            <div className='absolute bottom-3 left-3 md:bottom-6 md:left-6 w-fit h-fit flex flex-col gap-1 md:gap-2'>
                                <div className='w-44 md:w-[230px] h-fit flex flex-col md:gap-2'>
                                    <h1 className='text-sm md:text-xl font-semibold text-textSecondary hover:scale-110 transition-transform duration-300'>
                                        Women's Collections 5
                                    </h1>
                                    <p className='hidden md:flex text-[10px] md:text-sm font-normal text-textSecondary leading-tight hover:scale-110 transition-transform duration-300'>
                                        Featured women collections that give you another vibe
                                    </p>
                                </div>
                                <a
                                    href='#'
                                    className='w-fit h-fit text-sm md:text-base font-medium text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>
                                    Shop Now
                                    <div className='w-auto h-[2px] bg-white rounded-md'></div>
                                </a>
                            </div>
                        </div>

                        <div className='w-full h-[50%] flex flex-row gap-[4%]'>
                            <div className='w-[50%] h-auto p-[5%] flex items-center justify-center bg-black relative'>
                                <img src="/Featured/Speakers.png" alt="Speakers" className='w-full h-full object-contain z-10' />
                                <div className="absolute top-0 right-0 w-full h-full rounded-full bg-[#D9D9D9] blur-[100px] opacity-30 z-2"></div>
                                <div className='absolute bottom-1 left-1 md:bottom-3 md:left-3 lg:bottom-6 lg:left-6  w-fit h-fit flex flex-col gap-[2px] md:gap-2 z-20'>
                                    <div className='w-44 md:w-[230px] h-fit flex flex-col lg:gap-2'>
                                        <h1 className='text-sm md:text-xl font-semibold text-textSecondary hover:scale-110 transition-transform duration-300'>Speakers</h1>
                                        <p className='hidden md:flex text-xs md:text-sm font-normal text-textSecondary leading-tight hover:scale-110 transition-transform duration-300'>Amazon wireless speakers</p>
                                    </div>
                                    <a
                                        href='#'
                                        className='w-fit h-fit text-sm md:text-base font-medium text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>
                                        Shop Now
                                        <div className='w-auto h-[2px] bg-white rounded-md'></div>
                                    </a>
                                </div>
                            </div>
                            <div className='w-[50%] h-auto p-[5%] flex items-center justify-center bg-black relative'>
                                <img src="/Featured/Perfume.png" alt="Perfume" className='w-full h-full object-contain z-10' />
                                <div className="absolute top-0 right-0 w-full h-full rounded-full bg-[#D9D9D9] blur-[100px] opacity-30 z-0"></div>
                                <div className='absolute bottom-1 left-1 md:bottom-3 md:left-3 lg:bottom-6 lg:left-6  w-fit h-fit flex flex-col gap-[2px] md:gap-2 z-20'>
                                    <div className='w-44 md:w-[230px] h-fit flex flex-col lg:gap-2'>
                                        <h1 className='text-sm md:text-xl font-semibold text-textSecondary hover:scale-110 transition-transform duration-300'>Perfume</h1>
                                        <p className='hidden md:flex text-xs md:text-sm font-normal text-textSecondary leading-tight hover:scale-110 transition-transform duration-300'>GUCCI INTENSE OUD EDP</p>
                                    </div>
                                    <a
                                        href='#'
                                        className='w-fit h-fit text-sm md:text-base font-medium text-textSecondary hover:text-primary hover:scale-110 transition-transform duration-300'>
                                        Shop Now
                                        <div className='w-auto h-[2px] bg-white rounded-md'></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Featured