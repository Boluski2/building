import { Phone } from 'lucide-react'
import React from 'react'

const Emergency = () => {
  return (
     <section className="py-12 sm:py-16 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Emergency Engineering Services</h2>
          <p className="text-lg sm:text-xl text-red-100 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
            For urgent structural assessments or emergency engineering consultations, 
            call our 24/7 emergency hotline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 sm:h-6 w-5 sm:w-6" />
              <span className="text-lg sm:text-xl font-bold">+2340 1234 5678</span>
            </div>
            <div className="text-red-200 text-sm sm:text-base">Available 24/7 for critical situations</div>
          </div>
        </div>
      </section>
  )
}

export default Emergency
