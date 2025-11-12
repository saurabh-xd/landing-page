"use client"
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react' 

function CtaSection() {
  return (
    <motion.div
     initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration: 0.5, delay: 0.1}}
       viewport={{once: true}}
    className=' mb-16  bg-linear-to-b  text-neutral-50 mx-auto flex flex-col justify-center items-center'>
       <div
      

       className='text-center mb-10'>
   <h2 className='font-semibold text-6xl max-w-2xl mb-4'>Ready to write smarter with AI?</h2>
   <p className='font-medium text-neutral-400'>Join thousands of creators using TypeZen to write faster, better, and effortlessly.</p>
       </div>

      
         <button
          className='px-4 py-2 flex items-center justify-center gap-1 bg-linear-to-br from-teal-600 to-teal-400 hover:from-teal-500 hover:to-teal-600 transition-all duration-300 rounded-3xl font-semibold cursor-pointer  '>Get Started <ArrowRight /></button>
       
    </motion.div>
  )
}

export default CtaSection