import React, { useState } from 'react'
import Title from '../components/Title'

const Profile = () => {

  const [isEditing, setIsEditing] = useState(false)

  const [profile, setProfile] = useState({
    name: 'Aditya Gupta',
    email: 'aditya@example.com',
    phone: '+91 98765 43210',
    address: 'Ghaziabad, Uttar Pradesh, India'
  })

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='border-t pt-14 pb-20'>

      {/* Heading */}
      <div className='text-2xl mb-10'>
        <Title text1={'MY'} text2={'PROFILE'} />
      </div>

      {/* Profile Card */}
      <div className='max-w-3xl mx-auto border border-gray-200 p-6 sm:p-10'>

        {/* Profile Header */}
        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10'>

          <div className='w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-3xl text-gray-600'>
            {profile.name.charAt(0)}
          </div>

          <div className='text-center sm:text-left'>
            <h2 className='text-xl font-medium'>
              {profile.name}
            </h2>

            <p className='text-sm text-gray-500 mt-1'>
              MANTRANU Customer
            </p>
          </div>

        </div>


        {/* Personal Information */}
        <div>

          <h3 className='text-lg font-medium mb-6'>
            Personal Information
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

            {/* Name */}
            <div>
              <p className='text-sm text-gray-500 mb-2'>
                Full Name
              </p>

              <input
                type='text'
                name='name'
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
                className='w-full border border-gray-300 px-3 py-2 text-sm outline-none disabled:bg-gray-50'
              />
            </div>


            {/* Email */}
            <div>
              <p className='text-sm text-gray-500 mb-2'>
                Email
              </p>

              <input
                type='email'
                name='email'
                value={profile.email}
                onChange={handleChange}
                disabled={!isEditing}
                className='w-full border border-gray-300 px-3 py-2 text-sm outline-none disabled:bg-gray-50'
              />
            </div>


            {/* Phone */}
            <div>
              <p className='text-sm text-gray-500 mb-2'>
                Phone
              </p>

              <input
                type='text'
                name='phone'
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className='w-full border border-gray-300 px-3 py-2 text-sm outline-none disabled:bg-gray-50'
              />
            </div>


            {/* Address */}
            <div>
              <p className='text-sm text-gray-500 mb-2'>
                Address
              </p>

              <input
                type='text'
                name='address'
                value={profile.address}
                onChange={handleChange}
                disabled={!isEditing}
                className='w-full border border-gray-300 px-3 py-2 text-sm outline-none disabled:bg-gray-50'
              />
            </div>

          </div>

        </div>


        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-3 mt-10'>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className='border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition'
          >
            {isEditing ? 'SAVE CHANGES' : 'EDIT PROFILE'}
          </button>

          <button
            className='border border-gray-300 px-6 py-2 text-sm hover:bg-gray-100 transition'
          >
            LOGOUT
          </button>

        </div>

      </div>


      {/* Quick Links */}
      <div className='max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>

        <div className='border border-gray-200 p-6'>
          <p className='font-medium mb-2'>
            My Orders
          </p>

          <p className='text-sm text-gray-500'>
            View and track your recent orders.
          </p>
        </div>


        <div className='border border-gray-200 p-6'>
          <p className='font-medium mb-2'>
            Saved Address
          </p>

          <p className='text-sm text-gray-500'>
            Manage your delivery addresses.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Profile