import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    sport: "Professional Basketball Player",
    quote: "Dr. Smith's techniques have been game-changing for my mental preparation.",
  },
  {
    name: "Sarah Lee",
    sport: "Olympic Swimmer",
    quote: "I've seen a significant improvement in my performance since working with Dr. Smith.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#E7EFED]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264038] mb-12">Athlete Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#7DF7B5]" fill="#7DF7B5" />
                ))}
              </div>
              <p className="text-[#264038] mb-4 italic">"{testimonial.quote}"</p>
              <div className="font-semibold text-[#264038]">{testimonial.name}</div>
              <div className="text-sm text-[#BDC5C3]">{testimonial.sport}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

