import React, { useState } from 'react'
import { ContactMap } from './Roadmap'

const Contact = ({ onSend }) => {

    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <div className='w-full px-[2%] md:px-[5%] mt-32'>
            <div className='w-fit h-5 flex items-center justify-center my-5'>
                <ContactMap />
            </div>
            <div className='w-full h-auto flex flex-col lg:flex-row gap-8 my-8 md:my-14'>
                {/* Contacts */}
                <div className='w-full lg:w-fit h-auto px-2 md:px-4 lg:px-6 md:py-8 flex items-center rounded-md md:shadow-[0px_1px_10px_rgba(0,0,0,0.05)]'>
                    <div className='w-full lg:w-[250px] h-fit flex flex-col gap-8'>
                        <div className='w-fit h-fit flex flex-col gap-6'>
                            <div className='flex flex-row items-center gap-4'>
                                <div className='w-10 h-10 rounded-full flex items-center justify-center bg-primary'>
                                    <img src="/Phone.png" alt="Call" className='w-5 h-5 object-contain' />
                                </div>
                                <p className='text-base font-medium'>Call To Us</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm font-normal'> We are available 24/7, 7 days a week. </p>
                                <p className='text-sm font-normal'> Phone: +8801611112222 </p>
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-black/50 rounded-md'></div>
                        <div className='w-full h-fit flex flex-col gap-6'>
                            <div className='flex flex-row items-center gap-4'>
                                <div className='w-10 h-10 rounded-full flex items-center justify-center bg-primary'>
                                    <img src="/Email.png" alt="Call" className='w-5 h-5 object-contain' />
                                </div>
                                <p className='text-base font-medium'>Write To Us</p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm font-normal'> Fill out our form and we will contact you within 24 hours. </p>
                                <p className='text-sm font-normal'> Emails: customer@exclusive.com </p>
                                <p className='text-sm font-normal'> Emails: support@exclusive.com </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Message */}
                <div className='w-full h-auto px-2 md:px-4 lg:px-6 md:py-8 flex rounded-md md:shadow-[0px_1px_10px_rgba(0,0,0,0.05)]'>
                    <div className='w-full h-full flex flex-col gap-4 md:gap-8'>
                        <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
                            <div className='w-80 lg:w-1/3 h-12 relative inline-block'>
                                <input
                                    type="text"
                                    placeholder='Your Name *'
                                    className='w-full h-full bg-secondary rounded px-3 focus:outline-none required:'
                                />
                            </div>
                            <div className='w-80 lg:w-1/3 h-12 relative inline-block'>
                                <input
                                    type="text"
                                    placeholder='Your Email *'
                                    className='w-full h-full bg-secondary rounded px-3 focus:outline-none required:'
                                />
                            </div>
                            <div className='w-80 lg:w-1/3 h-12 relative inline-block'>
                                <input
                                    type="text"
                                    placeholder='Your Phone *'
                                    className='w-full h-full bg-secondary rounded px-3 focus:outline-none required:'
                                />
                            </div>
                        </div>
                        {/* Input message */}
                        <div className='w-full h-60 lg:h-full flex flex-col flex-grow bg-secondary rounded-md'>
                            <textarea
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full flex-grow border-none focus:ring-0 p-3 bg-secondary resize-none focus:outline-none"
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            />
                        </div>
                        <div className='w-full flex justify-end'>
                            <button onClick={handleSend} className='w-44 h-10 md:h-14 flex items-center justify-center bg-primary hover:bg-hoverButton rounded-md text-textSecondary text-base font-medium'>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact