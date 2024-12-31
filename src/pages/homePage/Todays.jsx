import React, { useRef, useState } from 'react';
import Countdown from 'react-countdown';
import { Products } from '../../Samples/Products';

const ITEM_WIDTH = 270;

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
            <div className="flex flex-col text-center">
                {/* Titles */}
                <div className="flex flex-row justify-center gap-1 md:gap-2 lg:gap-6 text-[10px] md:text-xs font-medium">
                    <div className="w-10 md:w-14">Days</div>
                    <div className="w-10 md:w-14">Hours</div>
                    <div className="w-10 md:w-14">Minutes</div>
                    <div className="w-10 md:w-14">Seconds</div>
                </div>
                {/* Countdown Values */}
                <div className="flex flex-row justify-center gap-1 md:gap-2 lg:gap-4 text-lg md:text-2xl lg:text-4xl font-semibold">
                    <div className="w-8 md:w-10">{days.toString().padStart(2, '0')}</div>
                    <div>:</div>
                    <div className="w-8 md:w-10">{hours.toString().padStart(2, '0')}</div>
                    <div>:</div>
                    <div className="w-8 md:w-10">{minutes.toString().padStart(2, '0')}</div>
                    <div>:</div>
                    <div className="w-8 md:w-10">{seconds.toString().padStart(2, '0')}</div>
                </div>
            </div>
        );
    };

    // Calculate 4 days from now
    const endDate = Date.now() + 4 * 24 * 60 * 60 * 1000;

    return <Countdown date={endDate} renderer={renderer} />;
};

const Todays = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();
    const sample = Products;

    const [likedProduct, setLikedProduct] = useState({});
    const [seenProduct, setSeenProduct] = useState({});
    const [displayedCount, setDisplayedCount] = useState(0); // Tracks the number of product displayed.

    // Function to handle scrolling when the button is clicked
    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount; // calculate the new scroll position.
        setScrollPosition(newScrollPosition); // update the state with the new scroll postion.

        // Access the container element and set its scrollLeft property.
        containerRef.current.scrollLeft = newScrollPosition;
    };

    const toggleLike = (productId) => {
        setLikedProduct((prev) => ({
            ...prev,
            [productId]: !prev[productId], // Toggle the liked state for the specific product.
        }));
    };
    const toggleSeen = (productId) => {
        setSeenProduct((prev) => ({
            ...prev,
            [productId]: !prev[productId], // Toggle the liked state for the specific product.
        }));
    };

    const handleExploreMore = () => {
        setDisplayedCount((prevCount) => Math.min(prevCount + 8, sample.length)); // Ensure it doesn't exceed the total data.
    };

    return (
        <div className="w-full mt-20 mb-4 pl-[2%] md:pl-[5%]">
            <div className="flex flex-col items-center gap-8">
                {/* Flash sales */}
                <div className="flex flex-row items-center w-full pr-[2%] md:pr-[5%]">
                    <div className='flex flex-row items-center w-full relative'>
                        <div className="flex flex-row justify-start w-[270px] md:w-[450px] lg:w-[600px] relative">
                            <div className="flex flex-col justify-start gap-6 w-fit mb-2">
                                <div className="flex flex-row items-center w-fit gap-4">
                                    <div className="w-3 h-6 md:w-4 md:h-8 lg:w-5 lg:h-10 rounded bg-[#DB4444]"></div>
                                    <h1 className="text-sm md:text-base font-semibold text-[#DB4444]">Today's</h1>
                                </div>
                                <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">Flash Sales</h1>
                            </div>

                            {/* Countdown Timer */}
                            <div className="absolute bottom-0 right-0 mb-2">
                                <CountdownTimer />
                            </div>
                        </div>

                        {/* Side arrows */}
                        <div className='absolute bottom-0 right-0 flex flex-row mb-2 w-auto gap-2'>
                            <button className='flex items-center justify-center w-6 h-6 md:w-9 md:h-9 lg:w-[46px] lg:h-[46px]' onClick={() => { handleScroll(-ITEM_WIDTH) }}>
                                <div className='flex items-center justify-center w-full h-full rounded-full bg-[#F5F5F5] hover:bg-slate-300'>
                                    <img src="/Home/LeftArrow.png" alt="LeftArrow" className='w-3 h-2.5 md:w-4 md:h-[14px]' />
                                </div>
                            </button>
                            <button className='flex items-center justify-center w-6 h-6 md:w-9 md:h-9 lg:w-[46px] lg:h-[46px]' onClick={() => { handleScroll(ITEM_WIDTH) }}>
                                <div className='flex items-center justify-center w-full h-full rounded-full bg-[#F5F5F5] hover:bg-slate-300'>
                                    <img src="/Home/RightArrow.png" alt="RightArrow" className='w-3 h-2.5 md:w-4 md:h-[14px]' />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Show lists */}
                <div ref={containerRef}
                    style={{
                        width: "100%",
                        overflowX: "scroll",
                        scrollBehavior: "smooth"
                    }} className='mb-5'>
                    <div className='w-full flex flex-row gap-6 mb-4 p-2'>
                        {sample.slice(0, 10).map((product) => (
                            <div
                                key={product.id}
                                className='w-fit h-fit flex flex-col gap-4 rounded-md'>

                                {/* Image */}
                                <div className='w-[270px] h-[250px] flex items-center justify-center bg-[#F5F5F5] rounded-md hover:scale-105 ease-in-out duration-300 relative group'>
                                    <div className='w-[180px] h-[170px] flex items-center justify-center'>
                                        <img src={product.image} alt="Playstation" className='w-full h-full object-contain' />
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
                                    {/* Discount price */}
                                    <div className='absolute top-3 left-3 w-14 h-7 flex items-center justify-center rounded-md bg-[#DB4444]'>
                                        <p className='text-sm font-normal text-white'>{product.discount}</p>
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
                </div>

                {/* See More */}
                <div className="w-full pr-[2%] md:pr-[5%]">
                    <div className='w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 md:gap-[30px] mb-2'>
                        {sample.slice(0, displayedCount).map((product) => (
                            <div key={product.id} className='w-fit h-fit flex flex-row md:flex-col gap-4 rounded-md'>
                                {/* Image */}
                                <div className='min-w-[220px] h-[250px] md:w-[270px] flex items-center justify-center rounded-md hover:scale-105 ease-in-out duration-300 bg-[#F5F5F5] group relative'>
                                    <div className='w-[180px] h-[170px] flex items-center justify-center'>
                                        <img src={product.image} alt="Playstation" className='w-full h-full object-contain' />
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
                                    {/* Discount price */}
                                    <div className='absolute top-3 left-3 w-14 h-7 flex items-center justify-center rounded-md bg-[#DB4444]'>
                                        <p className='text-sm font-normal text-white'>{product.discount}</p>
                                    </div>
                                    <div className='absolute bottom-0 w-full h-10 hidden md:flex bg-black rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
                </div>

                {/* Load More Button */}
                <div className='w-full pr-[2%] md:pr-[5%] flex justify-center items-center mb-10'>
                    {displayedCount < sample.length && (
                        <button
                            onClick={handleExploreMore}
                            className="w-[234px] h-14 rounded-md bg-[#DB4444] text-base font-medium text-white hover:bg-[#f19393]"
                        >
                            View All Products
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Todays;


