import React from 'react'

const AboutMe: React.FC = () => {
  return (
    <div className='w-full my-6'>
      <div className='flex justify-center'>
        <h1 className='text-[6rem] font-bold text-left'>
          ABOUT 
          ME
        </h1>
      </div>
      <div className=' flex flex-col space-y-6 justify-start items-end'>
        <span className='text-[1.2rem] font-light italic border-r-2 border-red-600 pr-6 text-left'>"Whatever happens, happens..."</span>
        <div className='w-[50%] text-pretty text-left text-[16px] font-light'>
          <p className='indent-8' >
            Hi! I'm Sanjay, a front-end developer candidate eager to join your team. As an intern, I played a crucial role in implementing an in-house project, gaining hands-on experience in UI design, responsive layouts, and client-side scripting. My enthusiasm extends to side projects, where I explore new technologies and design patterns. I value collaboration and communication, understanding their importance in delivering successful projects. I'm excited about the opportunity to contribute my passion for front-end development to your team and create exceptional user experiences. Thank you for considering my application—I'm looking forward to discussing how I can contribute to your organization further.
          </p>
          <div className=' my-[2rem]'>
            <button className='font-bold bg-red-600 px-8 py-3  rounded-[4rem]'>Contact Me</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default AboutMe