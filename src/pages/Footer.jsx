import React from 'react'

const Footer = () => {
    return (
        <div className='w-full  bg-black text-white pb-4'>
            <div className='w-full h-fit flex items-center justify-center px-[2%] md:px-[5%]'>
                <div className='w-full h-fit flex flex-wrap justify-center gap-20 my-14'>
                    {/* Exclusive */}
                    <div className='min-w-[217px] h-fit flex flex-col gap-4'>
                        <div className='w-fit h-fit flex flex-col gap-6'>
                            <img src="/Footer/Logo.png" alt="logo" className='w-[118px] h-6 object-contain' />
                            <h1 className='text-xl font-medium'>Subscribe</h1>
                            <p className='text-base font-normal'>Get 10% off your first order</p>
                        </div>
                        <div className='w-[217px] h-12 relative'>
                            <input
                                type="text"
                                placeholder='Enter your email'
                                className='w-full h-12 pl-2 pr-10 border-2 border-white rounded-md bg-black text-white'
                            />
                            <img src="/Footer/Subscribe.png" alt="Subscribe" className='absolute top-3 right-2 w-6 h-6 object-contain' />
                        </div>
                    </div>

                    {/* Support */}
                    <div className='w-[175px] h-fit flex flex-col gap-6'>
                        <h1 className='text-xl font-medium'>Support</h1>
                        <div className='w-full flex flex-col gap-4'>
                            <p className='text-base font-normal'>111 Bijoy Sarani, Dhaka, Dh 1515, Bangladesh</p>
                            <p className='text-base font-normal'>exclusive@gmail.com</p>
                            <p className='text-base font-normal'>+88015-88888-9999</p>
                        </div>
                    </div>
                    {/* Account */}
                    <div className='w-32 h-fit flex flex-col gap-6'>
                        <h1 className='text-xl font-medium'>Account</h1>
                        <div className='w-full flex flex-col gap-4'>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>My Account</a>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>Login/Register</a>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>Cart</a>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>Wishlist</a>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>Shop</a>
                        </div>
                    </div>
                    {/* Quick links */}
                    <div className='w-[110px] h-fit flex flex-col gap-6'>
                        <h1 className='text-xl font-medium'>Quick Link</h1>
                        <div className='w-full flex flex-col gap-4'>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>Privacy Policy</a>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>Terms Of Use</a>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>FAQ</a>
                            <a href='#' className='text-base font-normal hover:scale-105 transition-transform duration-200'>Contact</a>
                        </div>
                    </div>
                    {/* Download App */}
                    <div className='w-[200px] h-fit flex flex-col gap-6'>
                        <div className='w-full h-fit flex flex-col gap-6'>
                            <h1 className='text-xl font-medium'>Download App</h1>
                            <div className='w-full flex flex-col gap-2'>
                                <p className='text-xs font-normal opacity-70'>Save $3 with App New User Only</p>
                                <div className='w-full flex flex-row gap-2'>
                                    <div className='w-20 h-20 flex items-center justify-center'>
                                        <img src="/Footer/Qrcode.png" alt="Qrcode" className='w-[76px] h-[766px] object-contain' />
                                    </div>
                                    <div className='w-[110px] h-20 flex flex-col gap-1'>
                                        <a
                                            href='https://play.google.com/store/apps?hl=en'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='w-full h-10 flex items-center justify-center hover:scale-105 transition-transform duration-200'>
                                            <img src="/Footer/GooglePlay.png" alt="GooglePlay" className='w-[104px] h-[30px] object-contain' />
                                        </a>
                                        <a
                                            href='https://www.apple.com/app-store/'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='w-full h-10 flex items-center justify-center hover:scale-105 transition-transform duration-200'>
                                            <img src="/Footer/AppStore.png" alt="AppStore" className='w-[104px] h-[34px] object-contain' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-6 flex flex-row gap-6'>
                            <a
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-200'>
                                <img src="/Footer/Facebook.png" alt="Facebook" className='w-[18px] h-[18px] object-contain' />
                            </a>
                            <a
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-200'>
                                <img src="/Footer/Twitter.png" alt="Twitter" className='w-[18px] h-[18px]  object-contain' />
                            </a>
                            <a
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-200'>
                                <img src="/Footer/Instagram.png" alt="Instagram" className='w-[18px] h-[18px] object-contain' />
                            </a>
                            <a
                                href='#'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-200'>
                                <img src="/Footer/Linkedin.png" alt="Linkedin" className='w-[18px] h-[18px] object-contain' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative w-full h-10 flex justify-center border-t border-white/50'>
                <div className='absolute bottom-0 w-fit h-6 flex flex-row items-center justify-center gap-3 opacity-70'>
                    <div className='w-5 h-5 flex items-center justify-center'>
                        <img src="/Footer/Copyright.png" alt="Copyright" className='w-4 h-4 object-contain' />
                    </div>
                    <p className='text-base font-normal'>Copyright Rimel 2022, All right reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer