import React from 'react'

const Information = () => {
    return (
        <div className='w-full h-fit flex justify-center items-center my-10 md:my-20 px-[2%] md:px-[5%]'>
            <div className='w-[943px] h-fit flex flex-wrap items-center justify-center gap-8'>
                {/* Contents */}
                <div className='min-w-[249px] h-fit flex flex-col flex-nowrap items-center justify-center gap-6'>
                    <div className='w-20 h-20 flex items-center justify-center relative'>
                        <div className='absolute w-full h-full flex items-center justify-center rounded-full bg-[#2F2E30] opacity-30'></div>
                        <div className='w-[58px] h-[58px] flex items-center justify-center rounded-full bg-black'>
                            <img src="/Information/Delivery.png" alt="Delivery" className='w-10 h-10 object-contain' />
                        </div>
                    </div>
                    <div className='w-fit h-fit flex flex-col items-center justify-center gap-1'>
                        <h1 className='text-xl font-semibold '>FRE AND FAST DELIVERY</h1>
                        <p className='text-sm font-normal'>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className='min-w-[249px] h-fit flex flex-col flex-nowrap items-center justify-center gap-6'>
                    <div className='w-20 h-20 flex items-center justify-center relative'>
                        <div className='absolute w-full h-full flex items-center justify-center rounded-full bg-[#2F2E30] opacity-30'></div>
                        <div className='w-[58px] h-[58px] flex items-center justify-center rounded-full bg-black'>
                            <img src="/Information/Customer-service.png" alt="Customer-service" className='w-10 h-10 object-contain' />
                        </div>
                    </div>
                    <div className='w-fit h-fit flex flex-col items-center justify-center gap-1'>
                        <h1 className='text-xl font-semibold '>24/7 CUSTOMER SERVICE</h1>
                        <p className='text-sm font-normal'>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className='min-w-[249px] h-fit flex flex-col flex-nowrap items-center justify-center gap-6'>
                    <div className='w-20 h-20 flex items-center justify-center relative'>
                        <div className='absolute w-full h-full flex items-center justify-center rounded-full bg-[#2F2E30] opacity-30'></div>
                        <div className='w-[58px] h-[58px] flex items-center justify-center rounded-full bg-black'>
                            <img src="/Information/Secure.png" alt="Guarante" className='w-10 h-10 object-contain' />
                        </div>
                    </div>
                    <div className='w-fit h-fit flex flex-col items-center justify-center gap-1'>
                        <h1 className='text-xl font-semibold '>MONEY BACK GUARANTEE</h1>
                        <p className='text-sm font-normal'>we return money within 30 days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information