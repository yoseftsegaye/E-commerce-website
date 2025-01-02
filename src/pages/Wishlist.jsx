import React, { useState } from 'react'
import { WishList } from '../Samples/WishList'
import { Products } from '../Samples/Products';

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


const Wishlist = () => {

    const content = WishList
    const sample = Products

    const [seenProduct, setSeenProduct] = useState({});
    const [displayedCount, setDisplayedCount] = useState(0);

    const toggleSeen = (productId) => {
        setSeenProduct((prev) => ({
            ...prev,
            [productId]: !prev[productId], // Toggle the liked state for the specific product.
        }));
    };

    const handleExploreMore = () => {
        setDisplayedCount((prevCount) => Math.min(prevCount + 8, sample.length));
    };

    return (
        <div className='w-full px-[2%] md:px-[5%] mt-32 mb-14'>
            <div className='w-full h-fit flex flex-col gap-10 md:gap-20'>
                {/* Wishlist */}
                <div className='w-full flex flex-col items-center gap-10 md:gap-[60px]'>
                    <div className='w-full h-14 flex flex-row items-center justify-between'>
                        <h1 className='text-xl font-normal'>Wishlist()</h1>
                        <button className='w-40 h-14 md:w-56 flex items-center justify-center rounded-md border-2 border-black hover:scale-105 hover:text-white hover:bg-[#DB4444]'>
                            Move All To Bag
                        </button>
                    </div>
                    {/* Lists */}
                    <div className='w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 md:gap-[30px] mb-2'>
                        {content.map((product) => (
                            <div
                                key={product.id}
                                className='w-fit h-fit flex flex-row md:flex-col gap-4 rounded-md'>

                                {/* Image */}
                                <div className='min-w-[220px] h-[250px] md:w-[270px] flex items-center justify-center rounded-md hover:scale-105 ease-in-out duration-300 bg-[#F5F5F5] group relative'>
                                    <div className='w-[180px] h-[170px] flex items-center justify-center'>
                                        <img src={product.image} alt={product.image} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='absolute top-3 right-3 w-[34px] h-[34px] flex items-center justify-center'>
                                        <div
                                            className={`w-full h-full flex items-center justify-center rounded-full hover:bg-[#DB4444]`}
                                        >
                                            <button>
                                                <img
                                                    src="/Delete.png"
                                                    alt="Heart"
                                                    className={`w-6 h-6`}
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    {product.discount && (
                                        <div className='absolute top-3 left-3 w-14 h-7 flex items-center justify-center rounded-md bg-[#DB4444]'>
                                            <p className='text-sm font-normal text-white'>{product.discount}</p>
                                        </div>
                                    )}

                                    <div className='absolute bottom-0 w-full h-10 bg-black rounded-b-md transition-opacity duration-300'>
                                        <button className='w-full h-full text-base font-medium text-white cursor-pointer'>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>

                                {/* Detail */}
                                <div className='w-fit h-fit flex flex-col gap-2 pl-1'>
                                    <a href="#" className='w-fit text-base font-medium hover:scale-105 hover:underline duration-300'>{product.name}</a>
                                    <div className='flex flex-row items-center gap-3'>
                                        <p className='text-base font-medium text-[#DB4444]'>{product.newPrice}</p>
                                        <p className='text-base font-medium text-black opacity-50 line-through'>{product.oldPrice}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Just for you */}
                <div className='w-full flex flex-col items-center gap-10 md:gap-[60px]'>
                    <div className='w-full h-14 flex flex-row items-center justify-between'>
                        <div className="flex flex-row items-center w-fit h-10 gap-4">
                            <div className="w-3 h-6 md:w-4 md:h-8 lg:w-5 lg:h-10 rounded bg-[#DB4444]"></div>
                            <h1 className="text-base md:text-xl font-normal">Just For You</h1>
                        </div>
                        {/* Load More Button */}
                        {displayedCount < sample.length && (
                            <button
                                onClick={handleExploreMore}
                                className='w-24 h-14 md:w-36 flex items-center justify-center rounded-md border-2 border-black hover:scale-105 hover:text-white hover:bg-[#DB4444]'>
                                See All
                            </button>
                        )}
                    </div>

                    {/* Samples */}
                    <div className='w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 md:gap-[30px] mb-2'>
                        {sample.slice(0, 4).map((product) => (
                            <div
                                key={product.id}
                                className='w-fit h-fit flex flex-row md:flex-col gap-4 rounded-md'>

                                {/* Image */}
                                <div className='min-w-[220px] h-[250px] md:w-[270px] flex items-center justify-center rounded-md hover:scale-105 ease-in-out duration-300 bg-[#F5F5F5] group relative'>
                                    <div className='w-[180px] h-[170px] flex items-center justify-center'>
                                        <img src={product.image} alt={product.image} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='absolute top-3 right-3 w-[34px] h-[34px] flex items-center justify-center'>
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

                                    {product.discount && (
                                        <div className='absolute top-3 left-3 w-14 h-7 flex items-center justify-center rounded-md bg-[#DB4444]'>
                                            <p className='text-sm font-normal text-white'>{product.discount}</p>
                                        </div>
                                    )}

                                    <div className='absolute bottom-0 w-full h-10 bg-black rounded-b-md transition-opacity duration-300'>
                                        <button className='w-full h-full text-base font-medium text-white cursor-pointer'>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>

                                {/* Detail */}
                                <div className='w-fit h-fit flex flex-col gap-2 pl-1'>
                                    <a href="#" className='w-fit text-base font-medium hover:scale-105 hover:underline duration-300'>{product.name}</a>
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

                    {/* More samples */}
                    <div className='w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 md:gap-[30px] mb-2'>
                        {sample.slice(0, displayedCount).map((product) => (
                            <div
                                key={product.id}
                                className='w-fit h-fit flex flex-row md:flex-col gap-4 rounded-md'>

                                {/* Image */}
                                <div className='min-w-[220px] h-[250px] md:w-[270px] flex items-center justify-center rounded-md hover:scale-105 ease-in-out duration-300 bg-[#F5F5F5] group relative'>
                                    <div className='w-[180px] h-[170px] flex items-center justify-center'>
                                        <img src={product.image} alt={product.image} className='w-full h-full object-contain' />
                                    </div>
                                    <div className='absolute top-3 right-3 w-[34px] h-[34px] flex items-center justify-center'>
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

                                    {product.discount && (
                                        <div className='absolute top-3 left-3 w-14 h-7 flex items-center justify-center rounded-md bg-[#DB4444]'>
                                            <p className='text-sm font-normal text-white'>{product.discount}</p>
                                        </div>
                                    )}

                                    <div className='absolute bottom-0 w-full h-10 bg-black rounded-b-md transition-opacity duration-300'>
                                        <button className='w-full h-full text-base font-medium text-white cursor-pointer'>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>

                                {/* Detail */}
                                <div className='w-fit h-fit flex flex-col gap-2 pl-1'>
                                    <a href="#" className='w-fit text-base font-medium hover:scale-105 hover:underline duration-300'>{product.name}</a>
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
            </div>
        </div>
    )
}

export default Wishlist