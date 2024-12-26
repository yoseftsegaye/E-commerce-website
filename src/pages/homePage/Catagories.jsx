
import React, { useRef, useState } from 'react';
import { Catagory } from '../../Samples/SearchCatagory';

const ITEM_WIDTH = 500;

const Catagories = () => {
  const sample = Catagory;

  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScrollPosition = scrollPosition + scrollAmount;
    setScrollPosition(newScrollPosition);
    containerRef.current.scrollLeft = newScrollPosition;
  };

  const handleWheelScroll = (event) => {
    const container = containerRef.current;

    // Check if the container can scroll horizontally
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (maxScrollLeft > 0) {
      event.preventDefault(); // Prevent vertical scrolling
      event.stopPropagation(); // Stop event from bubbling to the body

      // Calculate the new scroll position
      const newScrollLeft = container.scrollLeft + event.deltaY;

      // Clamp the scroll position between 0 and the maximum scroll width
      container.scrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));
    }
  };

  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden'; // Disable body scroll
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = ''; // Enable body scroll
  };

  const [activeLink, setActiveLink] = useState("Camera");

  return (
    <div className='w-full my-20 px-[2%] md:px-[5%]'>
      <div className="flex flex-col items-center gap-[60px]">
        {/* Categories */}
        <div className='flex flex-row items-center w-full relative'>
          <div className='flex flex-col justify-start gap-5 w-fit mb-2'>
            <div className="flex flex-row items-center w-fit gap-4">
              <div className="w-3 h-6 md:w-4 md:h-8 lg:w-5 lg:h-10 rounded bg-[#DB4444]"></div>
              <h1 className="text-sm md:text-base font-semibold text-[#DB4444]">Categories</h1>
            </div>
            <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold">Browse By Category</h1>
          </div>

          {/* Side arrows */}
          <div className='absolute bottom-0 right-0 flex flex-row mb-2 w-auto gap-2'>
            <button className='flex items-center justify-center w-6 h-6 md:w-9 md:h-9 lg:w-[46px] lg:h-[46px]' onClick={() => { handleScroll(-ITEM_WIDTH) }}>
              <div className='flex items-center justify-center w-full h-full rounded-full bg-[#F5F5F5] hover:bg-slate-300'>
                <img src="/Home/LeftArrow.png" alt="LeftArrow" className='w-3 h-2.5 md:w-4 md:h-[14px]' />
              </div>
            </button>
            <button className='flex items-center justify-center w-6 h-6 md:w-9 md:h-9 lg:w-[46px] lg:h-[46px]' onClick={() => { handleScroll(ITEM_WIDTH) }}>
              <div className='flex items-center justify-center w-full h-full rounded-full bg-[#F5F5F5] hover:bg-slate-300'>
                <img src="/Home/RightArrow.png" alt="RightArrow" className='w-3 h-2.5 md:w-4 md:h-[14px]' />
              </div>
            </button>
          </div>
        </div>

        {/* Selection boxes */}
        <div
          ref={containerRef}
          style={{
            width: "100%",
            overflowX: "scroll",
            scrollBehavior: "smooth",
          }}
          className='scrollbar-hide'
          onWheel={handleWheelScroll}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='w-full flex flex-row gap-[30px]'>
            {sample.map((catagory) => (
              <a
                href="#"
                key={catagory.id}
                onClick={() => setActiveLink(catagory.name)}
                className={`min-w-[170px] h-[145px] flex flex-col items-center justify-center gap-2 border-2 rounded-md hover:bg-[#DB4444] ${activeLink === catagory.name ? "bg-[#DB4444]" : ""}`}>
                <div className='w-14 h-14 flex items-center justify-center'>
                  <img src={catagory.image} alt={catagory.name} className='w-full h-full object-contain' />
                </div>
                <p className='text-base font-normal'>{catagory.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
