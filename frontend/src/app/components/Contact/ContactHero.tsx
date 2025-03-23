import { Mail, Phone, Clock } from "lucide-react"

export default function ContactHero() {
    return (
        <section className="py-16 px-4 bg-[#264038] text-white">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#7DF7B5] mb-6">Neem contact op</h1>
                <p className="text-xl mb-12 max-w-2xl mx-auto">
                    Heb je vragen of wil je een afspraak maken? Vul het onderstaande formulier in en ik neem zo snel mogelijk
                    contact met je op.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="bg-[#7DF7B5] p-4 rounded-full mb-4">
                            <Mail className="h-6 w-6 text-[#264038]" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <a href="mailto:dieter.bellemans@buildyouredge.be" className="text-[#BDC5C3]">dieter.bellemans@buildyouredge.be</a>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-[#7DF7B5] p-4 rounded-full mb-4">
                            <Phone className="h-6 w-6 text-[#264038]" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Telefoon</h3>
                        <a href="tel:+32494821817" className="text-[#BDC5C3]">+32 494 82 18 17</a>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="bg-[#7DF7B5] p-4 rounded-full mb-4">
                            <Clock className="h-6 w-6 text-[#264038]" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Bereikbaar</h3>
                        <p className="text-[#BDC5C3]">Ma-Vr: 9:00 - 17:00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
