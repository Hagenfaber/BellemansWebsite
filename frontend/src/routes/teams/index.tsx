import CallToAction from "@/app/components/CallToAction";
import TeamApproach from "@/app/components/TeamApproach";
import TeamBenefits from "@/app/components/TeamBenefits";
import TeamCollaboration from "@/app/components/TeamCollaboration";
import TeamServices from "@/app/components/TeamServices";
import {createFileRoute} from "@tanstack/react-router";
import Hero from "@/components/layout/sections/Hero";

export const Route = createFileRoute('/teams/')({
    component: TeamsPage,
})

export default function TeamsPage() {
    return (
        <div className="">
            <Hero
                title={"Maximaliseer teamprestaties met wetenschappelijk onderbouwde sportpsychologie"}
                subtitle={"Mentale kracht is de nieuwe concurrentievoorsprong"}
                description={" Succesvolle teams begrijpen: techniek, tactiek en fysieke training brengen je ver, maar al te vaak maakt mentale kracht het verschil tussen winnen en verliezen."}
                callToAction={{url: "/teams", text: "Ontdek onze aanpak"}}
            />
            <TeamServices />
            <TeamApproach />
            <TeamCollaboration />
            <TeamBenefits />
            <CallToAction />
        </div>
    )
}

