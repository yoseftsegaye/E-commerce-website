import React, { useState } from 'react'
import { CartMap } from './Roadmap'
import { AllProducts } from './../Samples/AllProducts';

const Cart = () => {

    const cartProduct = AllProducts;
    const [quantities, setQuantities] = useState(
        cartProduct.reduce((acc, product) => {
            acc[product.id] = 1; // Default quantity is 1
            return acc;
        }, {})
    );

    const handleChange = (e, id) => {
        const numericValue = parseInt(e.target.value, 10);

        if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 100) {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [id]: numericValue,
            }));
        } else if (e.target.value === "") {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [id]: "",
            }));
        }
    };

    return (
        <div className='w-full px-[2%] md:px-[5%] mt-32 mb-14'>
            <div className='w-fit h-5 flex items-center justify-center my-5'>
                <CartMap />
            </div>
            <div className='w-full h-auto flex flex-col gap-10 md:gap-15 lg:gap-20 mt-10'>
                <div className='w-full h-auto flex flex-col gap-4 md:gap-6'>
                    <div className='w-full h-fit flex flex-col gap-6 md:gap-10'>
                        {/* Titles section */}
                        <div className='w-full h-16 px-[4%] py-5 rounded-md shadow-[0px_1px_10px_rgba(0,0,0,0.05)]'>
                            <div className='w-full h-6 flex flex-row items-center justify-between text-sm font-medium md:text-base md:font-normal'>
                                <p className=' w-1/4 min-w-44'>Product</p>
                                <p className='w-1/4 text-center'>Price</p>
                                <p className='w-1/4 text-center'>Quantity</p>
                                <p className=' w-1/4 text-right'>Subtotal</p>
                            </div>
                        </div>

                        {/* Cart section */}
                        <div className='w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 md:gap-[30px] mb-2'>
                            {cartProduct.slice(0, 4).map((cart) => (
                                <div
                                    key={cart.id}
                                    className='w-full h-24 flex flex-row items-center justify-between px-[2%] md:px-[4%] py-5 rounded-md shadow-[0px_1px_10px_rgba(0,0,0,0.05)]'
                                >
                                    <div className='w-1/4 min-w-44 h-14 flex flex-row items-center gap-1 md:gap-2 relative'>
                                        <div className='min-w-14 h-14 flex items-center justify-start'>
                                            <img
                                                src={cart.image}
                                                alt={cart.name}
                                                className='w-[54px] h-[54px] object-contain'
                                            />
                                        </div>
                                        <div className='absolute top-0 left-0 w-6 h-6 flex items-center justify-center'>
                                            <button className='w-[18px] h-[18px] flex items-center justify-center bg-[#DB4444] rounded-full hover:scale-110'>
                                                <img
                                                    src='/Cancel.png'
                                                    alt='cancel'
                                                    className='w-2 h-2 object-contain'
                                                />
                                            </button>
                                        </div>
                                        <h1 className='text-base font-normal'>{cart.name}</h1>
                                    </div>
                                    <p className='text-base font-normal w-1/4 text-center'>{cart.price}</p>

                                    {/* Quantity */}

                                    <div className="w-1/4 flex items-center justify-center text-base font-normal">
                                        <input
                                            type="number"
                                            value={quantities[cart.id] || ""}
                                            onChange={(e) => handleChange(e, cart.id)}
                                            min="1"
                                            max="100"
                                            className="w-16 md:w-[72px] h-11 border border-gray-300 rounded text-center"
                                        />
                                    </div>
                                    {/* Total price */}
                                    <p className='text-base font-normal w-1/4 text-right'>{cart.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='w-full h-14 flex flex-row items-center justify-between'>
                        <button className='w-32 md:w-40 lg:w-52 h-full text-center border border-gray-300 rounded hover:scale-105'>Return To Shop</button>
                        <button className='w-32 md:w-40 lg:w-52 h-full text-center border border-gray-300 rounded hover:scale-105'>Update Cart</button>
                    </div>
                </div>
                <div className='w-full h-auto flex flex-wrap md:flex-row justify-between gap-2'>
                    <div className='w-fit h-14 flex flex-row items-center gap-4'>
                        {/* Coupon code */}
                        <div className='max-w-72 h-full rounded border border-gray-300'>
                            <input
                                type="text"
                                placeholder='Coupon Code'
                                className='w-full h-full px-3'
                            />
                        </div>
                        <button className='w-32 md:w-40 lg:w-52 h-full bg-[#DB4444] rounded text-base font-normal text-white text-center'>
                            Apply Coupon
                        </button>
                    </div>
                    <div className='w-[470px] h-fit flex flex-col gap-5 px-3 py-5 border-2 border-black rounded'>
                        <h1 className='text-xl font-medium'> Cart Total</h1>
                        <div className='w-full h-fit flex flex-col gap-3'>
                            <div className='w-full h-9 flex items-center border-b-2 border-black/40'>
                                <div className='w-full h-full flex flex-row items-center justify-between'>
                                    <p className='text-base font-normal'>Subtotal:</p>
                                    <p className='text-base font-normal'>$3426</p>
                                </div>
                            </div>
                            <div className='w-full h-9 flex items-center border-b-2 border-black/40'>
                                <div className='w-full h-full flex flex-row items-center justify-between'>
                                    <p className='text-base font-normal'>Shipping:</p>
                                    <p className='text-base font-normal'>Free</p>
                                </div>
                            </div>
                            <div className='w-full h-9 flex items-center'>
                                <div className='w-full h-full flex flex-row items-center justify-between'>
                                    <p className='text-base font-normal'>Total:</p>
                                    <p className='text-base font-normal'>$3426</p>
                                </div>
                            </div>
                            <div className='w-full h-14 flex items-center justify-center'>
                                <button className='w-52 h-full bg-[#DB4444] rounded text-base font-normal text-white text-center'>
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart






