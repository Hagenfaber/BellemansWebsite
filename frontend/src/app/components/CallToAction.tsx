import { ArrowRightIcon } from "@radix-ui/react-icons";
import {Link} from "@tanstack/react-router";

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-[#264038] text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Klaar om mentaal sterker te worden en op je best te presteren?</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          Laat me je helpen.
        </p>
        <div className={"flex justify-center items-center"}>
          <Link to={"/contact"} className="bg-[#7DF7B5] text-[#264038] font-bold py-3 px-8 rounded-full hover:bg-[#fcf2cf] transition duration-300 flex items-center justify-center mx-auto">
            Neem contact op
            <ArrowRightIcon className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

