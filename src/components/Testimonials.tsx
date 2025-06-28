
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "City Development Corp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHw5fHxibGFjayUyMHBlb3BsZXxlbnwwfHx8fDE3NTA5Mjk2MTB8MA&ixlib=rb-4.1.0&q=80&w=400",
      role: "Project Director"
    },
    {
      name: "Michael John",
      company: "Metro Transportation Authority",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      rating: 5,
      image: "https://images.unsplash.com/photo-1637856794303-d864ce316444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwxfHxibGFjayUyMHBlb3BsZSUyMGNvb3BlcmF0ZSUyMHxlbnwwfHx8fDE3NTA5Mjk3NzB8MA&ixlib=rb-4.1.0&q=80&w=400",
      role: "Chief Engineer"
    },
    {
      name: "Emily Rodriguez",
      company: "Green Water Solutions",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim ipsam odit dolor provident? Ea nihil corporis id illum culpa?",
      // text: "Their expertise in water management systems is unparalleled. The treatment facility they designed has been operating flawlessly for over two years.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTgyMTB8MHwxfHNlYXJjaHwzfHxibGFjayUyMHBlb3BsZSUyMHxlbnwwfHx8fDE3NTA5Mjk4MjV8MA&ixlib=rb-4.1.0&q=80&w=400",
      role: "Operations Manager"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-100 rounded-full opacity-30 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6 animate-bounce-in">
            <Quote className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in-left">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 animate-slide-in-up group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-blue-100"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Quote className="h-4 w-4 text-white" />
                </div>

                {/* Stars */}
                <div className="flex mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current animate-twinkle" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-8 italic text-lg leading-relaxed font-medium text-center">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                       width={800}
                      height={600}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-blue-600 font-semibold mb-1">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block bg-white rounded-lg p-6 shadow-lg">
            <p className="text-gray-600 mb-4">Join our satisfied clients and experience excellence</p>
            <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold">
              <Star className="h-5 w-5 fill-current" />
              <span>4.9/5 Average Rating</span>
              <Star className="h-5 w-5 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
