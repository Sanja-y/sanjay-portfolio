import React from 'react'

const AboutMe: React.FC = () => {
  return (
    <div className='w-full flex flex-col items-end space-y-5 '>
      <h1 className='text-[4rem] font-bold mr-[8rem]'> 
        ABOUT <br />
        ME
      </h1>
        <span className='text-[1.2rem] font-light italic border-r-2 border-blue-600 pr-6'>"Whatever happens, happens..."</span>
      
    </div>
  )
}

export default AboutMe