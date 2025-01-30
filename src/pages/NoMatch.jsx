import React from 'react'
import { ErrorMap } from './Roadmap'

const NoMatch = () => {
    return (
        <div className='w-full px-[2%] md:px-[5%] mt-32'>
            <div className='w-fit h-5 flex items-center justify-center my-5'>
                <ErrorMap />
            </div>
            <div className='w-full h-auto flex flex-col items-center justify-center gap-20 my-20'>
                <div className='w-full h-fit flex flex-col items-center justify-center text-center gap-10'>
                    <p className='text-5xl md:text-7xl lg:text-[110px] font-medium'> 404 Not Found </p>
                    <p className='text-base font-normal'> Your visited page not found. You may go home page. </p>
                </div>
                <a
                    href="#"
                    className='w-60 md:w-72 lg:w-80 h-14 rounded flex items-center justify-center bg-primary hover:bg-hoverButton text-textSecondary'> Back to home page</a>
            </div>
        </div>
    )
}

export default NoMatch