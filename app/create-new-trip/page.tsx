import React from 'react'
import ChatBox from './_components/ChatBox'

const CreateNewTrip = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-10'> 
  {/* chat box */}
  <div>
   <ChatBox/>
  </div>
{/* map */}
 <div>
    Map and trip planner to display
 </div>
    </div>
  )
}

export default CreateNewTrip