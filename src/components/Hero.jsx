import GetStarted from './GetStarted'
import { discount, robot } from '../assets'


const Hero = () =>  (
    <section id='home' className='flex flex-col sm:py-16 py-6 md:flex-row'>
      <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>
        <div className='bg-discount-gradient py-[6px] px-4 flex flex-row rounded-[10px] mb-2 items-center'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2'>
            <span className='text-white'>20%</span>
            DISCOUNT FOR {" "}
            <span className='text-white'> 1 MONTH</span>
            ACCOUNT
          </p>
        </div>
      
      <div className='flex flex-row justify-between items-center w-full'>
      <h1 className='text-white sm-px-16 px-6 font-semibold flex-1 ss:text-[72px] font-poppins text-[55px] ss-leading-[100px]'>
      The Next {" "}
      <br className='sm:block hidden'/>
      <span className='text-gradient'>Generation</span>
      </h1>
      <div className='ss:flex hidden md:mr-4 mr-0'>
        <GetStarted />
      </div>
      </div>

      <h1 className='text-white sm-px-16 px-6 font-semibold ss:text-[68px] font-poppins text-[52px] ss-leading-[75px] w-full'>
      Payment Method.
      </h1>

      <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 max-w-[470px]'>
      Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.
      </p>
      </div>
      <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
        <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] white__gradient rounded-full bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient' />
         
      </div>
      <div className='ss:hidden flex justify-center items-center'>
        <GetStarted/>
      </div>

    </section>
  )

export default Hero
