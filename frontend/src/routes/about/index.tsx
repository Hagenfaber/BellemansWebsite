import { createFileRoute } from '@tanstack/react-router'
import AboutHero from "@/app/components/About/Hero";
import AboutBackground from "@/app/components/About/Background";
import AboutApproach from "@/app/components/About/Approach";
import AboutMission from "@/app/components/About/Mission";
import AboutCallToAction from "@/app/components/About/CallToAction";

export const Route = createFileRoute('/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="">
          <AboutHero />
          <AboutBackground />
          <AboutApproach />
          <AboutMission />
          <AboutCallToAction />
      </div>
  )
}
