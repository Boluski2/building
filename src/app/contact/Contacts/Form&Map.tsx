'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SelectContent, SelectItem, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger } from '@radix-ui/react-select'
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'

const FormMap = () => {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

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
      description: "Visit our headquarters"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      description: "We're here when you need us"
    }
  ];

  const services = [
    "Structural Engineering",
    "Transportation Engineering", 
    "Water Resources Engineering",
    "Geotechnical Engineering",
    "Environmental Engineering",
    "Construction Management",
    "Engineering Analysis",
    "Utility Engineering"
  ];

  const budgetRanges = [
    "Under $100K",
    "$100K - $500K",
    "$500K - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "Over $10M"
  ];

  const timelines = [
    "ASAP",
    "1-3 months",
    "3-6 months", 
    "6-12 months",
    "1+ years",
    "Planning phase"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // toast({
    //   title: "Message Sent Successfully!",
    //   description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    // });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      timeline: ''
    });

    setIsSubmitting(false);
  };



  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form  */}
            <Card className="shadow-xl">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-center">Project Consultation Request</CardTitle>
                <p className="text-gray-600 text-center text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm sm:text-base">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm sm:text-base">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm sm:text-base">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Company Name"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service" className="text-sm sm:text-base">Service Needed</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-sm sm:text-base">Project Budget</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range, index) => (
                            <SelectItem key={index} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-sm sm:text-base">Project Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        {timelines.map((timeline, index) => (
                          <SelectItem key={index} value={timeline}>{timeline}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm sm:text-base">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please describe your project, including scope, location, and any specific requirements..."
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs sm:text-sm text-gray-600 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Info & Benefits */}
            <div className="space-y-6 sm:space-y-8">
              {/* Office Image & Info */}
              <Card className="shadow-xl">
                <div className="h-48 sm:h-64 bg-cover bg-center rounded-t-lg" 
                     style={{backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop')"}}>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Our Headquarters</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {/* Located in the heart of Tech City's engineering district, our state-of-the-art facility 
                    houses our team of expert engineers and cutting-edge design technology. */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quaerat?
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Lagoes, Nigeria</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">Monday - Friday: 8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-xl">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">Why Choose CivilTech?</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">25+ Years Experience</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">Proven track record in complex engineering projects</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Licensed Professionals</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">All engineers are licensed and certified</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">On-Time Delivery</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">98% of projects completed on schedule</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">24/7 Support</h4>
                        <p className="text-gray-600 text-xs sm:text-sm">Ongoing project support and consultation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FormMap
