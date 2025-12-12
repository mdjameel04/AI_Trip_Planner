import { suggestions } from '@/app/_components/Hero'
import React from 'react'

const EmptyBoxState = ({onSelectOption}:any) => {
  return (
    <div className='mt-7'>
        <h2 className='font-bold text-3xl text-center'> Star Planning new <strong className='text-primary'> Trip</strong></h2>
        <p className="text-center text-gray-600 mt-2">
         Discovered personalized travel itinerarie, find the best destinations, and plan your dream vacation effortlessly with the power of AI. Let our smart assistant do the hard work while you enjoy the journey.
</p>
    {/* Suggestion list */}
           <div className='flex flex-col gap-5 mt-5'>
               {suggestions.map((suggestions,index)=>(
                   <div key={index}
                   onClick={()=>onSelectOption(suggestions.title)}
                   className='flex items-center border gap-2 rounded-xl p-3 cursor-pointer hover:border-primary hover:text-primary  '>
                {suggestions.icon}
                <h2 className='text-lg'>{suggestions.title} </h2>
                   </div>
               ))}
               </div>

    </div>
  )
}

export default EmptyBoxState