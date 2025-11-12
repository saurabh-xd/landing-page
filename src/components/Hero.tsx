"use client"
import { Sparkles } from 'lucide-react'
import { motion } from 'motion/react'
import { BackgroundBeams } from './ui/background-beams'


const heroVariants = {
  hidden: { opacity: 0, y: 20},
  visible: {opacity: 1, y: 0 }
}
function Hero() {
  return (
    <div className='relative max-w-7xl mx-auto flex items-center justify-center flex-col min-h-screen gap-6'>

      
<div className='relative z-10 flex items-center justify-center flex-col gap-6'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="px-4 py-1.5 flex items-center justify-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 hover:bg-teal-300/10 text-sm font-medium text-teal-400"
      >
        <Sparkles className='size-3.5' /> Now in Early Access
      </motion.div>

       <div className='text-neutral-50 text-center flex flex-col gap-2'>


        <motion.h2 
        variants={heroVariants}
        initial="hidden"
         animate="visible"
            transition={{ duration: 0.7, delay: 0.2 }}
            
        className='text-6xl text-center font-bold leading-tight tracking-tight'>
          Write smarter, faster, and better <br />
          <span>with <span className='bg-clip-text text-transparent bg-linear-to-r from-green-600 to-teal-400'> AI</span></span>

        </motion.h2>


        <motion.p 
         variants={heroVariants}
        initial="hidden"
         animate="visible"
            transition={{ duration: 0.7, delay: 0.4 }}
         className='max-w-2xl text-center mx-auto text-zinc-400 text-xl' >Generate high-quality blogs, captions, and emails in seconds. WriteWise helps you express ideas effortlessly with AI that understands your tone and intent.
         </motion.p>

        
       </div>

       <motion.div
        variants={heroVariants}
        initial="hidden"
         animate="visible"
           transition={{ duration: 0.7, delay: 0.6 }}
        className='flex justify-center'>
         <button className='relative cursor-pointer border border-neutral-700 px-4 py-2  text-neutral-100 rounded-2xl'>
          <div className='absolute -bottom-px inset-x-0 w-full h-px bg-linear-to-r from-transparent via-teal-600 to-transparent'></div>
          Join the Waitlist</button>
       </motion.div>
       
       </div>

       <BackgroundBeams />
    </div>
  )
}

export default Hero