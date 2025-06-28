
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, ChevronRight } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What types of civil engineering projects do you handle?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      // answer: "We specialize in a wide range of civil engineering projects including structural design, transportation infrastructure, water resources management, geotechnical engineering, and environmental engineering. Our expertise covers bridges, highways, buildings, water treatment facilities, and more.",
      category: "Services"
    },
    {
      question: "How long does a typical project take to complete?",
       answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      category: "Timeline"
    },
    {
      question: "Do you provide project management services?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      category: "Services"
    },
    {
      question: "What is your approach to sustainable engineering?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      category: "Sustainability"
    },
    {
      question: "How do you ensure project quality and safety?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      category: "Quality"
    },
    // {
    //   question: "Do you work with other consultants and contractors?",
    //   answer: "Absolutely. We collaborate with a network of trusted architects, contractors, environmental consultants, and other specialists to ensure comprehensive project delivery. We can recommend partners or work with your preferred team.",
    //   category: "Collaboration"
    // },
    // {
    //   question: "What are your pricing structures?",
    //   answer: "Our pricing varies based on project scope, complexity, and duration. We offer competitive rates and provide detailed cost breakdowns during the proposal phase. We believe in transparent pricing with no hidden fees.",
    //   category: "Pricing"
    // },
    // {
    //   question: "Do you provide emergency engineering services?",
    //   answer: "Yes, we offer 24/7 emergency engineering services for urgent structural assessments, disaster response, and critical infrastructure repairs. Our rapid response team can be mobilized within hours.",
    //   category: "Emergency"
    // }
  ];

  const categories = ["All", "Services", "Timeline", "Quality", "Sustainability", "Collaboration", "Pricing", "Emergency"];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 animate-spin-slow"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200 to-transparent rounded-full opacity-40 animate-pulse-slow"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-6 animate-bounce-in shadow-lg">
            <HelpCircle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our civil engineering services
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {categories.slice(0, 5).map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="group relative border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-slide-in-left"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                
                <div className="relative p-6">
                  <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300 [&[data-state=open]]:text-blue-600 group py-0 hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                        <ChevronRight className="h-4 w-4 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-90" />
                      </div>
                      <span className="text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pt-4 pl-12 animate-accordion-down">
                    <div className="p-4 bg-blue-50/50 rounded-xl border-l-4 border-blue-400">
                      {faq.answer}
                    </div>
                    <div className="mt-3 ml-4">
                      <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {faq.category}
                      </span>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Contact Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6">
              Our team of experts is here to help you with any specific inquiries about your project.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
