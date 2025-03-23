import { createFileRoute } from '@tanstack/react-router'
import Services from "@/app/components/Services";
import Expectations from "@/app/components/Expectations";
import Approach from "@/app/components/Approach";
import CallToAction from "@/app/components/CallToAction";
import Hero from "@/components/layout/sections/Hero";

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <Hero
            title={"Word mentaal onverslaanbaar"}
            subtitle={"Je voorsprong start hier"}
            description={"Met bewezen strategieën uit de sport- en prestatiepsychologie"}
            callToAction={{url: "/individuals", text: "Neem contact op"}}
        />
        <Services />
        <Expectations />
        <Approach />
        <CallToAction />
    </div>
  )
}
