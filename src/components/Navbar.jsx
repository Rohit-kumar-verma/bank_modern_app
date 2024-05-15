import {useState} from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle]= useState(false)

  return (
    <nav className='bg-black w-full py-6 justify-between items-center navbar flex px-4'>
      <img src={logo} alt='logo'className='w-20'/>
      <ul className='list-none sm:flex hidden flex justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
            <li key={nav.id} className={`text-white ${index===navLinks.length-1 ? 'mr-0': 'mr-10'} font-poppins font-normal cursor-pointer text-[16px]`} >
                <a href={`#${nav.id}`}>
                {nav.title}</a>
            </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center' >
        <img src={!toggle ? menu: close} alt="menu" className='w-[28px] h-[28px] object-contain' onClick={()=>setToggle((prev)=>!prev)}/>
        <div className={`${toggle ? 'flex': 'hidden'} top-16 p-6 absolute`}>
        <ul className='list-none sm:hidden flex-col justify-end items-center flex-1'>
        {navLinks.map((nav, index)=>(
            <li key={nav.id} className={`text-white ${index===navLinks.length-1 ? 'mb-0': 'mb-1'} font-poppins font-normal cursor-pointer text-[16px] sidebar bg-black-gradient py-2 px-3`} >
                <a href={`#${nav.id}`}>
                {nav.title}</a>
            </li>
        ))}
      </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
