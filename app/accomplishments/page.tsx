// page.tsx
import Navbar from '@/components/Navbar/Navbar'
import Section1 from '@/components/Accomplishments/Section1'
import Section2 from '@/components/Accomplishments/Section2'
import Section4 from '@/components/Accomplishments/Section4'
import Section3 from '@/components/Accomplishments/Section3'
import React from 'react'

function Accomplishments() {
  return (
      <div className="relative z-10">
        <div 
        className="absolute bg-ygreen inset-0 bg-cover bg-center"  
        style={{
          backgroundImage: "url('/images/milk2.png')",
          zIndex: -1,
        }}
      ></div>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
      </div>
  )
}

export default Accomplishments