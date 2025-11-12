"use client"
import { motion } from 'motion/react';
import React from 'react'

interface Feature {
  icon: React.ElementType;
  text: string;
}

interface Plan {
  title: string;
  price: number;
  popular?: boolean;
  features: Feature[];
}

function PricingCard({item}: {item: Plan}) {
  return (
    <motion.div
     initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{once: true}}
    className={`relative max-w-2xl p-8 h-full min-h-[420px] flex flex-col justify-between  rounded-lg 
     ${item.popular? 'bg-teal-900/20 border-2 border-teal-500/50 shadow-teal-500/20 shadow-lg': 'bg-neutral-950 border border-neutral-800'}`}>


        {item.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-xl text-sm font-medium bg-teal-500 text-neutral-50">
            Most Popular
          </span>
        </div>
      )}
         <div className='text-neutral-50 mb-8 flex flex-col gap-1'>
            <h2 className='font-bold text-2xl'>{item.title}</h2>
            <h3 className='font-bold text-3xl'> ${item.price} <span className='text-sm text-neutral-400 font-semibold'>/month</span></h3>
         </div>

         <ul className='text-neutral-100 space-y-4 mb-8'>
            {item.features.map((features: { icon: React.ElementType; text: string } ,index: number )=>(
                <li key={index} className='flex gap-3 items-center' ><features.icon className={`size-5 ${
    item.title === "Pro"
      ? "text-teal-400"
      : "text-neutral-400"
  }`} /> <span>{features.text}</span></li>
            ))}
         </ul>

         <button className={`px-6 py-2 rounded-lg w-full font-medium transition-all duration-300 cursor-pointer  ${item.popular? 'bg-primary hover:bg-primary/90 text-neutral-900 ':'bg-neutral-900 hover:bg-neutral-700 border border-neutral-700 text-neutral-200'}`}>Get Started</button>
    </motion.div>
  )
}

export default PricingCard 