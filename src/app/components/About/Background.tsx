import { GraduationCap, Clock, LineChart, Users, Activity, User } from "lucide-react"
// @ts-ignore
import bike from "@/images/about/Bike3-min.jpg";

const backgroundPoints = [
    {
        icon: User,
        text: "Ik ben Dieter Bellemans, gediplomeerd sport- en prestatiepsycholoog werkzaam vanuit twee praktijken – zowel in Ekeren (Antwerpen) als Erps-Kwerps (Vlaams-Brabant)."
    },
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
            <div className="container mx-auto flex flex-col md:flex-row gap-10 h-full">
                <div className={"md:flex flex-1 justify-center items-center"}>
                    <img src={bike} alt={"strong-man"}
                         className={"max-h-[70%] rounded shadow-xl"}/>
                </div>
                <div className={"md:flex flex-col flex-1 justify-center items-center"}>
                    <h2 className="text-3xl font-bold text-center text-[#264038] mb-6">
                        Mijn achtergrond
                    </h2>
                    <h3 className="text-2xl font-semibold text-center text-[#264038] mb-6">
                        Psychologie, topsport en prestatie-optimalisatie
                    </h3>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        {backgroundPoints.map((point, index) => (
                            <div key={index} className="flex items-start">
                                <div className="bg-[#7DF7B5] rounded-full p-2 mr-4 shrink-0">
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
            </div>
        </section>
    )
}

