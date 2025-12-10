
"use client"
import React, { useEffect } from 'react'
import Header from './_components/Header';
import { PopularCityList } from './_components/PopularCityList';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
// calls the backend when user logs in

  const CreateUser = useMutation(api.user.CreateNewUser)
  const {user} = useUser();
  
useEffect(()=>{
  user && CreateNewUser()
},[user])

const CreateNewUser = async()=>{
  // save New User if not exist
  if(user) {
  const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl ?? "",
        name : user?.fullName ?? ""
  })
}
}



  return (
    <div>
        <Header/> 
       
      {children}
    </div>
  )
}

export default Provider
