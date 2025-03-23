import { BarChart, RefreshCcw, Trophy } from "lucide-react"

const benefits = [
  {
    icon: BarChart,
    title: "Verbeterde prestaties",
    description:
      "Clubs die mentale training implementeren, presteren tot 30% beter onder druk (Journal of Applied Sport Psychology)",
  },
  {
    icon: RefreshCcw,
    title: "Sneller herstel",
    description: "Mentale veerkracht verlaagt blessures en versnelt herstel (Frontiers in Psychology, 2023)",
  },
  {
    icon: Trophy,
    title: "Hogere win-ratio",
    description:
      "Teams met sterke mentale programma's hebben een hogere win-ratio en stabielere prestaties (Gebaseerd op analyses bij eliteclubs in de NBA, Premier League en Olympische teams)",
  },
]

export default function TeamBenefits() {
  return (
    <section className="py-20 px-4 bg-[#E7EFED]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264038] mb-12">
          Waarom slimme teams investeren in mentale begeleiding
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <benefit.icon className="w-12 h-12 text-[#7DF7B5] mb-4 self-center" />
              <h3 className="text-xl font-semibold text-[#264038] mb-2">{benefit.title}</h3>
              <p className="text-[#264038]">{benefit.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-[#264038] text-xl font-semibold">
          De concurrentie werkt al met prestatiepsychologen. Zorg dat jouw team niet achterblijft.
        </p>
      </div>
    </section>
  )
}

