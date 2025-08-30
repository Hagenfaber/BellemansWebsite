import RunningLadies from "@/images/runningladies-min.jpg";

const collaborationSteps = [
  "Intakegesprek om de noden en behoeftes in kaart te brengen. Ik werk altijd op maat van het team of de federatie. ",
  "Eventueel een additionele analyse van de huidige teamdynamiek, individuele sterktes en aandachtspunten & mentale kracht. Sterktes en groeipunten worden in kaart gebracht met wetenschappelijk gevalideerde methodes. De groeipunten worden omgezet naar een concreet stappenplan zodat we ze gericht kunnen aanpakken.",
  "Continue begeleiding doorheen het seizoen, gefocust op de wensen/noden van het team of de federatie. Hierbij werk ik met op maat gemaakte prestatieprogramma’s om vooruitgang ook meetbaar te maken.",
  "Implementatie & opzetten van een cultuur van doorlopende optimalisatie (continuous improvement) – aandacht voor mentale training wordt een vast onderdeel van de prestatiecultuur, ook wanneer de sportpsychologische begeleiding verdwijnt."
]

export default function TeamCollaboration() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-10 h-full">
        <div className={"md:flex flex-1 justify-center items-center"}>
          <img src={RunningLadies} alt={"lopende dames"}
               className={"shadow-xl rounded"}/>
        </div>
        <div className={"md:flex flex-col justify-center items-center md:flex-2"}>
          <h2 className="text-3xl font-bold text-center text-[#264038] mb-12">Hoe werkt onze samenwerking?</h2>
          <div className="space-y-8 max-w-full sm:max-w-[85%] md:max-w-[60%] flex flex-col items-center mx-auto">
            {collaborationSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-[#7DF7B5] text-[#264038] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-[#264038] text-lg">{step}</p>
                </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[#264038] text-xl">
            🏆 Resultaat: een team dat niet alleen fysiek, maar ook mentaal onverslaanbaar wordt.
          </p>
          <p className="mt-4 text-center text-[#264038] text-xl">Prijs op aanvraag.</p>
        </div>

      </div>
    </section>
  )
}

