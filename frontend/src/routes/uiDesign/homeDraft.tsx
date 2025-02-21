import { createFileRoute } from "@tanstack/react-router";
import {ListSection} from "@/components/layout/sections/contentSections/ListSection";

export const Route = createFileRoute("/uiDesign/homeDraft")({
    component: Component,
})

function Component() {

    return (
        <>

            
            <ListSection />
        </>
    )
}