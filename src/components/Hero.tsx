import React from 'react'

function Hero() {
  return (
    <div className=' max-w-7xl mx-auto flex items-center justify-center flex-col min-h-screen gap-6'>
       <div className='text-neutral-50 text-center flex flex-col gap-2'>
        <h2 className='text-6xl text-center font-bold leading-tight tracking-tight'>
          Write smarter, faster, and better <br />
          <span>with <span className='bg-clip-text text-transparent bg-linear-to-r from-green-600 to-teal-400'> AI</span></span>

        </h2>
        <p className='max-w-2xl text-center mx-auto text-zinc-400 text-xl' >Generate high-quality blogs, captions, and emails in seconds. WriteWise helps you express ideas effortlessly with AI that understands your tone and intent.</p>

        
       </div>

       <div className='flex justify-center'>
         <button className='relative cursor-pointer border border-neutral-700 px-4 py-2  text-neutral-100 rounded-2xl'>
          <div className='absolute -bottom-px inset-x-0 w-full h-px bg-linear-to-r from-transparent via-teal-600 to-transparent'></div>
          Join the Waitlist</button>
       </div>
       
    </div>
  )
}

export default Hero