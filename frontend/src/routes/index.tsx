import { createFileRoute } from '@tanstack/react-router'
import Services from "@/app/components/Services";
import Expectations from "@/app/components/Expectations";
import Approach from "@/app/components/Approach";
import CallToAction from "@/app/components/CallToAction";
import Hero from "@/components/layout/sections/Hero";

// @ts-ignore
import basket from "@/videos/compressed/Basket.mp4"
// @ts-ignore
import ballet from "@/videos/compressed/Ballet.mp4"
// @ts-ignore
import Boxer from "@/videos/compressed/Boxer.mp4"
// @ts-ignore
import Gym from "@/videos/compressed/Gym.mp4"
// @ts-ignore
import Cyclist from "@/videos/compressed/Cyclist.mp4"

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
