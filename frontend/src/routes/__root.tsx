import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Navigation/>
          <main className="flex-1">
            <Outlet/>
          </main>
          <Footer/>
        </div>
        {/*<ReactQueryDevtools initialIsOpen={false} position={"bottom"}/>*/}
      </QueryClientProvider>
    </>
  )
}
