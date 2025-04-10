import StrongMan from "@/images/about/Run1-edited.jpg";

export default function AboutHero() {
    return (
        <section className="py-20 px-4 bg-[#264038] text-white">

            <div className="container relative mx-auto flex flex-col md:flex-row gap-10 h-full">
                <div className={"md:flex flex-1 justify-center items-center"}>
                    <img src={StrongMan} alt={"strong-man"}
                         className={"max-h-full shadow-2xl rounded shadow-[#7DF7B5]"}/>
                </div>
                <div className={"absolute md:relative bg-[#264038] md:bg-transparent bottom-0 w-full md:flex-3 rounded-b flex justify-center items-center"}>
                    <div className={"absolute md:hidden w-full h-20 -top-20 bg-linear-[25deg,red_5%,yellow_60%,lime_90%,teal]"}></div>
                    <div className={"p-6"}>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#7DF7B5] mb-8">Dieter Bellemans, sport- en prestatiepsycholoog</h1>
                        <div className="mx-0 md:mx-auto text-left">
                            <p className="text-xl mb-6">
                                In de topsport telt elk detail.
                                Je traint je lichaam tot in de perfectie,
                                verfijnt je techniek en optimaliseert je voeding.
                                Maar hoe vaak train je de belangrijkste wapens dat je hebt:
                                je mentale kracht en de manier waarop je denkt en handelt?
                            </p>
                            <p className="text-xl">
                                Als sportpsycholoog ben ik gepassioneerd om atleten,
                                teams en coaches te helpen om mentaal sterker te worden en te
                                presteren onder druk. Hierbij hanteer ik uitsluitend wetenschappelijk
                                onderbouwde methodes die hun waarde hebben bewezen in zowel de topsport,
                                als het bedrijfsleven.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}