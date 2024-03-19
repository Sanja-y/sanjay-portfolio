import React from 'react'
import Progress from './Progress';


const AboutMe: React.FC = () => {
  return (
    <div className='w-full my-8 bg-red-600 bg-opacity-30 py-8 px-[20rem]'>
      <div className='flex justify-center'>
        <h1 className='text-[6rem] font-bold text-left my-6'>
          ABOUT
          ME
        </h1>
      </div>
      <div className=' flex flex-col space-y-6 justify-start items-end relative'>
        <span className='text-[1.2rem] font-light italic border-r-2 border-red-600 pr-6 text-left'>"Whatever happens, happens..."</span>
        <div className='w-[50%] text-pretty text-left text-[16px] font-light relative'>
          <p className='indent-8' >
            Hi! I'm Sanjay, a front-end developer candidate eager to join your team. As an intern, I played a crucial role in implementing an in-house project, gaining hands-on experience in UI design, responsive layouts, and client-side scripting. My enthusiasm extends to side projects, where I explore new technologies and design patterns. I value collaboration and communication, understanding their importance in delivering successful projects. I'm excited about the opportunity to contribute my passion for front-end development to your team and create exceptional user experiences. Thank you for considering my application—I'm looking forward to discussing how I can contribute to your organization further.
          </p>
          <div className=' my-[2rem]'>
            <button className='font-bold bg-red-600 px-8 py-3  rounded-[4rem]'>Contact Me</button>
          </div>
         
          {/* <div className='w-[10rem] h-[10rem] absolute right-0 bg-red-400 rounded-full opacity-20 ' /> */}
          <div className='w-[40rem] h-[40rem] absolute left-[0%] -bottom-[80%] bg-red-700 rounded-full blur-[100px]  opacity-20' />
          {/* <div className='w-[30rem] h-[8rem] absolute left-[80%] top-[70%] bg-red-900 rounded-xl blur-[100px] opacity-60' >

          </div> */}


        </div>
        <div className=' flex flex-col items-end justify-start space-y-14 scale-[0.60] hue-rotate-[30deg]'>
            <Progress score={10} progressColor='red-300' completedColor='purple-700' />
            <Progress score={10} progressColor='red-300' completedColor='purple-700' />
            <Progress score={10} progressColor='red-300' completedColor='purple-700' />
          </div>
      </div>

    </div>
  )
}

export default AboutMe