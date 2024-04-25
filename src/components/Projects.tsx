import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

const Projects: React.FC = () => {
  return (
    <div className='w-full my-6 px-[20rem] bg-red-600 bg-opacity-30 pb-14' id="Projects">
      <div className='flex'>
        <h1 className='text-[6rem] font-bold text-left my-8'>
          PROJECTS
        </h1>
        {/* <span  className='text-[6rem] font-bold text-left my-8 animate-riggle'>⌨️</span> */}
      </div>
      {/* <div className='w-full'>
        <div className='flex w-5/6 '>
          <div className='relative '>
            <div className='w-[30rem] h-[30rem] absolute -left-[0%] top-0 bg-red-700  blur-[50px]  opacity-20' />
            <Card className='border-0 bg-[#161515] text-white w-[100%] h-[100%] rounded-l-md rounded-r-none' >
              <CardHeader className='p-0 '>
                <div className='mt-2 p-6'>
                  <CardTitle>StageOne</CardTitle>
                  <CardDescription>Company Project</CardDescription>
                </div>
              </CardHeader>
              <CardContent className='rounded-b-md p-6' >
                An interview candidate selection service, which validates the candidate using Artificial Intelligence.
              </CardContent>
              <CardFooter>

            </CardFooter>
            </Card>
          </div>
                <img src="/assets/enthiran.jpeg" alt="StageOne" className='rounded-r-md ' />

        </div>

        <div className='flex justify-end'>
          <div className='w-1/3 relative'>
            <div className='w-[30rem] h-[30rem] absolute -left-[00%] top-0 bg-red-700 rounded-full blur-[50px]  opacity-20' />
            <Card className='border-0 bg-slate-200' >
              <CardHeader className='p-0 bg-orange-200'>
                <img src="/assets/Martin-Scorsese-Pic-1.jpg" alt="StageOne" className=' ' />
                <div className='mt-2 p-6'>
                  <CardTitle>Moveesurfer</CardTitle>
                  <CardDescription>Side Project</CardDescription>
                </div>
              </CardHeader>
              <CardContent className='rounded-b-md p-6' >
                A website where the info on all your favourite movies and TV shows can be looked up!
              </CardContent>
              <CardFooter>

            </CardFooter>
            </Card>
          </div>
        </div>

        <div className='w-1/3 relative'>
          <div className='w-[30rem] h-[30rem] absolute -left-[00%] top-0 bg-red-700 rounded-full blur-[50px]  opacity-20' />
          <Card className='border-0 bg-slate-200 relative' >
            <CardHeader className='p-0 bg-red-200 roundedn-t-md'>
              <img src="/assets/thupparivalan.jpg" alt="Lost & Found" className=' ' />
              <div className='mt-2 p-6'>
                <CardTitle>Lost & Found</CardTitle>
                <CardDescription>Side Project</CardDescription>
              </div>
            </CardHeader>
            <CardContent className='rounded-b-md p-6' >
              Users can track and manage registered missing items, monitoring their retrieval progress.
            </CardContent>
            <CardFooter>

            </CardFooter>
          </Card>
        </div>

      </div> */}
      <div className='w-full'>
        <div className='flex justify-center w-full'>
          <div className='w-full flex flex-col items-center space-y-4'>
            <div className='flex h-[20rem] w-full  max-md:flex-col'>
              <Card className='border-0 bg-[#161515] text-white w-[100%] h-[100%] rounded-l-md rounded-r-none p-5' >
                <CardHeader className='p-0 '>
                  <div className='mt-2 p-6'>
                    <CardTitle>StageOne</CardTitle>
                    <CardDescription>Company Project</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className='rounded-b-md p-6' >
                  An interview candidate selection service, which validates the candidate using Artificial Intelligence.
                  <div className='flex flex-wrap mt-5 space-x-2 space-y-1'>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>React JS</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Javascript</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Tailwindcss</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Material UI</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>WebSocket</p>
                  </div>


                </CardContent>
                {/* <CardFooter>

                </CardFooter> */}
              </Card>
              <div className='w-full h-full px-4 py-4 bg-[#202020]'>

                <img src="/assets/enthiran.jpeg" alt="StageOne" className='rounded-md w-[100%] h-full' style={{ objectFit: "cover" }} />

              </div>
            </div>

            <div className='flex flex-row-reverse h-[20rem] w-full overflow-hidden  max-md:flex-col'>
              <Card className='border-0 bg-[#161515] text-white w-[100%] h-[100%] rounded-none p-5' >
                <CardHeader className='p-0 '>
                  <div className='mt-2 p-6'>
                    <CardTitle>Moveesurfer</CardTitle>
                    <CardDescription>Side Project</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className='rounded-b-md p-6' >
                A website where the info on all your favourite movies and TV shows can be looked up!
                  <div className='flex flex-wrap mt-5 space-x-2 space-y-1'>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>React JS</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Javascript</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Tailwindcss</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Material UI</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>WebSocket</p>
                  </div>


                </CardContent>
                {/* <CardFooter>

                </CardFooter> */}
              </Card>
              <div className='w-full h-full px-4 py-4 bg-[#202020]'>

                <img src="/assets/Martin-Scorsese-Pic-1.jpg" alt="moveesurfer" className='rounded-md w-[100%] h-full' style={{ objectFit: "cover" }} />

              </div>
            </div>

            <div className='flex h-[20rem] w-full overflow-hidden'>
              <Card className='border-0 bg-[#161515] text-white w-[100%] h-[100%] rounded-l-md rounded-r-none p-5' >
                <CardHeader className='p-0 '>
                  <div className='mt-2 p-6'>
                    <CardTitle>Lost & Found</CardTitle>
                    <CardDescription>Side Project</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className='rounded-b-md p-6' >
                Users can track and manage registered missing items, monitoring their retrieval progress.
                  <div className='flex flex-wrap mt-5 space-x-2 space-y-1'>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>React JS</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Javascript</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Tailwindcss</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>Material UI</p>
                    <p className='text-[14px] bg-gray-600 w-fit px-2 py-1 rounded-2xl flex justify-center items-center'>WebSocket</p>
                  </div>


                </CardContent>
                {/* <CardFooter>

                </CardFooter> */}
              </Card>
              <div className='w-full h-full px-4 py-4 bg-[#202020]'>

                <img src="/assets/thupparivalan.jpg" alt="StageOne" className='rounded-md w-[100%]' style={{ objectFit: "cover" }} />

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects