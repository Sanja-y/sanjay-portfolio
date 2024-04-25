import React from 'react'
const links = ["Home", "Projects", "Contact"]
const Navbar: React.FC = () => {
  return (
    <div className=' px-[20rem]'>
      <nav className='flex flex-row w-full bg-gradient-to-t from-[#4940405d] to-[#2c282881]  
       rounded-[4rem] justify-between items-center h-[6rem] pl-8 pr-8 overflow-clip'>
        <div className='flex flex-row space-x-[4rem] items-center justify-center'>
          <div>
            <h3 className='text-[2rem] font-bold'>{`<SM/>`}</h3>
          </div>
        </div>
        <div className='flex flex-row items-center space-x-[5rem] text-[1rem] '>
          {
            links?.map((link, idx) => {
              return (
                <a className='hover:text-[#db1717] transition-all 350ms focus:text-[#a01a1a] focus:underline underline-offset-2' href={`#${link}`} key={idx}>{link}</a>
              )
            })
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar