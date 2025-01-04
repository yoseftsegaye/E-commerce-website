import React, { useState } from 'react'
import { AccountMap } from './Roadmap'

const Account = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className='w-full px-[2%] md:px-[5%] mt-32 mb-14'>
            <div className='w-full h-5 flex flex-row items-center justify-between my-5'>
                <AccountMap />
                <div className='w-fit flex flex-row items-center justify-center gap-1'>
                    <p className='text-base font-normal'>Welcome!</p>
                    <p className='text-base font-normal text-[#DB4444]'>Mr Yosef</p>
                </div>
            </div>

            {/* Body */}
            <div className='w-full h-auto flex flex-row gap-5 lg:gap-20  my-14'>
                {/* Side titles */}
                <div className='hidden md:flex flex-col md:min-w-44 lg:min-w-48 h-fit gap-4'>
                    <div className='w-fit h-fit flex flex-col gap-2'>
                        <h1 className='text-base font-medium'>Manage My Account</h1>
                        <div className='w-fit h-fit flex flex-col gap-2 text-base font-normal opacity-50 md:pl-4 lg:pl-8'>
                            <a href="#" className='hover:scale-105'>My Profile</a>
                            <a href="#" className='hover:scale-105'>Address Book</a>
                            <a href="#" className='hover:scale-105'>My Payment Options</a>
                        </div>
                    </div>
                    <div className='w-fit h-fit flex flex-col gap-2'>
                        <h1 className='text-base font-medium'>My Orders</h1>
                        <div className='w-fit h-fit flex flex-col gap-2 text-base font-normal opacity-50 md:pl-4 lg:pl-8'>
                            <a href="#" className='hover:scale-105'>My Returns</a>
                            <a href="#" className='hover:scale-105'>My Cancellations</a>
                        </div>
                    </div>
                    <h1 className='text-base font-medium'>My WishList</h1>
                </div>
                {/* Edit your profile */}
                <div className='w-full h-fit flex flex-col gap-4 md:gap-6 px-[3%] lg:px-[5%] py-5 rounded-md shadow-[0px_1px_10px_rgba(0,0,0,0.05)]'>
                    <h1 className='text-xl font-medium text-[#DB4444]'>Edit Your Profile</h1>
                    <div className='w-full h-20 flex flex-row gap-4 lg:gap-12'>
                        <div className='w-1/2 h-full flex flex-col gap-2'>
                            <p className='text-base font-normal'>First Name</p>
                            <input
                                type="text"
                                placeholder='Md'
                                className='w-full h-12 bg-[#F5F5F5] px-3 rounded focus:outline-none capitalize'
                            />
                        </div>
                        <div className='w-1/2 h-full flex flex-col gap-2'>
                            <p className='text-base font-normal'>Last Name</p>
                            <input
                                type="text"
                                placeholder='Rimel'
                                className='w-full h-12 bg-[#F5F5F5] px-3 rounded focus:outline-none capitalize'
                            />
                        </div>
                    </div>
                    <div className='w-full h-fit flex flex-wrap md:flex-row md:flex-nowrap gap-4 lg:gap-12'>
                        <div className='w-full md:w-1/2 h-full flex flex-col gap-2'>
                            <p className='text-base font-normal'>Email</p>
                            <input
                                type="text"
                                placeholder='rimel1111@gmail.com'
                                className='w-full h-12 bg-[#F5F5F5] px-3 rounded focus:outline-none'
                            />
                        </div>
                        <div className='w-full md:w-1/2 h-full flex flex-col gap-2'>
                            <p className='text-base font-normal'>Address</p>
                            <input
                                type="text"
                                placeholder='kingston, 5236, United State'
                                className='w-full h-12 bg-[#F5F5F5] px-3 rounded focus:outline-none capitalize'
                            />
                        </div>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-4'>
                        <p className='text-base font-normal'>Password Changes</p>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Current Password"
                            className="w-full h-12 bg-[#F5F5F5] px-3 pr-10 rounded focus:outline-none"
                            autoComplete="current-password"
                            maxLength="128"
                            required
                            pattern=".{8,}"
                            title="Password must be at least 8 characters long."
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center"
                            onClick={togglePasswordVisibility}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? (
                                <img
                                    src="/path-to-hide-icon.svg"
                                    alt="Hide Password"
                                    className="w-6 h-6"
                                />
                            ) : (
                                <img
                                    src="/path-to-show-icon.svg"
                                    alt="Show Password"
                                    className="w-6 h-6"
                                />
                            )}
                        </button>

                        <input
                            type="text"
                            placeholder='New Password'
                            className='w-full h-12 bg-[#F5F5F5] px-3 rounded focus:outline-none'
                        />
                        <input
                            type="text"
                            placeholder='Confirm Password'
                            className='w-full h-12 bg-[#F5F5F5] px-3 rounded focus:outline-none'
                        />
                    </div>
                    <div className='w-full h-14 flex flex-row items-center justify-end gap-8'>
                        <button className='text-base font-normal hover:text-[#DB4444]'>Cancel</button>
                        <button className='w-40 h-10 md:w-44 md:h-12 lg:w-52 lg:h-14 bg-[#DB4444] rounded text-base font-normal text-white text-center'>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Account