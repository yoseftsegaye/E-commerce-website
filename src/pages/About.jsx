import React, { useState } from 'react'
import { AboutMap } from './Roadmap'
import Information from './homePage/Information';

const SocialMediaLinks = ({ links }) => {
    const platforms = [
        { id: "twitter", icon: "/Footer/Twitter.png" },
        { id: "instagram", icon: "/Footer/Instagram.png" },
        { id: "linkedin", icon: "/Footer/Linkedin.png" },
    ];

    return (
        <div className="w-fit h-6 flex flex-row gap-4">
            {platforms.map(({ id, icon }) =>
                links[id] ? (
                    <a
                        key={id}
                        href={links[id]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <img src={icon} alt={id} className="w-full h-full object-contain filter invert" />
                    </a>
                ) : null
            )}
        </div>
    );
};

const About = () => {

    const catagory = [
        { id: 1, image: '/About/Sallers.png', name: "Saller", value: "10.5k", description: "Sallers active our site" },
        { id: 2, image: '/About/Monthly.png', name: "Monthly", value: "33k", description: "Monthly Product Sale" },
        { id: 3, image: '/About/Customers.png', name: "Customer", value: "45.5k", description: "Customer active in our site" },
        { id: 4, image: '/About/Sale.png', name: "Sale", value: "25k", description: "Anual gross sale in our site" },
    ]

    const [activeLink, setActiveLink] = useState("Monthly");
    const handleCategoryClick = (categoryName) => {
        setActiveLink(categoryName);
    };

    return (
        <div className='w-full pl-[2%] md:pl-[5%] mt-32 mb-14'>
            <div className='w-fit h-5 flex items-center justify-center my-5'>
                <AboutMap />
            </div>
            <div className='w-full h-fit flex fex-row items-center justify-between gap-6 lg:gap-10'>
                <div className='w-full md:w-[525px] h-fit flex flex-col justify-start gap-10'>
                    <h1 className='text-5xl font-semibold'>Our Story</h1>
                    <div className='w-full h-fit flex flex-col justify-start gap-6'>
                        <p className='text-base font-normal'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p className='text-base font-normal'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                </div>
                <div className='hidden md:flex w-[700px] h-fit items-center justify-end'>
                    <img src="/About/About.png" alt="About" className='w-full h-full object-contain' />
                </div>
            </div>

            <div className='w-full h-fit flex flex-wrap items-center justify-center gap-8 pr-[2%] md:pr-[5%] my-20'>
                {/* Contents */}
                {catagory.map((sample) => (
                    <button
                        key={sample.id}
                        onClick={() => setActiveLink(sample.name)}
                        className={`min-w-[270px] h-60 flex flex-col flex-nowrap items-center justify-center border-2 border-black/30 rounded gap-6 ${activeLink === sample.name ? "bg-primary" : ""}`}>
                        <div
                            onClick={() => handleCategoryClick(sample.name)}
                            className={`w-20 h-20 flex items-center justify-center relative`}>
                            <div className={`absolute w-full h-full flex items-center justify-center rounded-full bg-[#2F2E30] opacity-30 ${activeLink === sample.name ? "filter invert" : ""
                                }`}></div>
                            <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-black z-10 ${activeLink === sample.name ? "filter invert" : ""
                                }`}>
                                <img src={sample.image} alt={sample.name} className={`w-8 h-8 object-contain ${activeLink === sample.name ? "filter invert-0" : ""
                                    }`} />
                            </div>
                        </div>
                        <div className='w-fit h-fit flex flex-col items-center justify-center gap-3'>
                            <h1 className={`text-3xl font-bold  ${activeLink === sample.name ? "filter invert" : ""
                                }`}>{sample.value}</h1>
                            <p className={`text-base font-normal  ${activeLink === sample.name ? "filter invert" : ""
                                }`}>{sample.description}</p>
                        </div>
                    </button>
                ))}
            </div>

            <div className="w-full h-fit flex flex-wrap md:flex-nowrap md:flex-row items-center justify-center pr-[2%] md:pr-[5%] gap-4 lg:gap-8">
                {/* Profile for Tom Cruise */}
                <div className="w-[370px] h-fit flex flex-col justify-center gap-8">
                    <div className="w-full h-[430px] flex items-end justify-center bg-[#F5F5F5]">
                        <img src="/About/Tom.png" alt="Tom" className="w-60 h-[390px] object-contain" />
                    </div>
                    <div className="w-fit h-fit flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-medium">Tom Cruise</h1>
                            <p className="text-base font-normal">Founder & Chairman</p>
                        </div>
                        <SocialMediaLinks
                            links={{
                                twitter: "tomTwitter",
                                instagram: "tomInstagram",
                                linkedin: "tomLinkedin",
                            }}
                        />
                    </div>
                </div>

                {/* Profile for Emma Watson */}
                <div className="w-[370px] h-fit flex flex-col justify-end gap-8">
                    <div className="w-full h-[430px] flex items-end justify-center bg-[#F5F5F5]">
                        <img src="/About/Emma.png" alt="Emma" className="w-72 h-100 object-contain" />
                    </div>
                    <div className="w-fit h-fit flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-medium">Emma Watson</h1>
                            <p className="text-base font-normal">Managing Director</p>
                        </div>
                        <SocialMediaLinks
                            links={{
                                twitter: "emmaTwitter",
                                instagram: "emmaInstagram",
                                linkedin: "emmaLinkedin",
                            }}
                        />
                    </div>
                </div>

                {/* Profile for Will Smith */}
                <div className="w-[370px] h-fit flex flex-col justify-end gap-8">
                    <div className="w-full h-[430px] flex items-end justify-center bg-[#F5F5F5]">
                        <img src="/About/Will.png" alt="Will" className="w-80 h-100 object-contain" />
                    </div>
                    <div className="w-fit h-fit flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-medium">Will Smith</h1>
                            <p className="text-base font-normal">Product Designer</p>
                        </div>
                        <SocialMediaLinks
                            links={{
                                twitter: "willTwitter",
                                instagram: "willInstagram",
                                linkedin: "willLinkedin",
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className='w-full h-fit pr-[2%] md:pr-[5%]'>
                <Information />
            </div>
        </div>
    )
}

export default About