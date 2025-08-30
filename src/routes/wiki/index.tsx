import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/wiki/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className={"bg-white"}>
            <div className="mx-auto px-4 py-12 max-w-4xl">
                <div className="border-[#264038] border-2 text-[#264038] p-6 rounded-lg shadow-sm mb-8">
                    <h1 className="text-4xl font-bold mb-2 text-primary-900 border-b border-[#264038] pb-2">
                        De rol van sportpsychologie in mentaal welzijn en prestaties
                    </h1>
                    <p className="text-primary-700 italic">
                        Een diepere kijk in het domein van sportpsychologie en mentale begeleiding
                    </p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-800 space-y-6">
                    {/* Introduction with accent color border */}
                    <p className="bg-[#7DF7B555] p-4 rounded-md border-l-4 border-[#7DF7B5]">
                        Om een vollediger beeld achter de schermen te bieden, alsook iets dieper in te gaan op thema's,
                        licht ik graag het domein en mijn scope van werkzaamheden nog iets dieper toe. Ik ben werkzaam
                        vanuit zowel <span className="font-medium">Antwerpen (Ekeren)</span>, als omgeving <span className="font-medium">Leuven/Brussel (te Erps-Kwerps)</span>.
                    </p>

                    <p>
                        Sportpsychologie speelt een essentiële rol bij het optimaliseren van mentale en emotionele veerkracht,
                        niet alleen in de sport, maar ook in het dagelijks leven. Binnen dit vakgebied komen thema's zoals
                        optimale prestaties, <em className="text-primary-600">mentale coaching</em>, <em className="text-primary-600">faalangst</em>, <em className="text-primary-600">prestatiedruk</em> en het opbouwen
                        van <em className="text-primary-600">zelfvertrouwen</em> vaak naar voren. Sporters, ongeacht hun niveau, worden immers regelmatig
                        geconfronteerd met mentale uitdagingen die hun prestaties en welzijn beïnvloeden.
                    </p>

                    {/* Card with primary color accents */}
                    <div className="bg-[#E7EFED] p-5 rounded-lg shadow-md border border-primary-100">
                        <h2 className="text-xl font-semibold mb-3 text-primary-800">Veelvoorkomende uitdagingen</h2>
                        <p>
                            Een van de meest voorkomende obstakels waar ik als sportpsycholoog mee help, is het omgaan met <em className="text-primary-600">faalangst</em> en <em className="text-primary-600">prestatiedruk</em>.
                            Deze gevoelens kunnen verlammend werken en het vermogen om optimaal te presteren
                            aanzienlijk aantasten. Door middel van mentale begeleiding leer ik sporters technieken om deze spanning
                            te beheersen, zodat ze kunnen focussen op hun sterke punten en met vertrouwen aan een wedstrijd of
                            training kunnen beginnen.
                        </p>
                    </div>

                    <p>
                        Daarnaast is <em className="text-[#264038]">concentratie</em> en <em className="text-primary-600">focus</em> van groot belang in de sportwereld. Als sportpsycholoog
                        help ik atleten specifieke mentale strategieën te ontwikkelen om afleidingen te vermijden en hun aandacht
                        volledig op hun doelen te richten. Dit kan variëren van visualisatietechnieken tot mindfulness-oefeningen
                        die zowel binnen als buiten de sportarena toepasbaar zijn.
                    </p>

                    {/* Blockquote with secondary color */}
                    <blockquote className="border-l-4 bg-[#7DF7B555] p-4 rounded-md border-l-4 border-[#7DF7B5] pl-4 italic">
                        Een ander belangrijk aspect is leren <em className="text-primary-600">omgaan met blessures</em> en de mentale impact daarvan. Blessures kunnen
                        een flinke klap zijn voor de motivatie en het zelfvertrouwen van de sporter.
                    </blockquote>

                    <p>
                        Het verlies van een bepaalde mate van fysieke zelfstandigheid, gecombineerd met beperkte trainingsmogelijkheden,
                        kan leiden tot gevoelens van frustratie, verdriet en zelfs depressie. Door coaching en <em className="text-primary-600">sporttherapie</em> ondersteun
                        ik sporters om deze moeilijke periodes te overwinnen en hun herstelproces te versnellen.
                    </p>

                    {/* Grid with cards using secondary and primary colors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                        <div className="bg-[#E7EFED] p-4 rounded-md border border-secondary-200">
                            <h3 className="font-semibold text-lg text-secondary-800 mb-2">Tegenslagen overwinnen</h3>
                            <p>
                                Ook de vaardigheid om <em className="text-[#264038]">tegenslagen om te keren</em> is essentieel. Iedere sporter krijgt te maken met
                                teleurstellingen, of dat nu een verloren wedstrijd, een gemiste kans of een langdurige blessure is.
                            </p>
                        </div>
                        <div className="bg-[#E7EFED] p-4 rounded-md border border-primary-200">
                            <h3 className="font-semibold text-lg text-[#264038] mb-2">Leven in balans</h3>
                            <p>
                                Bovendien heerst er bij veel atleten de uitdaging van een goede balans vinden tussen <em className="text-primary-600">werk</em>, <em className="text-primary-600">school</em> en
                                <em className="text-primary-600"> sport</em>, gecombineerd met persoonlijke en sociale verantwoordelijkheden.
                            </p>
                        </div>
                    </div>

                    <p>
                        Een goede sportpsycholoog helpt atleten om deze ervaringen niet als mislukkingen te zien, maar als
                        leermomenten. Dit bevordert veerkracht en een positieve mindset, waardoor ze sterker terugkomen.
                    </p>

                    <p>
                        Deze <em className="text-primary-600">balans</em> is cruciaal, niet alleen om resultaten in de sport te verbeteren, maar ook om plezier te behouden
                        en burn-out/mentale uitputting te voorkomen. Begeleiding bij mij als sportpsycholoog biedt hier handvatten om
                        effectief te plannen, prioriteiten te stellen en harmonie te vinden in de verschillende aspecten van het leven.
                    </p>

                    <p>
                        Naast externe uitdagingen is het <em className="text-primary-600">omgaan met emoties</em> een belangrijk aandachtspunt. Wedstrijden en
                        trainingen brengen vaak intense emoties met zich mee, zoals woede, teleurstelling, zenuwen of euforie.
                        Het leren herkennen, accepteren en juist kanaliseren van deze emoties helpt de sporter niet alleen beter
                        te presteren, maar ook om een gezondere mentale staat te ontwikkelen.
                    </p>

                    {/* Conclusion with accent colors */}
                    <div className="bg-[#E7EFED] p-5 rounded-lg mt-8 border border-accent-200">
                        <h2 className="text-2xl font-semibold mb-3 text-accent-800">Conclusie</h2>
                        <p className="text-accent-900">
                            Kortom, sportpsychologie biedt een breed scala aan tools en technieken om sporters te helpen mentaal sterker
                            en veerkrachtiger te worden. Deze ondersteuning gaat verder dan alleen prestaties; het verbetert het algehele
                            welzijn en helpt bij het bouwen aan een duurzame sportcarrière en een evenwichtig leven. Dankzij het effectief
                            managen van uitdagingen zoals faalangst, prestatiedruk, blessures en emotionele barrières, kunnen sporters
                            groeien, niet alleen als atleet, maar ook als individu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}