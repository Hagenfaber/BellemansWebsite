import { Target, Zap, Brain, Trophy } from "lucide-react"

const services = [
  { icon: Target, title: "Presteren onder druk", description: "Blijf kalm en gefocust op beslissende momenten" },
  {
    icon: Zap,
    title: "Blokkades en onzekerheid doorbreken",
    description: "Zodat je traint én presteert op het hoogste niveau",
  },
  {
    icon: Brain,
    title: "Angst en stress omzetten in kracht",
    description: "Overwin je angsten en leer hoe je spanning gebruikt als brandstof",
  },
  {
    icon: Trophy,
    title: "Een winnaarsmentaliteit ontwikkelen",
    description: "Niet alleen denken als een kampioen, maar er ook naar handelen",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264038] mb-12">
          Met bewezen strategieën uit de elite-sportpsychologie help ik atleten zoals jij:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#E7EFED] p-6 rounded-lg shadow-md">
              <service.icon className="w-12 h-12 text-[#7DF7B5] mb-4" />
              <h3 className="text-xl font-semibold text-[#264038] mb-2">{service.title}</h3>
              <p className="text-[#264038]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

