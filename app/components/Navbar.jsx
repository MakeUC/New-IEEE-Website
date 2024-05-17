import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar z-[100] fixed bg-[#2c2e3a] backdrop-filter backdrop-blur-xl bg-opacity-70 top-5 left-0 right-0 w-[380px] md:w-[600px] lg:w-[1000px] mx-auto rounded-lg shadow-md">
    {/* Navbar for Mobile Screens */}
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>About Us</a></li>
          <li>
            <a href="">Membership</a>
          </li>
          <li><a>Meeting Slides</a></li>
          <li><a>IEEE Student Magazine</a></li>
          <li><a>Events</a></li>
          <li><a>Links</a></li>
          <li><a>Officers</a></li>
        </ul>
      </div>
      <a className=''>
        <img src='/images/ieee-1.png' 
        width={120}
        height={120}
        className='rounded-md'
        />
        
      </a>
    </div>
    {/* Navbar for Computer Screens */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li className='text-xs hover:text-[#66FCF1]'><a>About Us</a></li>
          <li className='text-xs hover:text-[#66FCF1]'>
            <a href="">Membership</a>
          </li>
          <li className='text-xs hover:text-[#66FCF1]'><a>Meeting Slides</a></li>
          <li className='text-xs hover:text-[#66FCF1]'><a>IEEE Student Magazine</a></li>
          <li className='text-xs hover:text-[#66FCF1]'><a>Events</a></li>
          <li className='text-xs hover:text-[#66FCF1]'><a>Links</a></li>
          <li className='text-xs hover:text-[#66FCF1]'><a>Officers</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar