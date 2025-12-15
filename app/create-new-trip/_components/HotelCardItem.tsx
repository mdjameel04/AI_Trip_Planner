import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Star, Wallet } from 'lucide-react'
import { Hotel } from './ChatBox'

type Props = {
hotel : Hotel
}

const HotelCardItem = ({hotel}:Props) => {
  return (
        <div  className='flex flex-col gap-1 '>
                   <Image src={'/mountain.jpeg'} alt='mountain' width={400} height={200}
                   className=' rounded-2xl shadow object-cover mb-2'/>
                   <h2 className='font-semibold text-lg'>{hotel.hotel_name} </h2>
                   <h2 className='text-gray-500'>{hotel.hotel_address} </h2>
                   <div className='flex items-center justify-between' >
                   <p className='flex items-center gap-2 text-green-500'> <Wallet/>  { hotel.price_per_night} </p>
                   <p className='flex text-yellow-400 gap-2'><Star/> {hotel.rating} </p>
               </div>
       <Link href={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotel_name} target='_blank'>
               <Button variant={"outline"} className='mt-1 w-full'> View   </Button>
               </Link>
               {/* <p className='line-clamp-2 text-gray-500'>{hotel.description} </p> */}
               </div>
  )
}

export default HotelCardItem