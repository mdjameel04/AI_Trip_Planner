import React from 'react'
import Header from './_components/Header';
import { PopularCityList } from './_components/PopularCityList';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        <Header/> 
       
      {children}
    </div>
  )
}

export default Provider
