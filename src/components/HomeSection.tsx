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
    <div className='mt-[2rem] mb-[6rem] flex flex-col items-start space-y-10 p-5 w-fit ' id="#Home">
      <div>
        <h5 className='text-[1.7rem] font-light italic w-fit '>
          FRONT-END WEB DEVELOPER
        </h5>
        <h1 className='text-[4rem] font-bold'>
          SANJAY <br />
          MANIVANNAN
        </h1>
      </div>
      <div className='border-l-2 border-red-600 px-8'>
        <h6 className='text-[1.2rem] font-light'>A young developer based in India <span className='text-[1.5rem]'>🔸🕉️🔸</span></h6>
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
  )
}

export default HomeSection