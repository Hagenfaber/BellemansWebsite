import { Target, Zap, Brain, Trophy } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Optimale prestaties onder druk",
    description: "Geen mentale inzinkingen op cruciale momenten",
  },
  {
    icon: Zap,
    title: "Veerkrachtige, winnende teamcultuur",
    description: "Omgaan met tegenslagen en presteren op het hoogste niveau",
  },
  {
    icon: Brain,
    title: "Systematische mentale training",
    description: "Meetbare progressie in focus, motivatie en mentale weerbaarheid",
  },
  {
    icon: Trophy,
    title: "Toepassing van nieuwste inzichten",
    description: "Van neurotraining tot biofeedback en prestatiegerichte mindset-strategieën",
  },
]

export default function TeamServices() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264038] mb-12">
          Als gecertificeerd sportpsycholoog help ik sportclubs, federaties en teams om:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#E7EFED] p-6 rounded-lg shadow-md flex flex-col">
              <service.icon className="w-12 h-12 text-[#7DF7B5] mb-4 self-center" />
              <h3 className="text-xl font-semibold text-[#264038] mb-2">{service.title}</h3>
              <p className="text-[#264038]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

