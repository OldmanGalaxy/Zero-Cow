import React from 'react'
import ImpactComponents from '@/components/Impact/ImpactComponents'
import Navbar from '@/components/Navbar/Navbar'

function page() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Add padding-top equal to navbar height */}
        <ImpactComponents />
      </main>
    </>
  )
}

export default page