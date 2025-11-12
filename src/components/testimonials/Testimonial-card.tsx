import Image from 'next/image'
import React from 'react'

function TestimonialCard({item}: any) {
  return (
   
        <div  className="flex flex-col h-64 shrink-0 w-sm gap-10 bg-neutral-900 border border-neutral-800 justify-center p-8 rounded-lg ">
                <p>{item.feedback}</p>
                <div className="flex gap-2 items-center">

                    <div>
                    <Image 
                    alt={item.name}
                     src={item.image}
                     width={45}
                     height={45}
                     className="rounded-full"
                     />
                    </div>

                    <div>
                        <h2 className="font-semibold">{item.name}</h2>
                        <p className="text-neutral-400">{item.role}</p>
                    </div>
                </div>
            </div>
    
  )
}

export default TestimonialCard