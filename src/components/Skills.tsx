import React from 'react'
import Progress from './Progress'

const row_1 = [
  {
    skill: "HTML",
    src: "icon-html-8bfe20d2",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    // score: 8,
  },
  {
    skill: "CSS",
    src: "icon-css3-b3bf2ddd",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    // score: 8,
  },
  {
    skill: "Javascript",
    src: "icon-javascript-6560deb8",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    // score: 8,
  },
  {
    skill: "React",
    src: "icon-react-a0fc18cc",
    link: "https://react.dev/",
    // score: 8,
  },
  {
    skill: "Next JS",
    src: "icon-nextjs-18b8a9ce",
    link: "https://nextjs.org/",
    // score: 8,
  },
  {
    skill: "Redux",
    src: "icon-reduxjs-f5f8094e",
    link: "https://redux.js.org/",
    // score: 8,
  },
  {
    skill: "Node.js",
    src: "icon-nodejs-62441274",
    link: "https://expressjs.com/",
    // score: 9,
  },
  {
    skill: "Express",
    src: "icon-express-light-1d38bc6a",
    link: "https://expressjs.com/",
    // score: 8,
  },

]
const row_2 = [
  {
    skill: "Sass/Scss",
    src: "icon-sass-652291bc",
    link: "https://sass-lang.com/",
    // score: 8,
  },
  {
    skill: "TailwindCSS",
    src: "icon-tailwindcss-6ab43fd7",
    link: "https://tailwindcss.com/",
    // score: 8,
  },
  {
    skill: "Figma",
    src: "icon-figma-6ce9f699",
    link: "https://www.figma.com/",
    // score: 8,
  },
  {
    skill: "Storybook",
    src: "icon-storybook-987cb8af",
    link: "https://storybook.js.org/",
    // score: 8,
  },
  {
    skill: "Git",
    src: "icon-git-c96ba05f",
    link: "https://git-scm.com/",
    // score: 8,
  },
  {
    skill: "MongoDB",
    src: "icon-mongodb-48a77890",
    link: "https://www.mongodb.com/",
    // score: 9,
  },
  {
    skill: "Material UI",
    src: "icon-material-ui-1969274b",
    link: "https://mui.com/",
    // score: 8,
  },
  {
    skill: "VS Code",
    src: "icon-visual-studio-code-fb90a4a6",
    link: "https://code.visualstudio.com/",
    // score: 8,
  },

]
const Skills: React.FC = () => {
  return (
    <div className='w-full px-[20rem] my-6 py-14'>

      <div className='flex'>
        <h1 className='text-[6rem] text-left font-bold h-[10rem]'>
          SKILLS
        </h1>
        {/* <span className='animate-wiggle text-[6rem] text-left font-bold h-[10rem] '>⚙️</span> */}
      </div>
      {/* <div className='flex justify-center items-center max-md:flex-col max-md:space-y-4 p-10'>
        <div className='flex-col flex'>
          <div className='flex items-center flex-row justify-center ' >
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
          <div className='flex items-start flex-row justify-start space-y-6' >
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

      </div> */}
      <div className='flex flex-col justify-center items-center space-y-14 flex-wrap'>
        <div className='flex '>
          {
            row_1.map((data, idx) => {
              return (
                <a href={data.link} target='_blank'>
                  <div className='flex flex-col items-center justify-end w-[10rem] h-[10rem] space-y-5' key={idx}>
                    <img src={`/assets/skills/${data.src}.svg`} alt={data.skill} width={"64px"}
                      className='hover:scale-105 transition-all duration-300' />
                    <h6 className='whitespace-nowrap '>{data.skill}</h6>
                  </div>
                </a>

              )
            })
          }
        </div>
        <div className='flex'>
          {
            row_2.map((data, idx) => {
              return (
                <a href={data.link} target='_blank'>
                  <div className='flex flex-col items-center justify-end w-[10rem] h-[10rem] space-y-5' key={idx}>
                    <img src={`/assets/skills/${data.src}.svg`} alt={data.skill} width={"64px"}
                      className='hover:scale-105  transition-all duration-300' />
                    <h6 className='whitespace-nowrap '>{data.skill}</h6>
                  </div>
                </a>

              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Skills