import { CheckIcon } from "@radix-ui/react-icons";
import brickPrimary from "@/images/buildyouredge_illustratie_2.png";

// @ts-ignore
import Tile from "@/images/block_tile.png";
// @ts-ignore
import StrongMan from "@/images/strong_man-min.jpg";

const expectations = [
  {
    text: "Individuele begeleiding – Geen standaardadvies, maar mentale strategieën op maat voor jouw sport, uitdagingen en doelen",
    icon: brickPrimary
  },
  {
    text: "Direct toepasbare technieken – Praktische tools die je meteen kan gebruiken in training en competitie",
    icon: brickPrimary
  },
  {
    text: "Meetbare vooruitgang – Een gestructureerd traject waarbij we je mentale kracht stap voor stap opbouwen",
    icon: brickPrimary
  },
  {
    text: "Topsportmentaliteit – Leren denken en handelen als de absolute top in jouw discipline",
    icon: brickPrimary
  },
]

export default function Expectations() {
  return (
    <section className="py-20 px-4 bg-white" style={{
      backgroundImage:  "url(" + Tile + ")"
    }}>
      <div className={"container mx-auto flex flex-row gap-10 h-full"}>
        <div className={"hidden md:flex flex-1 justify-center items-center"}>
          <img src={StrongMan} alt={"strong-man"}
               className={"max-h-full shadow-2xl rounded shadow-[#7DF7B5]"}/>
        </div>

        <div className="bg-white p-6 rounded shadow-2xl shadow-[#7DF7B5] flex-3">
          <h2 className="text-3xl font-bold text-center text-[#264038] mb-8">Wat kun je verwachten?</h2>
          <p className="text-xl text-center text-[#264038] mb-12 italic">
            "Mentale kracht is niet aangeboren – het is aangeleerd. En jij kunt het meester worden."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expectations.map((expectation, index) => (
                <div key={index} className="flex items-start">
                  <img className="w-5 h-4 text-[#7DF7B5] mr-4 flex-shrink-0 mt-1" src={expectation.icon} alt={"Backsteen"}/>
                  <p className="text-[#264038]">{expectation.text}</p>
                </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[#264038]">
            Individuele sessies kunnen zowel digitaal als ter plaatse in de praktijk plaatsvinden - afhankelijk van jouw voorkeur en beschikbaarheid. Dit biedt flexibiliteit, zodat we altijd een oplossing kunnen vinden die past in jouw schema en situatie. Of je nu vanuit huis, hier in de praktijk  of onderweg sessies wenst te houden, het is allemaal mogelijk.
            
            De sessies duren een volledig uur en worden in rekening gebracht tegen <b>72 EUR</b>. Gesprekken in de praktijk kunnen zowel in <b>Ekeren (Antwerpen)</b> als in <b>Erps-Kwerps (Vlaams-Brabant)</b>.
            
          </p>
        </div>
      </div>

    </section>
  )
}

