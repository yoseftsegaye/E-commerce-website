import React, { useState } from 'react'
import { CheckoutMap } from './Roadmap'
import { AllProducts } from '../Samples/AllProducts'

const CheckOut = () => {

    const cartProduct = AllProducts

    const [bankSelectedOption, setBankSelectedOption] = useState("");
    const [cashSelectedOption, setCashSelectedOption] = useState("");

    const bankHandleChange = (event) => {
        setBankSelectedOption(event.target.value);
    };
    const handleChangeToCash = (event) => {
        setCashSelectedOption(event.target.value);
    };

    return (
        <div className='w-full px-[2%] md:px-[5%] mt-32 mb-14'>
            <div className='w-fit h-5 flex items-center justify-center mt-5'>
                <CheckoutMap />
            </div>
            <h1 className='text-4xl font-medium my-10'>Billing Details</h1>
            <div className='w-full h-auto flex flex-wrap md:flex-nowrap md:flex-row justify-between gap-8'>
                <div className='w-[450px] min-w-64 h-fit flex flex-col items-center gap-6'>
                    <div className='w-full h-fit flex flex-col items-center gap-4 md:gap-8'>
                        <div className='w-full h-20 flex flex-col gap-2'>
                            <div className='w-fit h-fit relative inline-block'>
                                <p className='text-base font-normal opacity-40'>First Name</p>
                                <span className="absolute top-1 right-[-6px] text-primary text-xs">*</span>
                            </div>
                            <input type="text" className='w-full h-12 bg-secondary px-3 rounded focus:outline-none' />
                        </div>
                        <div className='w-full h-20 flex flex-col gap-2'>
                            <div className='w-fit h-fit'>
                                <p className='text-base font-normal opacity-40'>Company Name</p>
                            </div>
                            <input type="text" className='w-full h-12 bg-secondary px-3 rounded focus:outline-none' />
                        </div>
                        <div className='w-full h-20 flex flex-col gap-2'>
                            <div className='w-fit h-fit relative inline-block'>
                                <p className='text-base font-normal opacity-40'>Street Address</p>
                                <span className="absolute top-1 right-[-6px] text-primary text-xs">*</span>
                            </div>
                            <input type="text" className='w-full h-12 bg-secondary px-3 rounded focus:outline-none' />
                        </div>
                        <div className='w-full h-20 flex flex-col gap-2'>
                            <div className='w-fit h-fit'>
                                <p className='text-base font-normal opacity-40'>Apartment, floor, etc. (optional)</p>
                            </div>
                            <input type="text" className='w-full h-12 bg-secondary px-3 rounded focus:outline-none' />
                        </div>
                        <div className='w-full h-20 flex flex-col gap-2'>
                            <div className='w-fit h-fit relative inline-block'>
                                <p className='text-base font-normal opacity-40'>Town/City</p>
                                <span className="absolute top-1 right-[-6px] text-primary text-xs">*</span>
                            </div>
                            <input type="text" className='w-full h-12 bg-secondary px-3 rounded focus:outline-none' />
                        </div>
                        <div className='w-full h-20 flex flex-col gap-2'>
                            <div className='w-fit h-fit relative inline-block'>
                                <p className='text-base font-normal opacity-40'>Phone Number</p>
                                <span className="absolute top-1 right-[-6px] text-primary text-xs">*</span>
                            </div>
                            <input type="text" className='w-full h-12 bg-secondary px-3 rounded focus:outline-none' />
                        </div>
                        <div className='w-full h-20 flex flex-col gap-2'>
                            <div className='w-fit h-fit relative inline-block'>
                                <p className='text-base font-normal opacity-40'>Email Address</p>
                                <span className="absolute top-1 right-[-6px] text-primary text-xs">*</span>
                            </div>
                            <input type="text" className='w-full h-12 bg-secondary px-3 rounded focus:outline-none' />
                        </div>
                    </div>
                    {/* Checkbox */}
                    <div className='w-full h-6 flex flex-row items-center gap-4'>
                        <input
                            type="checkbox"
                            className="form-checkbox w-6 h-6 accent-primary border-gray-300 rounded"
                        />
                        <p className='text-base font-normal'>Save this information for faster check-out next time</p>
                    </div>
                </div>
                {/* Detail */}
                <div className='w-full md:max-w-[550px] md:min-w-[400px] h-fit flex flex-col gap-2 items-start md:gap-4 py-10'>
                    <div className='w-[90%] lg:w-[75%] h-fit flex flex-col gap-2 md:gap-4'>
                        {cartProduct.slice(0, 4).map((cart) => (
                            <div
                                key={cart.id}
                                className='w-full h-14 flex flex-row items-center justify-center gap-2'>
                                <div className='min-w-14 h-14 flex items-center justify-center'>
                                    <img
                                        src={cart.image}
                                        alt={cart.name}
                                        className='w-[50px] h-[50px] object-contain'
                                    />
                                </div>
                                <div className='w-full h-6 flex flex-row items-center justify-between'>
                                    <h1 className='text-base font-normal'>{cart.name}</h1>
                                    <p className='text-base font-normal w-1/4 text-center'>{cart.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='w-[90%] h-fit flex flex-col gap-4 py-5'>
                        <div className='w-full h-fit flex flex-col gap-4'>
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
                        </div>
                    </div>
                    <div className='w-[90%] h-7 flex flex-row items-center justify-between'>
                        <div className='w-20 h-6 flex flex-row items-center'>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="options"
                                    value="option1"
                                    checked={bankSelectedOption === "option1"}
                                    onChange={bankHandleChange}
                                    className="form-radio h-6 w-6 accent-black border-gray-300 hover:cursor-pointer"
                                />
                                <span className="text-base font-normal">Bank</span>
                            </label>
                        </div>
                        <div className='w-fit h-7 flex flex-row items-center gap-2'>
                            <button className='w-[42px] h-7'>
                                <img src="/Banks/Bkash.png" alt="Bkash" className='w-10 h-5 object-contain hover:scale-110' />
                            </button>
                            <button className='w-[42px] h-7'>
                                <img src="/Banks/Visa.png" alt="Visa" className='w-10 h-5 object-contain hover:scale-110' />
                            </button>
                            <button className='w-[42px] h-7'>
                                <img src="/Banks/Mastercard.png" alt="Mastercard" className='w-10 h-5 object-contain hover:scale-110' />
                            </button>
                            <button className='w-[42px] h-7'>
                                <img src="/Banks/Nagad.png" alt="Nagad" className='w-10 h-5 object-contain hover:scale-110' />
                            </button>
                        </div>
                    </div>
                    <div className='w-[90%] h-6 flex flex-row items-center text-center'>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="options"
                                value="option1"
                                checked={cashSelectedOption === "option1"}
                                onChange={handleChangeToCash}
                                className="form-radio h-6 w-6 accent-black border-gray-300 hover:cursor-pointer"
                            />
                            <span className="text-base font-normal">Cash on deliver</span>
                        </label>
                    </div>
                    <div className='w-[90%] h-14 flex flex-row items-center gap-4'>
                        <div className='w-[300px] min-w-52 h-full rounded border border-gray-300'>
                            <input
                                type="text"
                                placeholder='Coupon Code'
                                className='w-full h-full px-3'
                            />
                        </div>
                        <button className='w-[211px] h-full bg-primary hover:bg-hoverButton rounded text-base font-normal text-textSecondary text-center'>
                            Apply Coupon
                        </button>
                    </div>
                    <button className='w-[190px] h-14 bg-primary hover:bg-hoverButton rounded text-base font-normal text-textSecondary text-center'>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut