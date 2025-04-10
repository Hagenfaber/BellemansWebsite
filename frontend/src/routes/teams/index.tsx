import CallToAction from "@/app/components/TeamCallToAction";
import TeamApproach from "@/app/components/TeamApproach";
import TeamBenefits from "@/app/components/TeamBenefits";
import TeamCollaboration from "@/app/components/TeamCollaboration";
import TeamServices from "@/app/components/TeamServices";
import {createFileRoute} from "@tanstack/react-router";
import Hero from "@/components/layout/sections/Hero";
import team2 from "@/videos/team2.mp4";
import team3 from "@/videos/team3.mp4";
import team4 from "@/videos/team4.mp4";
import team5 from "@/videos/team5.mp4";

export const Route = createFileRoute('/teams/')({
    component: TeamsPage,
})

export default function TeamsPage() {
    return (
        <div className="">
            <Hero
                title={"Mentale kracht is de nieuwe concurrentievoorsprong"}
                description={"Succesvolle teams begrijpen: techniek, tactiek en fysieke training brengen je ver. Maar al te vaak maakt mentale kracht en teamcohesie het verschil tussen winnen en verliezen. Ontdek hoe gerichte sportpsychologische begeleiding het verschil kan maken."}
                callToAction={{url: "/contact", text: "Neem contact op"}}
                videos={[team2, team3, team4, team5]}
            />
            <TeamBenefits />
            <TeamServices />
            <TeamApproach />
            <TeamCollaboration />
            <CallToAction />
        </div>
    )
}

