import { createFileRoute } from '@tanstack/react-router'
import Hero from "@/components/layout/sections/Hero";
import team2 from "@/videos/team2.mp4";
import team3 from "@/videos/team3.mp4";
import team4 from "@/videos/team4.mp4";
import team5 from "@/videos/team5.mp4";
import TeamBenefits from "@/app/components/TeamBenefits";
import TeamServices from "@/app/components/TeamServices";
import TeamApproach from "@/app/components/TeamApproach";
import TeamCollaboration from "@/app/components/TeamCollaboration";
import CallToAction from "@/app/components/TeamCallToAction";
import ContactForm from "@/app/components/Contact/ContactForm";
import ContactHero from "@/app/components/Contact/ContactHero";

export const Route = createFileRoute('/contact/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="">
          <ContactHero />
          <ContactForm />
      </div>
  )
}
