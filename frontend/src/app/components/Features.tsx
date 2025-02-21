import {Zap, Shield, Smile} from "lucide-react"

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Our platform is optimized for speed and efficiency." },
  { icon: Shield, title: "Secure", description: "Your data is protected with state-of-the-art security measures." },
  { icon: Smile, title: "User Friendly", description: "Intuitive design makes our platform easy to use for everyone." },
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-[#fcf2cf]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264038] mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-[#7DF7B5] mb-4" />
              <h3 className="text-xl font-semibold text-[#264038] mb-2">{feature.title}</h3>
              <p className="text-[#264038]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

