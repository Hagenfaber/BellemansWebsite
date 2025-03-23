import { GraduationCap, Clock, LineChart, Users, Activity } from "lucide-react"

const backgroundPoints = [
    {
        icon: GraduationCap,
        text: "Master in de Psychologie, opgevolgd met een tweede KULeuven-diploma in praktijkgerichte sportpsychologie.",
    },
    {
        icon: Clock,
        text: "Meer dan 3 jaar praktijkervaring in sportpsychologie, met een focus op individuele atleten, teams en coaches.",
    },
    {
        icon: LineChart,
        text: "8 jaar expertise in prestatie-optimalisatie binnen bedrijven: transformatieprojecten, continuous improvement en high-performance strategieën.",
    },
    { icon: Users, text: "Ervaring met zowel topsportteams, als individuele atleten (referenties op aanvraag)" },
    { icon: Activity, text: "Ironman, duuratleet en jarenlange ervaring met sport op hoog niveau" },
]

export default function AboutBackground() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-[#264038] mb-6">
                    Mijn achtergrond
                </h2>
                <h3 className="text-2xl font-semibold text-center text-[#264038] mb-6">
                    Psychologie, topsport en prestatie-optimalisatie
                </h3>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {backgroundPoints.map((point, index) => (
                        <div key={index} className="flex items-start">
                            <div className="bg-[#7DF7B5] rounded-full p-2 mr-4 flex-shrink-0">
                                <point.icon className="w-6 h-6 text-[#264038]" />
                            </div>
                            <p className="text-[#264038] text-lg">{point.text}</p>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-[#264038] text-lg max-w-3xl mx-auto">
                    Door deze combinatie van mentale training in sport én de principes van prestatiepsychologie uit het
                    bedrijfsleven, help ik atleten en teams niet alleen mentaal sterker te worden, maar ook systematisch beter te
                    presteren.
                </p>
            </div>
        </section>
    )
}

