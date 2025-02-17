import { createFileRoute, Outlet } from "@tanstack/react-router";
import * as React from 'react'

export const Route = createFileRoute("/dynamic")({
  component: Component,
})

function Component() {

  return(
    <div>
      <Outlet/>
    </div>
  )
}