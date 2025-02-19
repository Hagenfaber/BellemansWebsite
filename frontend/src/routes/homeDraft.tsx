import { createFileRoute, Outlet } from "@tanstack/react-router";
import {HeaderSection} from "@/components/layout/sections/contentSections/HeaderSection";
import {CTASection} from "@/components/layout/sections/contentSections/CTASection";
import {ListSection} from "@/components/layout/sections/contentSections/ListSection";

export const Route = createFileRoute("/homeDraft")({
    component: Component,
})

function Component() {

    return (
        <>
            <HeaderSection section={{
                title: "Home Draft",
                description: "This is a draft of the home page. It is not yet complete.",
                primaryCallToAction: {
                    text: "Go to Home",
                    url: "/home",
                },
                secondaryCallToAction: {
                    text: "Go to About",
                    url: "/about",
                }
            }} />
            
            <ListSection />
        </>
    )
}