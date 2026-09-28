import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const About = () => {

  return (

    <div className='border-t pt-10 pb-20'>


      {/* ================= ABOUT HEADING ================= */}

      <div className='text-2xl mb-10'>

        <Title
          text1={'ABOUT'}
          text2={'US'}
        />

      </div>



      {/* ================= BRAND STORY ================= */}

      <div className='flex flex-col md:flex-row gap-10 lg:gap-16 items-center'>


        {/* IMAGE */}

        <div className='w-full md:w-1/2'>

          <img
            src={assets.about_img}
            alt='About MANTRANU'
            className='w-full'
          />

        </div>



        {/* CONTENT */}

        <div className='w-full md:w-1/2 text-gray-600'>

          <h2 className='text-2xl font-medium text-gray-800 mb-6'>
            Redefining Everyday Style
          </h2>


          <p className='text-sm leading-7 mb-5'>
            At MANTRANU, we believe fashion is more than just clothing.
            It is a reflection of who you are, how you feel, and the
            confidence you carry every day.
          </p>


          <p className='text-sm leading-7 mb-5'>
            Our goal is to bring together timeless design, quality
            craftsmanship, and modern style to create pieces that fit
            effortlessly into your everyday life.
          </p>


          <p className='text-sm leading-7'>
            From everyday essentials to statement pieces, every product
            is thoughtfully selected to help you express your individual
            style without compromising on comfort.
          </p>


          <p className='mt-6 text-gray-800 font-medium'>
            — The MANTRANU Team
          </p>

        </div>

      </div>



      {/* ================= WHY CHOOSE US ================= */}

      <div className='mt-24'>

        <div className='text-2xl mb-10'>

          <Title
            text1={'WHY'}
            text2={'CHOOSE US'}
          />

        </div>


        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>


          {/* QUALITY */}

          <div className='border border-gray-200 p-8 text-center'>

            <img
              src={assets.quality_icon}
              alt='Quality'
              className='w-10 mx-auto mb-6'
            />

            <h3 className='text-lg font-medium mb-3'>
              Quality First
            </h3>

            <p className='text-sm text-gray-500 leading-6'>
              We carefully select products that meet our standards
              for quality, comfort, and everyday durability.
            </p>

          </div>



          {/* EXCHANGE */}

          <div className='border border-gray-200 p-8 text-center'>

            <img
              src={assets.exchange_icon}
              alt='Easy Exchange'
              className='w-10 mx-auto mb-6'
            />

            <h3 className='text-lg font-medium mb-3'>
              Easy Exchange
            </h3>

            <p className='text-sm text-gray-500 leading-6'>
              Shopping should feel effortless. Our simple exchange
              experience gives you greater peace of mind.
            </p>

          </div>



          {/* SUPPORT */}

          <div className='border border-gray-200 p-8 text-center'>

            <img
              src={assets.support_img}
              alt='Customer Support'
              className='w-10 mx-auto mb-6'
            />

            <h3 className='text-lg font-medium mb-3'>
              Dedicated Support
            </h3>

            <p className='text-sm text-gray-500 leading-6'>
              Our support team is here to help you whenever you need
              assistance with your shopping experience.
            </p>

          </div>

        </div>

      </div>



      {/* ================= OUR PHILOSOPHY ================= */}

      <div className='mt-24 flex flex-col md:flex-row items-center gap-10 lg:gap-20'>


        <div className='w-full md:w-1/2'>

          <p className='text-sm tracking-[3px] text-gray-500 mb-4'>
            OUR PHILOSOPHY
          </p>

          <h2 className='text-3xl sm:text-4xl font-medium text-gray-800 leading-tight'>
            Simple. Refined.
            <br />
            Made for You.
          </h2>

        </div>


        <div className='w-full md:w-1/2'>

          <p className='text-sm text-gray-500 leading-7'>
            We believe great style does not need to be complicated.
            MANTRANU focuses on clean silhouettes, versatile pieces,
            and thoughtful details that allow you to build a wardrobe
            that feels uniquely yours.
          </p>

          <p className='text-sm text-gray-500 leading-7 mt-5'>
            Whether you are dressing for an ordinary day or a special
            moment, our collections are designed to move with you.
          </p>

        </div>

      </div>



      {/* ================= NEWSLETTER ================= */}

      <div className='mt-24 text-center'>

        <h2 className='text-2xl font-medium mb-3'>
          Stay in the Style Loop
        </h2>

        <p className='text-sm text-gray-500 mb-6'>
          Subscribe for new arrivals, exclusive offers and style updates.
        </p>


        <div className='flex w-full sm:w-[500px] mx-auto border border-gray-300'>

          <input
            type='email'
            placeholder='Enter your email'
            className='flex-1 px-4 py-3 text-sm outline-none'
          />

          <button className='bg-black text-white px-7 text-sm'>
            SUBSCRIBE
          </button>

        </div>

      </div>

    </div>

  )
}

export default About