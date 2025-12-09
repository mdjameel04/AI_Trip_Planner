import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

const Header = () => {

const menuOptions =[
{ 
    name: "Home",
    path: "/"
},
{ 
    name: "Pricing",
    path: "/pricing"
},
{ 
    name: "Contact us",
    path: "/contact-us"
}
]
  return (
    <div className='flex items-center justify-between p-4 '>
        {/* Logo */}
        <div className='flex items-center gap-2'>
    <Image src={"logo.svg"} alt='ai trip-planner' width={30} height={30}/>
     <h2 className='text-2xl font-bold'> AI Trip Planner</h2>
    </div>
        {/* menuItems */}
           <div className='flex items-center gap-6'>
            {menuOptions.map((menu, index)=>(
            <Link href={menu.path} key={index}>
            <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'> {menu.name} </h2>
            </Link>
            ))}
           </div>

        {/* buttons */}

         <Button> Get Started </Button>
    </div>
  )
}

export default Header