import { createFileRoute } from '@tanstack/react-router'
import Services from "@/app/components/Services";
import Expectations from "@/app/components/Expectations";
import Approach from "@/app/components/Approach";
import CallToAction from "@/app/components/CallToAction";
import Hero from "@/components/layout/sections/Hero";

import basket from "@/videos/Basket.mp4"
import ballet from "@/videos/Ballet.mp4"
import Boxer from "@/videos/Boxer.mp4"
import Gym from "@/videos/Gym.mp4"
import Cyclist from "@/videos/Cyclist.mp4"

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <title>Build your edge - aanbod Individuele atleten</title>
        <meta name="keywords" content="Sportpsychologie, Prestatiepsychologie, Individuele atleten, topsport, psychologie, Dieter, Bellemans, Dieter Bellemans, Sportpsycholoog, Prestatiepsycholoog, Mentaal, Faalangst" />

        <Hero
            title={"Word mentaal onverslaanbaar"}
            subtitle={"Je voorsprong start hier"}
            description={"Professionele begeleiding op basis van sportpsychologie en prestatiepsychologie"}
            callToAction={{url: "/contact", text: "Neem contact op"}}
            videos={[basket, ballet, Boxer, Gym, Cyclist]}
        />
        <Services />
        <Expectations />
        <Approach />
        <CallToAction />
    </div>
  )
}
