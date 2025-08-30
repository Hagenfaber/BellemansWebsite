import { CheckCircle } from "lucide-react"

const approachPoints = [
  "Mentale training met impact – Strategieën die niet alleen in een lab bewezen zijn, maar ook in de praktijk werken bij topatleten.",
  "Wetenschappelijk onderbouwde technieken – Gebaseerd op neuropsychologie, prestatiepsychologie en de principes van doelgerichte training.",
  "Van mindset tot focus en veerkracht – Alles wat je nodig hebt om onder druk te presteren, met de precisie van een Olympische voorbereiding.",
]

export default function Approach() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264038] mb-8">
          Dit is geen 'motivatiepraat' – dit is sportpsychologie op wetenschappelijke basis
        </h2>
        <p className="text-lg text-center text-[#264038] mb-12">
          In de topsport telt elk detail. Je fysieke training wordt tot in de puntjes geoptimaliseerd – waarom zou je
          dat niet doen met je mentale training? Mijn aanpak is niet gebaseerd op vage theorieën of standaard 'mental
          coaching', maar op wetenschap en bewezen methodes uit de prestatie- en sportpsychologie.
        </p>
        <div className="space-y-6">
          {approachPoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#7DF7B5] mr-4 shrink-0 mt-1" />
              <p className="text-[#264038]">{point}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-[#264038] font-semibold">
          Jouw mentale kracht wordt niet aan het toeval overgelaten. Dit is een systematische, data-gedreven aanpak
          waarmee je mentaal sterker wordt en topprestaties levert wanneer het telt.
        </p>
      </div>
    </section>
  )
}

