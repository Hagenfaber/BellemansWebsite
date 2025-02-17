import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/homeDraft")({
    component: Component,
})

function Component() {

    return(
        <div>
            homeDraft
        </div>
    )
}