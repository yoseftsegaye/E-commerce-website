import React, { useState } from 'react'
import { Monthly } from './../../Samples/Month';
import Countdown from 'react-countdown';

// Star Rating Component
const StarRating = ({ totalStars = 5, onRatingChange }) => {
    const [rating, setRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
        if (onRatingChange) {
            onRatingChange(index + 1);
        }
    };

    return (
        <div className="flex items-center">
            {[...Array(totalStars)].map((_, index) => (
                <svg
                    key={index}
                    onClick={() => handleClick(index)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={index < rating ? "#FFAD33" : "black"}
                    className={`w-5 h-5 cursor-pointer opacity-${index < rating ? '100' : '50'} transition duration-200 ease-in-out hover:scale-125`}
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );
};

// Countdown timer
const CountdownTimer = () => {
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="w-f-t h-fit flex flex-row justify-center gap-3 md:gap-4 lg:gap-6">
                <div className="w-8 h-8 md:w-12 md:h-12 lg:w-[62px] lg:h-[62px] md:rounded-full md:bg-white flex flex-col items-center justify-center gap-0.5 text-white md:text-black">
                    <p className='text-sm md:text-[14px] lg:text-base font-semibold'>{days.toString().padStart(2, '0')}</p>
                    <p className='text-[10px] md:text-sm font-normal'>Days</p>
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 lg:w-[62px] lg:h-[62px] md:rounded-full md:bg-white flex flex-col items-center justify-center gap-0.5 text-white md:text-black">
                    <p className='text-sm md:text-[14px] lg:text-base font-semibold'>{hours.toString().padStart(2, '0')}</p>
                    <p className='text-[11px] font-normal'>Hours</p>
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 lg:w-[62px] lg:h-[62px] md:rounded-full md:bg-white flex flex-col items-center justify-center gap-0.5 text-white md:text-black">
                    <p className='text-sm md:text-[14px] lg:text-base font-semibold'>{minutes.toString().padStart(2, '0')}</p>
                    <p className='text-[11px] font-normal'>Minutes</p>
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 lg:w-[62px] lg:h-[62px] md:rounded-full md:bg-white flex flex-col items-center justify-center gap-0.5 text-white md:text-black">
                    <p className='text-sm md:text-[14px] lg:text-base font-semibold'>{seconds.toString().padStart(2, '0')}</p>
                    <p className='text-[11px] font-normal'>Seconds</p>
                </div>
            </div>
        );
    };

    // Calculate 4 days from now
    const endDate = Date.now() + 4 * 24 * 60 * 60 * 1000;

    return <Countdown date={endDate} renderer={renderer} />;
};

const ThisMonth = () => {

    const sample = Monthly;

    const [likedProduct, setLikedProduct] = useState({});
    const [seenProduct, setSeenProduct] = useState({});
    const [displayedCount, setDisplayedCount] = useState(0);

    const toggleLike = (productId) => {
        setLikedProduct((prev) => ({
            ...prev,
            [productId]: !prev[productId],
        }));
    };
    const toggleSeen = (productId) => {
        setSeenProduct((prev) => ({
            ...prev,
            [productId]: !prev[productId],
        }));
    };

    const handleExploreMore = () => {
        setDisplayedCount((prevCount) => Math.min(prevCount + 8, sample.length));
    };

    return (
        <div className='w-full my-20 px-[2%] md:px-[5%]'>
            <div className='flex flex-col items-center gap-[60px]'>
                {/* This Month */}
                <div className='flex flex-row items-center w-full relative'>
                    <div className='flex flex-col justify-start gap-5 w-fit mb-2'>
                        <div className="flex flex-row items-center w-fit gap-4">
                            <div className="w-3 h-6 md:w-4 md:h-8 lg:w-5 lg:h-10 rounded bg-[#DB4444]"></div>
                            <h1 className="text-sm md:text-base font-semibold text-[#DB4444]">This Month</h1>
                        </div>
                        <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">Best Selling Products</h1>
                    </div>

                    {/* View button */}
                    <div className='absolute bottom-0 right-0 flex flex-row mb-2 w-auto'>
                        {displayedCount < sample.length && (
                            <button
                                onClick={handleExploreMore}
                                className='flex items-center justify-center w-24 h-10 md:w-32 md:h-12 lg:w-40 lg:h-14 rounded-md bg-[#DB4444] hover:bg-[#f19393]'>
                                <p className='text-base font-medium text-white'>View All</p>
                            </button>
                        )}
                    </div>
                </div>

                {/* Monthly products */}
                <div className='w-full h-fit flex justify-center flex-wrap gap-[30px]'>
                    {sample.slice(0, 4).map((product) => (
                        <div
                            key={product.id}
                            className='w-fit h-fit flex flex-col gap-4 rounded-md'>

                            {/* Image */}
                            <div className='w-[270px] h-[250px] flex items-center justify-center bg-[#F5F5F5] rounded-md hover:scale-105 ease-in-out duration-300 relative group'>
                                <div className='w-[180px] h-[170px] flex items-center justify-center'>
                                    <img src={product.image} alt={product.image} className='w-full h-full object-contain' />
                                </div>
                                <div className='absolute top-3 right-3 w-[34px] h-[76px] flex flex-col items-center justify-center gap-2'>
                                    <div
                                        className={`w-[34px] h-[34px] flex items-center justify-center rounded-full ${likedProduct[product.id] ? "bg-[#DB4444]" : "bg-white"
                                            } hover:bg-[#DB4444]`}
                                    >
                                        <button onClick={() => toggleLike(product.id)}>
                                            <img
                                                src="/Navbar/Like.png"
                                                alt="Heart"
                                                className={`w-5 h-4 ${likedProduct[product.id] ? "filter invert" : ""}`}
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className={`w-[34px] h-[34px] flex items-center justify-center rounded-full ${seenProduct[product.id] ? "bg-[#DB4444]" : "bg-white"
                                            } hover:bg-[#DB4444]`}
                                    >
                                        <button onClick={() => toggleSeen(product.id)}>
                                            <img
                                                src="/Navbar/Seen.png"
                                                alt="Eye"
                                                className={`w-5 h-4 ${seenProduct[product.id] ? "filter invert" : ""}`}
                                            />
                                        </button>
                                    </div>

                                </div>
                                <div className='absolute bottom-0 w-full h-10 bg-black rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='w-full h-full text-base font-medium text-white cursor-pointer'>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>

                            {/* Detail */}
                            <div className='w-52 h-[84px] flex flex-col gap-2 pl-1'>
                                <a href="#" className='text-base font-medium hover:scale-105 hover:underline duration-300'>{product.name}</a>
                                <div className='flex flex-row items-center gap-3'>
                                    <p className='text-base font-medium text-[#DB4444]'>{product.newPrice}</p>
                                    <p className='text-base font-medium text-black opacity-50 line-through'>{product.oldPrice}</p>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    {/* Star rating */}
                                    <div className='flex flex-row items-center'>
                                        <StarRating totalStars={5} />
                                    </div>
                                    <p className='text-sm font-semibold text-black opacity-50'> ({product.starRating}) </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load more products */}
                <div className='w-full flex flex-wrap justify-center gap-[30px] mb-2'>
                    {sample.slice(0, displayedCount).map((product) => (
                        <div key={product.id} className='w-fit h-fit flex flex-col gap-4 rounded-md'>
                            {/* Image */}
                            <div className='w-[270px] h-[250px] flex items-center justify-center rounded-md hover:scale-105 ease-in-out duration-300 bg-[#F5F5F5] group relative'>
                                <div className='w-[180px] h-[170px] flex items-center justify-center'>
                                    <img src={product.image} alt={product.image} className='w-full h-full object-contain' />
                                </div>
                                <div className='absolute top-3 right-3 w-[34px] h-[76px] flex flex-col items-center justify-center gap-2'>
                                    <div
                                        className={`w-[34px] h-[34px] flex items-center justify-center rounded-full ${likedProduct[product.id] ? "bg-[#DB4444]" : "bg-white"
                                            } hover:bg-[#DB4444]`}
                                    >
                                        <button onClick={() => toggleLike(product.id)}>
                                            <img
                                                src="/Navbar/Like.png"
                                                alt="Heart"
                                                className={`w-5 h-4 ${likedProduct[product.id] ? "filter invert" : ""}`}
                                            />
                                        </button>
                                    </div>
                                    <div
                                        className={`w-[34px] h-[34px] flex items-center justify-center rounded-full ${seenProduct[product.id] ? "bg-[#DB4444]" : "bg-white"
                                            } hover:bg-[#DB4444]`}
                                    >
                                        <button onClick={() => toggleSeen(product.id)}>
                                            <img
                                                src="/Navbar/Seen.png"
                                                alt="Eye"
                                                className={`w-5 h-4 ${seenProduct[product.id] ? "filter invert" : ""}`}
                                            />
                                        </button>
                                    </div>

                                </div>
                                <div className='absolute bottom-0 w-full h-10 bg-black rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='w-full h-full text-base font-medium text-white cursor-pointer'>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>

                            {/* Detail */}
                            <div className='w-fit h-fit flex flex-col gap-2 pl-1'>
                                <a href="#" className='text-base font-medium hover:scale-105 hover:underline duration-300'>{product.name}</a>
                                <div className='flex flex-row items-center gap-3'>
                                    <p className='text-base font-medium text-[#DB4444]'>{product.newPrice}</p>
                                    <p className='text-base font-medium text-black opacity-50 line-through'>{product.oldPrice}</p>
                                </div>
                                <div className='flex flex-row items-center gap-2 mb-5'>
                                    {/* Star rating */}
                                    <div className='flex flex-row items-center'>
                                        <StarRating totalStars={5} />
                                    </div>
                                    <p className='text-sm font-semibold text-black opacity-50'> ({product.starRating}) </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Promotion */}
            <div className='w-full fit bg-black flex flex-row items-center justify-between px-[5%] py-[5%]'>
                {/* Message */}
                <div className='flex flex-col gap-8'>
                    <p className='taxt-base font-medium text-[#00FF66]'>Catagories</p>
                    <div className='w-[170px] md:w-[300px] lg:w-[400px] text-xl md:text-4xl lg:text-5xl font-semibold text-white'>
                        <p className='leading-tight'> Enhance Your Music Experience</p>
                    </div>
                    <div className='w-fit h-fit'>
                        <CountdownTimer />
                    </div>
                    <a
                        href='#'
                        className='w-28 h-10 md:w-36 md:h-12 lg:w-[171px] lg:h-14 flex items-center justify-center rounded-sm bg-[#00FF66] text-white hover:bg-[#78f5aa] hover:text-black'>
                        Buy Now
                    </a>
                </div>

                {/* Image */}
                <div className="relative w-[300px] h-[210px] md:w-[450px] md:h-[315px] lg:w-[600px] lg:h-[420px] flex items-center justify-center">
                    <div className="absolute w-[504px] h-[500px] sm:scale-50 md:scale-75 lg:scale-100 rounded-full bg-[#D9D9D9] blur-[100px] opacity-30"></div>
                    <img src="/Month/Speaker.png" alt="Speaker" className="relative w-full h-full object-contain" />
                </div>

            </div>
        </div>
    )
}

export default ThisMonth





