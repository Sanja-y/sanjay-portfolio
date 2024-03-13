import React from 'react'
const points = ["1","2", "3", "4", "5", "6", "7", "8", "9", "10"];
interface ProgressProps {
    score: number,
    progressColor:string,
    completedColor:string,
}
const Progress:React.FC<ProgressProps> = ({score,progressColor,completedColor}) => {
  return (
    <div className='w-full relative flex space-x-4 items-center mx-4'>
            {
                points?.map((point, idx)=> {
                    return(
                        <div id={point} key={idx} className={score <= idx === false ? `h-[1rem] w-[1rem] rounded-full bg-red-300` : `h-[1rem] w-[1rem] rounded-full bg-red-300 opacity-30` }/>
                    )
                })
            }
    </div>
  )
}

export default Progress