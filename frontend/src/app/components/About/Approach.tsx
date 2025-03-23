import { FlaskRoundIcon as Flask, LineChart, Zap } from "lucide-react"
import Tile from "@/images/block_tile.png";

const approachPoints = [
    {
        icon: Flask,
        title: "Wetenschappelijke methodes, geen giswerk",
        description:
            "Elke techniek die ik toepas, is onderbouwd door sport- en prestatiepsychologie. Denk aan focus-training, ademhalingsregulatie, growth mindset en stressmanagementtechnieken die in elite-sport bewezen werken.",
    },
    {
        icon: LineChart,
        title: "Mentale training net zo systematisch als fysieke training",
        description:
            "We maken mentale progressie meetbaar met objectieve tools en technieken. Dit zorgt ervoor dat mentaal sterker worden niet iets abstracts is, maar een concreet, trainbaar proces.",
    },
    {
        icon: Zap,
        title: "Toepasbare strategieën voor onder druk presteren",
        description:
            "Het verschil tussen winnen en verliezen zit vaak in één moment. Ik leer atleten en teams hoe ze op die cruciale momenten controle houden, de juiste keuzes maken en in de 'flow state' of 'in-the-zone' zitten.",
    },
]

export default function AboutApproach() {
    return (
        <section className="py-20 px-4 bg-white" style={{
            backgroundImage:  "url(" + Tile + ")"
        }}>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#264038] text-[#264038] mb-6">
                    Mijn aanpak
                </h2>
                <h3 className="text-2xl font-semibold text-center text-[#264038] mb-6">
                    Wetenschappelijk, meetbaar en praktisch toepasbaar
                </h3>
                <p className="text-lg text-center text-[#264038] mb-12 max-w-3xl mx-auto">
                    De wereld van sportpsychologie verandert. Waar mentale training vroeger vooral draaide om motivatie en
                    visualisatie, werken we vandaag met neurotraining, biofeedback, cognitieve strategieën en prestatiedata om
                    atleten op een hoger niveau te brengen.
                </p>
                <p className="text-lg text-center text-[#264038] mb-12 max-w-3xl mx-auto font-semibold">
                    Mijn aanpak is gebaseerd op drie kernprincipes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

