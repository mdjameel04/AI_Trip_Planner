import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { Globe2, Landmark, Plane, Send } from 'lucide-react'
const Hero = () => {

    const suggestions=[
        {
            title: "Create New Trip",
            icon : <Globe2 className='w-5 h-5 text-blue-400'/>
        },
        {
            title: "Inspire me where to go ",
            icon : <Plane className='w-5 h-5 text-green-500'/>
        },
        {
            title: "Discover Hidden gems",
            icon : <Landmark className='w-5 h-5 text-orange-500'/>
        },
        {
            title: "Adventure Destination",
            icon : <Globe2 className='w-5 h-5 text-yellow-500'/>
        },
    ]
  return (
    <div className='mt-24 flex justify-center'>
  {/* content */}
    <div className='max-w-3xl w-full text-center space-y-6'>
        <h2 className='text-xl font-bold md:text-5xl'> Hey, I'm Your Personal <span className='text-primary'> Trip planner </span></h2>
  <p className='text-lg'> Tell me what you want, and I,ll handle rest: Flights, hotels, trip planner --all in seconds </p>

    {/*Input Box  */}
    <div>
        <div className='relative border p-4 rounded-2xl' >
            <Textarea placeholder=' create a trip for paris from New York  '
            className='w-full h-28 bg-transparent  border-none  focus-visible:ring-0 shadow-none resize-none'
            /> 
            <Button size={"icon"} className='absolute bottom-6 right-6'> 
                <Send className='h-4 w-4'/>
            </Button>

        </div>
    </div>
    {/* Suggestion list */}
        <div className='flex gap-5'>
            {suggestions.map((suggestions,index)=>(
                <div key={index} className='flex items-center border gap-2 rounded-full p-2 cursor-pointer hover:bg-primary hover:text-white  '>
             {suggestions.icon}
             <h2 className='text-sm'>{suggestions.title} </h2>
                </div>
            ))}
            </div> 

    {/* Video Section */}
    </div>
        </div>

  )
}

export default Hero