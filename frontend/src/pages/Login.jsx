import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const onSubmitHandler = (e) => {
    e.preventDefault()
  }


  return (

    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-[340px] m-auto mt-16 gap-3'
    >

      

      <div className='flex items-center gap-2 mb-4'>

        <p className='text-3xl font-normal'>
          {currentState}
        </p>

        <div className='w-7 h-[1px] bg-gray-800'></div>

      </div>


      {/* name */}

      {currentState === 'Sign Up' && (

        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full h-[38px] border border-gray-400 px-3 text-sm outline-none'
          required
        />

      )}


      {/* email */}

      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full h-[38px] border border-gray-400 px-3 text-sm outline-none'
        required
      />


      {/* pass */}

      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-full h-[38px] border border-gray-400 px-3 text-sm outline-none'
        required
      />


      {/* login */}

      {currentState === 'Login' && (

        <div className='w-full flex justify-between items-center text-xs'>

          <p className='text-gray-700 cursor-pointer'>
            Forgot your password?
          </p>

          <p
            onClick={() => setCurrentState('Sign Up')}
            className='text-gray-700 cursor-pointer'
          >
            Create account
          </p>

        </div>

      )}


      {/* signup */}

      {currentState === 'Sign Up' && (

        <div className='w-full flex justify-end text-xs'>

          <p
            onClick={() => setCurrentState('Login')}
            className='text-gray-700 cursor-pointer'
          >
            Already have an account? Login
          </p>

        </div>

      )}


      {/* ================= BUTTON ================= */}

      <button
        type='submit'
        className='bg-black text-white px-8 py-2 text-sm mt-7'
      >

        {currentState === 'Login'
          ? 'Sign In'
          : 'Create Account'
        }

      </button>

    </form>

  )
}

export default Login