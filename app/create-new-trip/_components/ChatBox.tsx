"use client"

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React from 'react'

const ChatBox = () => {
const onSend =()=>{

}
    
  return (
    <div className='h-[85vh] flex flex-col '>
        {/* Display Messages */}
        <section className='flex-1 overflow-y-auto'>
        <div className='flex justify-end mt-2'>
   <div className='max-w-lg bg-primary text-white px-4 py-2 rounded-lg'>
      User Msg
   </div>
        </div>
        <div className='flex justify-start mt-2'>
   <div className='max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg'>
      Ai Agent msg
   </div>
        </div>
        </section>

{/* User input*/}
  <section>
     <div className='relative border p-4 rounded-2xl' >
            <Textarea placeholder=' create a trip for paris from New York  '
            className='w-full h-28 bg-transparent  border-none  focus-visible:ring-0 shadow-none resize-none'
            /> 
            <Button size={"icon"} className='absolute bottom-6 right-6' onClick={()=>onSend()}> 
                <Send className='h-4 w-4'/>
            </Button>
             </div>
  </section>
    </div>
  )
}

export default ChatBox 