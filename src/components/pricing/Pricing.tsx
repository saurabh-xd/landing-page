import React from 'react'
import PricingCard from './PricingCard';

import {
  Zap,
  ShieldCheck,
  Wand2,
  FileText,
  Settings2,
  Globe2,
  Users,
  Lock,
  Target,
  Headphones,
} from "lucide-react";

export const plans = [
  {
    title: "Basic",
    price: 19,
    features: [
      { icon: FileText, text: "Up to 10 AI generations per day" },
      { icon: Wand2, text: "Access to core templates" },
      { icon: Settings2, text: "Basic tone customization" },
      { icon: Headphones, text: "Email support" },
      { icon: ShieldCheck, text: "Secure cloud storage" },
    ],
  },
  {
    title: "Pro",
    price: 49,
    popular: true,
    features: [
      { icon: Zap, text: "Unlimited AI generations" },
      { icon: Target, text: "Advanced tone & SEO control" },
      { icon: Wand2, text: "Custom templates & workflows" },
      { icon: Globe2, text: "Real-time content optimization" },
      { icon: Headphones, text: "Priority support" },
      { icon: ShieldCheck, text: "Enhanced data privacy" },
    ],
  },
  {
    title: "Business",
    price: 99,
    features: [
      { icon: Users, text: "Unlimited team members" },
      { icon: Globe2, text: "Collaborative workspaces" },
      { icon: Lock, text: "API access for automation" },
      { icon: ShieldCheck, text: "Enterprise-grade security" },
      { icon: Headphones, text: "Dedicated account manager" },
      { icon: Settings2, text: "Advanced admin controls" },
    ],
  },
];



function Pricing() {
  return (
    <section id='pricing' className='container mx-auto  flex flex-col justify-center items-center min-h-screen'>
    <div className='text-center mb-12'>
<h2 className='text-neutral-50 font-bold text-6xl mb-4'>Pricing</h2>
<p className='text-neutral-400  text-xl'> Get started with the plan that suits your needs</p>

    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch px-6'>
            {plans.map((item,index)=>(
              
               <div 
      key={index}
      className={`${
        item.popular 
          ? 'lg:scale-105 lg:z-10' 
          : 'lg:scale-95 lg:opacity-90'
      } transition-all duration-300`}
    >
                <PricingCard key={index} item={item} />
                </div>
            ))}
    </div>
     
    </section>
  )
}

export default Pricing