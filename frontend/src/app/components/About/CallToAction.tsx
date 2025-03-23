import { ArrowRight } from "lucide-react"

export default function AboutCallToAction() {
    return (
        <section className="py-20 px-4 bg-[#264038] text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Laten we werken aan jouw mentale kracht</h2>
                <p className="text-xl mb-12 max-w-3xl mx-auto">
                    Wil je ontdekken hoe mentale training jou of jouw team kan helpen?
                </p>
                <button className="bg-[#7DF7B5] text-[#264038] font-bold py-3 px-8 rounded-full hover:bg-[#fcf2cf] transition duration-300 flex items-center justify-center mx-auto">
                    Neem contact op
                    <ArrowRight className="ml-2" />
                </button>
            </div>
        </section>
    )
}

