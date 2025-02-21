const collaborationSteps = [
  "Grondige analyse van huidige teamdynamiek & mentale kracht – Ik breng sterktes en groeipunten in kaart met wetenschappelijk gevalideerde methodes.",
  "Op maat gemaakt prestatieprogramma – Gericht op mentale veerkracht, focus, teamcohesie en wedstrijdmentaliteit.",
  "Implementatie & doorlopende optimalisatie (continuous improvement) – Mentale training wordt een vast onderdeel van jullie prestatiecultuur.",
]

export default function TeamCollaboration() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264038] mb-12">Hoe werkt onze samenwerking?</h2>
        <div className="space-y-8">
          {collaborationSteps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-[#7DF7B5] text-[#264038] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                {index + 1}
              </div>
              <p className="text-[#264038] text-lg">{step}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-[#264038] font-semibold">Prijs op aanvraag.</p>
        <p className="mt-4 text-center text-[#264038] text-xl">
          🏆 Resultaat: een team dat niet alleen fysiek, maar ook mentaal onverslaanbaar wordt.
        </p>
      </div>
    </section>
  )
}

