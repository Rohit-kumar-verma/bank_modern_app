import React from 'react'
import { discount, robot } from '../assets'


const Hero = () =>  (
    <section id='home' className='flex flex-col sm:py-16 py-6'>
      <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm-px-16 px-6'>
        <div className='bg-discount-gradient py-[6px] px-4 flex flex-row rounded-[10px] mb-2 items-center'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2'>
            <span className='text-white'>20%</span>
            DISCOUNT FOR {" "}
            <span className='text-white'> 1 MONTH</span>
            ACCOUNT
          </p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
      <h1 className='text-white sm-px-16 px-6 font-semibold flex-1 ss:text-[72px] font-poppins text-[55px] ss-leading-[100px]'>
      The Next {" "}
      <br className='sm:block hidden'/>
      <span className='text-gradient'>Generation</span>
      <br className=''/>
      {" "}
 Payment Method.
      </h1>

      </div>

    </section>
  )

export default Hero
