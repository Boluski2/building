'use client'

import Clientlogo from '@/components/Clientlogo'
import Engineeringservice from '@/components/Engineeringservice'
import FAQ from '@/components/FAQ'
import FeaturedProject from '@/components/Featureproject'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import React, { useState } from 'react'

const page = () => {


  return (
   <main className='min-h-screen'>
      <Hero/>
      <Clientlogo/>
      <Engineeringservice/>
      <FeaturedProject />
      <Testimonials/>
      <FAQ/>
    </main>
  )
}


export default page
