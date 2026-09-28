import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {

  return (

    <div className='border-t pt-10 pb-20'>

      {/* ================= HEADING ================= */}

      <div className='flex justify-center text-2xl mb-12'>

        <Title
          text1={'CONTACT'}
          text2={'US'}
        />

      </div>


      {/* ================= MAIN CONTACT SECTION ================= */}

      <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-12'>


        {/* ================= IMAGE ================= */}

        <div className='w-full md:w-1/2'>

          <img
            src={assets.contact_img}
            alt='Contact MANTRANU'
            className='w-full aspect-square object-cover'
          />

        </div>


        {/* ================= CONTACT DETAILS ================= */}

        <div className='w-full md:w-1/2 text-gray-500'>


          {/* OUR STORE */}

          <div className='mb-7'>

            <h2 className='text-lg font-medium text-gray-700 mb-4'>
              Our Store
            </h2>

            <p className='text-sm leading-6'>
              123 Fashion Street
              <br />
              New Delhi, India
              <br />
              110001
            </p>

          </div>


          {/* PHONE */}

          <div className='mb-6'>

            <p className='text-sm'>
              Tel: +91 98765 43210
            </p>

          </div>


          {/* EMAIL */}

          <div className='mb-7'>

            <p className='text-sm'>
              Email: support@mantranu.com
            </p>

          </div>


          {/* CAREERS */}

          <div>

            <h2 className='text-lg font-medium text-gray-700 mb-4'>
              Careers at MANTRANU
            </h2>

            <p className='text-sm leading-6 mb-5'>
              Interested in joining our team?
              <br />
              Explore opportunities and grow with us.
            </p>


            <button
              className='border border-gray-400 px-6 py-3 text-sm hover:bg-black hover:text-white hover:border-black transition'
            >
              Explore Jobs
            </button>

          </div>


        </div>

      </div>


      {/* ================= NEWSLETTER ================= */}

      <div className='mt-24'>

        <NewsLetterBox />

      </div>


    </div>

  )
}

export default Contact