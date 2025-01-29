import React, { useState } from 'react'
import { AllProducts } from './../../Samples/AllProducts';

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


const OurProducts = () => {

    const sample = AllProducts;

    const [likedProduct, setLikedProduct] = useState({});
    const [seenProduct, setSeenProduct] = useState({});
    const [displayedCount, setDisplayedCount] = useState(8);

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
        <div className='w-full my-10 md:my-20 px-[2%] md:px-[5%]'>
            <div className="flex flex-col items-center gap-5 md:gap-[60px]">
                {/* Our products */}
                <div className='flex flex-row items-center w-full relative'>
                    <div className='flex flex-col justify-start gap-2 md:gap-5 w-fit mb-2'>
                        <div className="flex flex-row items-center w-fit gap-4">
                            <div className="w-3 h-6 md:w-4 md:h-8 lg:w-5 lg:h-10 rounded bg-primary"></div>
                            <h1 className="text-sm md:text-base font-semibold text-primary">Our Products</h1>
                        </div>
                        <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">Explore Our Products</h1>
                    </div>
                </div>

                {/* Sample products */}
                <div className='w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 md:gap-[30px] mb-2'>
                    {sample.slice(0, displayedCount).map((product) => (
                        <div key={product.id} className='w-fit h-fit flex flex-row md:flex-col gap-4 rounded-md'>
                            {/* Image */}
                            <div className='min-w-[220px] h-[250px] md:w-[270px] flex items-center justify-center rounded-md hover:scale-105 ease-in-out duration-300 bg-secondary group relative'>
                                <div className='w-[180px] h-[170px] flex items-center justify-center'>
                                    <img src={product.image} alt={product.name} className='w-full h-full object-contain' />
                                </div>
                                <div className='absolute top-3 right-3 w-[34px] h-[76px] flex flex-col items-center justify-center gap-2'>
                                    <div
                                        className={`w-[34px] h-[34px] flex items-center justify-center rounded-full ${likedProduct[product.id] ? "bg-primary" : "bg-white"
                                            } hover:bg-primary`}
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
                                        className={`w-[34px] h-[34px] flex items-center justify-center rounded-full ${seenProduct[product.id] ? "bg-primary" : "bg-white"
                                            } hover:bg-primary`}
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
                                <div className='absolute top-3 left-3 w-[52px] h-[28px] flex items-center justify-center bg-buttonSecondary rounded-md text-textSecondary'>
                                    New
                                </div>
                                <div className='absolute bottom-0 w-full h-10 hidden md:flex bg-black rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='w-full h-full text-base font-medium text-textSecondary cursor-pointer'>
                                        Add To Cart
                                    </button>
                                </div>
                            </div>

                            {/* Detail */}
                            <div className='w-fit h-fit flex flex-col gap-2 pl-1'>
                                <a href="#" className='w-fit text-base font-medium hover:scale-105 hover:underline duration-300'>{product.name}</a>
                                <div className='flex flex-col md:flex-row justify-center gap-2'>
                                    <p className='text-base font-medium text-primary'>{product.price}</p>
                                    <div className='flex flex-row gap-2'>
                                        {/* Star rating */}
                                        <div className='flex flex-row'>
                                            <StarRating totalStars={5} />
                                        </div>
                                        <p className='text-sm font-semibold text-textPrimary opacity-50'> ({product.starRating}) </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load more */}
                {displayedCount < sample.length && (
                    <button
                        onClick={handleExploreMore}
                        className='w-[234px] h-14 flex items-center justify-center bg-primary hover:bg-hoverButton rounded-md text-base font-medium text-textSecondary'
                    >
                        View All Products
                    </button>
                )}
            </div>
        </div>
    )
}

export default OurProducts