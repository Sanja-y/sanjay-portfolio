import React from 'react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

const HomeSection: React.FC = () => {
  return (
    <div className='flex items-center justify-around space-x-14 '>
      <div className='mt-[2rem] mb-[6rem] flex flex-col items-start space-y-10 p-5 w-full' id="Home">
        <div>
          <h5 className='text-[1.7rem] font-light italic w-fit border-b-2 border-red-600 border-opacity-45 pb-1 '>
            FRONT-END WEB DEVELOPER
          </h5>
          <h1 className='text-[6rem] font-bold'>
            SANJAY <br />
            MANIVANNAN
          </h1>
        </div>
        <div className='border-l-2 border-red-600 px-8'>
          <h6 className='text-[1.2rem] font-light'>A young developer based in India</h6>
        </div>
        {/* <Carousel >
        <CarouselContent>
          <CarouselItem className='flex aspect-square items-start justify-center '><img src='/assets/arjun_3.jpg' alt="" height={"60%"} width={"60%"} className='' /></CarouselItem>
          <CarouselItem  className='flex aspect-square items-start justify-center '> <img src='/assets/sanjay-the-badass.jpg' alt="" height={"60%"} width={"60%"}  className='' /></CarouselItem>
          <CarouselItem  className='flex flex-col aspect-square items-center justify-start relative '>
          <img src='/assets/arjun_1.jpg' alt="" height={"60%"} width={"60%"} className='' />
          <span className='text-white absolute top-[61%] z-[10]'>Hire this man right now.</span>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
      </div>
      <div className='relative w-full h-[10rem]'>
        <div className='bg-red-700 rounded-full h-[15rem] w-[15rem] absolute opacity-15 scale-105 ' />
        <div className='bg-red-400 rounded-full h-[15rem] w-[15rem] absolute opacity-20 scale-90' />
        <div className='bg-red-400 rounded-full h-[15rem] w-[15rem] relative flex justify-center items-center scale-75 text-[3.5rem] font-extrabold hover:scale-[0.80] transition-all duration-300'>
          <a download href='/assets/docs/sanjay-resume.pdf'>CV</a>
        </div>
      </div>

    </div>
  )
}

export default HomeSection