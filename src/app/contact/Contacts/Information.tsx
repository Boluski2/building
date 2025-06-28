import { Card, CardContent } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

const Information = () => {

      const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+2340 1234 5678"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@mail.com"],
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["Lagoes, Nigeria"],
      description: "Visit our Office"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 5:00 PM"],
      description: "We're here when you need us"
    }
  ];



  return (
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Multiple ways to reach us for your convenience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <info.icon className="h-10 sm:h-12 w-10 sm:w-12 text-blue-600 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-2 sm:mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-900 font-medium text-sm sm:text-base">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Information
