import React from 'react'
import ImpactComponents from '@/components/Impact/ImpactComponents'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import MilkFlow from '@/components/FAQ/MilkFlow'

function page() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* Add padding-top equal to navbar height */}
        <ImpactComponents />
      </main>
      <div className="relative bg-gradient-to-b from-lgreen to-dgreen">
        <MilkFlow />
        <Footer />
      </div>
    </>
  )
}

export default page