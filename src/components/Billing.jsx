import React from 'react'
import {apple, bill, google} from '../assets'

const Billing = () => (
    <section id="prodcut" className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
        <div className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
            <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>
        <div className='flex-1 flex justify-center items-start flex-col'>
            <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
            You do the business, 
            <br className=' sm:block hidden'/>
            we’ll handle the money.
            </h2>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[38.8px] max-w-[470px] mt-5'>
            With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>
            <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img src={apple} alt='apple_store' className='w-[128px]  h-[42px] object-contain mr-5 cursor-pointer'/>
                <img src={google} alt='google_store' className='w-[128px]  h-[42px] object-contain mr-5 cursor-pointer'/>
            </div>
        </div>
    </section>
)

export default Billing
