import { ArrowRightIcon } from "@radix-ui/react-icons";
import {Link} from "@tanstack/react-router";
import AiSwimmer from "@/images/AiSwimmer-min.png";

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-[#264038] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Ben je geïnteresseerd of heb je vragen over een van de volgende topics?</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto flex">
          <div className={"hidden md:flex flex-1 justify-center items-center"}>
            <img src={AiSwimmer} alt={"AiSwimmer"}
                 className={"max-h-full shadow-2xl rounded shadow-[#7DF7B5]"}/>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 w-full pl-6">
            <li className="text-left list-disc">Mentale coaching</li>
            <li className="text-left list-disc">Topsport</li>
            <li className="text-left list-disc">Faalangst</li>
            <li className="text-left list-disc">Prestatiedruk</li>
            <li className="text-left list-disc">Zelfvertrouwen</li>
            <li className="text-left list-disc">Omgaan met blessures</li>
            <li className="text-left list-disc">Tegenslagen omkeren</li>
            <li className="text-left list-disc">Concentratie</li>
            <li className="text-left list-disc">Focus</li>
            <li className="text-left list-disc">Werkbalans</li>
            <li className="text-left list-disc">Schoolbalans</li>
            <li className="text-left list-disc">Sportbalans</li>
            <li className="text-left list-disc">Omgaan met emoties</li>
            <li className="text-left list-disc">Sport therapie</li>
          </ul>
        </p>
        <div className={"flex justify-center items-center gap-2 flex-col md:flex-row"}>
          <Link to={"/wiki"} className="bg-[#7DF7B5] text-[#264038] font-bold py-3 px-8 rounded-full hover:bg-[#fcf2cf] transition duration-300 flex items-center justify-center">
            Lees meer
            <ArrowRightIcon className="ml-2" />
          </Link>
          <Link to={"/contact"} className="bg-[#7DF7B5] text-[#264038] font-bold py-3 px-8 rounded-full hover:bg-[#fcf2cf] transition duration-300 flex items-center justify-center">
            Neem contact op
            <ArrowRightIcon className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

