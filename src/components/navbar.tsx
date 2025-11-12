"use client"
import { WifiPen } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  const links = [
  { href: '#features', title: 'Features' },
  { href: '#pricing', title: 'Pricing' },
  { href: '#Testimonials', title: 'Testimonials' },

];
  return (
    <div className='flex  items-center  justify-between pt-4  px-6'>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
           
      >
            <Link href="/" className='flex gap-2 items-center justify-center text-neutral-50'>
              <WifiPen className='text-primary' />
               <h1 className='font-bold text-xl'>
                TypeZen</h1>
            </Link>
            </motion.div>


            <div className='md:flex space-x-16 items-center justify-center  hidden'>
                 {
                  links.map((link,key)=>(
                    <motion.div 
                     initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: key * 0.1 }}
              
                        
                    key={key}
                    >
                    <Link  href={link.href} className='text-[18px] text-neutral-400 hover:text-neutral-200 transition-colors duration-200'> 
                    {link.title}
                    </Link>
                    </motion.div>
                  ))
                 }
            </div>

            {/* CTA button */}
              <motion.button
               initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            
              className='px-4 py-2 rounded-md bg-neutral-50 hover:bg-neutral-200 font-medium text-sm transition-colors'>Join Waitlist
              </motion.button>
            
    </div>
  )
}

export default Navbar