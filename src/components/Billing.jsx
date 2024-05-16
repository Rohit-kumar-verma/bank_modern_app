import React from 'react'
import {apple, bill, google} from '../assets'

const Billing = () => (
    <section id="prodcut" className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
        <div className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
            <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>
    </section>
)

export default Billing
