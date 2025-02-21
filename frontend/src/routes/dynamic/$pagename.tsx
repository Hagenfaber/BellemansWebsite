import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/dynamic/$pagename")({
  component: Component,
})

function Component() {
  const {pagename} = Route.useParams()

  return(
    <div>
      {pagename}
    </div>
  )
}