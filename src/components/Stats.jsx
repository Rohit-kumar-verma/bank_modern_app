import React from 'react'
import { stats } from '../constants'

const Stats = () => (
    <section className='flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6'>
        {stats.map((stat)=>(
            <div key={stat.id} className='text-white flex-1 flex-row font-poppins justify-start items-center'>
                <h4 className='text-[30px] font-semibold xs:text-[40px] xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
                <p className='text-gradient font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3'>{stat.title}</p>
            </div>
        ))}
      
    </section>
  )

export default Stats
