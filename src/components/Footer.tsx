import React from 'react'
const links = ["Home", "Projects", "Contact"]
const date = new Date();
const Footer: React.FC = () => {
  return (
    <div className='flex flex-col '>
      <div className='border-t-2 border-red-700 p-5'>
        <nav className='flex flex-row w-full 
      justify-between items-center h-[6rem] pl-8 pr-8 overflow-clip'>
          <div className='flex flex-row space-x-[4rem] items-center justify-center '>
            <div>
              <h3 className='text-[2rem] font-bold'>Sanjay Manivannan</h3>
            </div>
          </div>
          <div className='flex flex-row items-center space-x-[5rem] text-[1rem] '>
            {
              links?.map((link, idx) => {
                return (
                  <a className='hover:text-[#db1717] transition-all 350ms focus:text-[#a01a1a] focus:underline underline-offset-2' href={`#${link}`}>{link}</a>
                )
              })
            }
          </div>
        </nav>
      </div>
      <div className='flex justify-center text-[#a79d9dd0]'>
            <span>@ {date.getFullYear()} Sanjay Manivannan. All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer