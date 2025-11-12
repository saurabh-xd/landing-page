"use client"
import { PenTool, Brain, Sparkles, Target, LineChart, Zap } from "lucide-react";
import Link from 'next/link';
import { motion } from 'motion/react';

export const features = [
  {
    title: "Smart AI Writing",
    description: "Generate clear, engaging text instantly using advanced natural language models.",
    icon: PenTool,
    
  },
  {
    title: "Personalized Tone",
    description: "Adjust your writing style — professional, friendly, or creative — in one click.",
    icon: Brain,
  },
  {
    title: "SEO Optimization",
    description: "Automatically improve readability and keyword balance for better rankings.",
    icon: LineChart,
  },
  {
    title: "Content Templates",
    description: "Access ready-to-use formats for blogs, emails, captions, and more.",
    icon: Sparkles,
    span: "col-span-2"
  },
  {
    title: "Goal-Oriented Writing",
    description: "Set your content goals, and let AI tailor the tone and depth accordingly.",
    icon: Target,
  },
 
];

function Features() {
  return (
   
    <div id='features' className='max-w-7xl mx-auto min-h-screen text-neutral-100 flex flex-col items-center  justify-center py-12'>
        <div className='text-center flex flex-col gap-4 mb-12'>
       <motion.h2
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{ duration: 0.5,  }}
        viewport={{ once: true }}
       className='font-bold text-4xl'>Write Smarter with AI     </motion.h2>


       <motion.p
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{ duration: 0.5 }}
      viewport={{ once: true }}
        className='max-w-2xl font-semibold text-neutral-400 text-lg'> TypeZen combines intelligence, creativity, and simplicity — giving you the tools to write faster and smarter than ever before.</motion.p>
       </div>

       <div className='grid grid-cols-3 gap-4'>
         {
            features.map((item,index)=>(
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1}}
      
                 key={index} className={`border border-neutral-800  rounded-lg p-8 flex bg-neutral-900/50 hover:border-teal-500/50  hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]  flex-col justify-center gap-4 ${item.span || ""}`}>
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-br from-teal-500/10 to-green-500/10 border border-teal-600/20">
  <item.icon className="text-teal-400 size-6" />
</div>
                    <h2 className='font-semibold text-xl'>{item.title}</h2>
                    
                    <p className='text-neutral-400 font-semibold'>{item.description}</p>
                   
                </motion.div>
            ))
         }
       </div>
       
    </div>
  
  )
}

export default Features