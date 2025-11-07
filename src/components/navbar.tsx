import { WifiPen } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  const links = [
  { href: '#features', title: 'Features' },
  { href: '/pricing', title: 'Pricing' },
  { href: '/Testimonials', title: 'Testimonials' },
  { href: '/About', title: 'About' }
];
  return (
    <div className='flex  items-center  justify-between py-3 px-4 border-b border-neutral-900'>
            <Link href="/" className='flex gap-2 items-center justify-center text-neutral-50'>
              <WifiPen className='text-primary' />
               <h1 className='font-bold text-xl'>
                WriteWise</h1>
            </Link>

            <div className='flex gap-8 items-center justify-center  font-semibold'>
                 {
                  links.map((link,key)=>(
                    <Link key={key} href={link.href} className='text-lg text-neutral-400 hover:text-neutral-200 transition-colors duration-200'> {link.title}</Link>
                  ))
                 }
            </div>

            {/* CTA button */}
              <button className='px-4 py-2 rounded-md bg-neutral-50 hover:bg-neutral-200 font-medium text-sm transition-colors'>Join Waitlist</button>
            
    </div>
  )
}

export default Navbar