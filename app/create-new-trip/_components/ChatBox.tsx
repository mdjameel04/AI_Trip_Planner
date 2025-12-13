"use client"

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { Loader, Send} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import EmptyBoxState from './EmptyBoxState'
import GroupSizeUi from './GroupSizeUi'
import BudgetUi from './BudgetUi'
import FinalUi from './FinalUi'
import SelectDays from './SelectDays'

type Messages={
  role : string,
  content: string,
  ui?: string
}

type TripInfo ={
  budget: string,
  destination : string,
  duration: string,
  group_size: string,
  origin:  string,
  hotels : any,
  itinerary: any
}

const ChatBox = () => {
const [messages, setMessages] = useState<Messages[]>([]);
const [userInput, setUserInput] = useState<string>();
const [loading, setLoading] = useState(false);
const [isFinal, setIsFinal] = useState(false);
const [tripDeatail, setTripDeatail] = useState();
const onSend =async()=>{
if(!userInput?.trim()) return;
setLoading(true)
setUserInput("");
const newMsg:Messages={
  role:"user",
  content:userInput ?? "",
}
setMessages((prev:Messages[])=>[...prev,newMsg])

const result = await axios.post('/api/aimodel',{
  messages:[...messages,newMsg],
  isFinal:isFinal
});

console.log( "Trip",result.data)
 !isFinal&& setMessages((prev:Messages[])=>[...prev,{
  role:'assistant',
  content: result?.data?.resp,
  ui: result?.data?.ui
}])

if(isFinal) {
  setTripDeatail(result.data.trip_plan)
}
 
console.log(result.data)
setLoading(false)
}
    const RenderGenrativeUi=(ui?:string)=>{
      if(ui=="budget"){
        // Budget Ui Component
        return <BudgetUi  onSelectOption={(v:string)=>{setUserInput(v), onSend()}}   />
      } else if(ui=="groupSize") {
      // Group size ui
      return <GroupSizeUi onSelectOption={(v:string)=>{setUserInput(v),onSend()}} />
      } else if(ui=="tripDuration") {
        return <SelectDays  onSelectOption={(v:string)=>{setUserInput(v),onSend()}} /> 
      } else if(ui== "final"){
        return <FinalUi viewTrip={()=> console.log()}
        disable= {!tripDeatail}
        />
      }
      return null
    }

   useEffect(()=>{
   const lastMsg= messages[messages.length-1]
   if(lastMsg?.ui=="final"){
    setIsFinal( true);
    setUserInput("Ok great !")
    // onSend()
   }
   },[messages])

   useEffect(()=>{
    if(isFinal &&userInput){
        onSend()
    }
   },[isFinal])

  return (
    <div className='h-[85vh] flex flex-col '>
      {messages?.length==0 && 
      <EmptyBoxState
       onSelectOption={(v:string)=>{setUserInput(v), onSend()}}/>}
        {/* Display Messages */}
        <section className='flex-1 overflow-y-auto'>
       {messages.map((msg:Messages,index)=>(
          msg.role=='user'?
                <div className='flex justify-end mt-2' key={index}>
   <div className='max-w-lg bg-primary text-white px-4 py-2 rounded-lg'>
       {msg.content}
   </div>
        </div>:
        <div className='flex justify-start mt-2'>
   <div className='max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg'>
     {msg.content}
     {RenderGenrativeUi(msg.ui??"")}
   </div>
        </div>
       ))}
      { loading&& <div className='flex justify-start mt-2'>
   <div className='max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg'>
     <Loader className='animate-spin'/>
   </div>
   </div>}

        </section>

{/* User input*/}
  <section>
     <div className='relative border p-4 rounded-2xl' >
            <Textarea placeholder=' create a trip for paris from New York  '
            className='w-full h-28 bg-transparent  border-none  focus-visible:ring-0 shadow-none resize-none'
            onChange={(event)=>setUserInput(event.target.value)}
            value={userInput}
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