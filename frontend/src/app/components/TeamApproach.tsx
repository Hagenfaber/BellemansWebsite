import { Database, Brain, Users, Zap } from "lucide-react"

const approachPoints = [
  {
    icon: Database,
    title: "Data-gedreven prestatiepsychologie",
    description:
      "Ik combineer mentale training met objectieve metingen zoals cognitieve tests, psychofysiologische analyses en biofeedback. Dit maakt mentale progressie net zo meetbaar als fysieke vooruitgang.",
  },
  {
    icon: Brain,
    title: "Mentale veerkracht en wedstrijdmentaliteit versterken",
    description:
      "Gebaseerd op de nieuwste inzichten in neuroplasticiteit en stressregulatie, zodat atleten mentaal voorbereid zijn op elk scenario.",
  },
  {
    icon: Users,
    title: "Teamcohesie en leiderschap optimaliseren",
    description:
      "Ik pas bewezen strategieën toe uit de elite-sport (zoals 'shared mental models' en 'collective efficacy') om teamdynamiek en samenwerking te verbeteren.",
  },
  {
    icon: Zap,
    title: "Focus en flow onder druk",
    description:
      "Leer hoe je atleten systematisch in de optimale prestatiestatus brengt met wetenschappelijk onderbouwde technieken (o.a. attentiecontrole en ademhalingsregulatie).",
  },
]

export default function TeamApproach() {
  return (
    <section className="py-20 px-4 bg-[#fcf2cf]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264038] mb-12">
          Niet alleen theorie, wel toegepaste sportpsychologie op topniveau
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approachPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <point.icon className="w-12 h-12 text-[#7DF7B5] mb-4" />
              <h3 className="text-xl font-semibold text-[#264038] mb-2">{point.title}</h3>
              <p className="text-[#264038]">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

