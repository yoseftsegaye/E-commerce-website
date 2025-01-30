import React, { useState } from 'react'
import { ProductDetailMap } from './Roadmap'

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
                    fill={index < rating ? "yellow" : "black"}
                    className={`w-5 h-5 cursor-pointer opacity-${index < rating ? '100' : '50'} transition duration-200 ease-in-out hover:scale-125`}
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );
};

const ProductDetail = () => {

    const Samples = [
        { id: 1, image: "/Details/Image1.png", name: "Image1" },
        { id: 2, image: "/Details/Image2.png", name: "Image2" },
        { id: 3, image: "/Details/Image3.png", name: "Image3" },
        { id: 4, image: "/Details/Image4.png", name: "Image4" }
    ]

    const Colors = [
        { id: 1, color: "#A0BCE0", name: "blue" },
        { id: 2, color: "#E07575", name: "red" },
    ]

    const [color, setColor] = useState("");
    const handleColorClick = (colorName) => {
        setColor(colorName);
    };

    return (
        <div className='w-full px-[2%] md:px-[5%] mt-32'>
            <div className='w-fit h-5 flex items-center justify-center my-5'>
                <ProductDetailMap />
            </div>
            <div className='w-full h-auto flex flex-row gap-16 my-8 md:my-14'>
                <div className='w-fit h-fit flex flex-row gap-8'>
                    {/* Small sample images */}
                    <div className='w-fit h-fit flex flex-col gap-3'>
                        {Samples.map((sample) => (
                            <div key={sample.id} className='w-[170px] h-[138px] flex items-center justify-center bg-secondary rounded'>
                                <img
                                    src={sample.image}
                                    alt={sample.name}
                                    className='max-w-30 max-h-28 object-contain'
                                />
                            </div>
                        ))}
                    </div>
                    {/* Front image */}
                    <div className='w-[500px] h-auto flex items-center justify-center bg-secondary rounded'>
                        <img
                            src="/Details/FrontImage.png"
                            alt="Front Image"
                            className='max-w-[446px] max-h-80 object-contain'
                        />
                    </div>
                </div>
                <div className='w-full h-auto flex flex-col gap-10'>
                    <div className='w-full h-fit flex flex-col gap-7'>
                        <div className='w-full h-fit flex flex-col gap-5'>
                            <div className='w-full h-fit flex flex-col gap-4'>
                                <h1 className='text-2xl font-medium'>Havic HV G-92 Gamepad</h1>
                                <div className='flex flex-row gap-4'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <StarRating totalStars={5} />
                                        <p className='text-sm font-normal opacity-50'>(150 Reviews)</p>
                                    </div>
                                    <div className='flex flex-row items-center gap-4'>
                                        <p className='opacity-50'>|</p>
                                        <p className='text-sm font-normal opacity-60 text-buttonSecondary'> In Stock </p>
                                    </div>
                                </div>
                                <p className='text-2xl font-medium'>$192.00</p>
                            </div>
                            <p className='text-sm font-normal'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                        </div>
                        <div className='w-full h-[1px] rounded bg-black opacity-50'></div>
                        <div className='flex flex-row items-center gap-6'>
                            <p className='text-xl font-normal'> Colours: </p>
                            <div className='h-5 flex flex-row items-center gap-2'>
                                {Colors.map((choose) => (
                                    <div key={choose.id} className='w-5 h-5 flex items-center justify-center'>
                                        <button
                                            className={`w-full h-full flex items-center justify-center rounded-full bg-white ${color === choose.name ? "border-[3px] border-black" : ""}`}
                                            onClick={() => handleColorClick(choose.name)}
                                        >
                                            <div
                                                className={`flex items-center justify-center rounded-full transition-all duration-300 ease-in-out ${color === choose.name ? "w-3 h-3" : "w-full h-full"} `}
                                                style={{ backgroundColor: choose.color }}
                                            ></div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail