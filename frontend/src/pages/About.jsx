import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='md:max-w-[450px]' src={assets.about_img} alt="About image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae commodi dolorem. Rem accusantium debitis, dignissimos quo fugiat tenetur rerum adipisci sapiente non fuga. Asperiores inventore obcaecati possimus debitis libero!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod at ipsa exercitationem assumenda perferendis officiis cupiditate beatae non atque, itaque, necessitatibus unde eius quia corrupti provident rerum, veritatis facilis. Id?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quasi. Magni esse, quasi velit sunt temporibus animi assumenda, id accusamus aliquam odio quisquam expedita repudiandae eveniet dolores, quae sequi voluptas!</p>
        </div>
      </div>
      <div className='text-xl py-4 '>
        <Title text1={"WHY"} text2={"CHOOSE US?"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur eos ratione molestias corrupti cupiditate quis praesentium officiis facilis nisi nulla molestiae</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur eos ratione molestias corrupti cupiditate quis praesentium officiis facilis nisi nulla molestia</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur eos ratione molestias corrupti cupiditate quis praesentium officiis facilis nisi nulla molestiae </p>
        </div>
      </div>
      <NewsletterBox />
  </div>
  )
}

export default About
