import React from 'react'
import Progress from './Progress'

const row_1 = [
  {
    skill: "HTML/CSS",
    score: 8,
  },
  {
    skill: "Javascript",
    score: 8,
  },
  {
    skill: "React/Next JS",
    score: 8,
  },
  {
    skill: "Tailwind",
    score: 9,
  },

]
const row_2 = [
  {
    skill: "Material UI",
    score: 9,
  },
  {
    skill: "Shadcn",
    score:9,
  },
  {
    skill: " Node JS ",
    score: 7,
  },
  {
    skill: "Github",
    score: 8,
  },

]
const Skills: React.FC = () => {
  return (
    <div>

      <h1 className='text-[6rem] font-bold'>
        SKILLS <span></span>
      </h1>
      <div className='flex justify-around items-center max-md:flex-col max-md:space-y-4 p-10'>
        <div className='flex-col flex'>
          <div className='flex items-start flex-col justify-start space-y-6' >
            {
              row_1.map((data, idx) => {
                return (
                  <div className='flex space-x-10'>
                    <h6 className='whitespace-nowrap w-[12rem]'>{data.skill}</h6> <Progress score={data.score} progressColor='red-300' completedColor='purple-700' />
                  </div>
                )
              })
            }
          </div>

        </div>

        <div className='flex-col flex'>
          <div className='flex items-start flex-col justify-start space-y-6' >
            {
              row_2.map((data, idx) => {
                return (
                  <div className='flex space-x-10'>
                    <h6 className='whitespace-nowrap w-[12rem]'>{data.skill}</h6> <Progress score={data.score} progressColor='purple-300' completedColor='purple-700' />
                  </div>
                )
              })
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default Skills