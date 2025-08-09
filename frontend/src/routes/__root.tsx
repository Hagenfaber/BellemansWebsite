import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import emailjs from "@emailjs/browser";

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  
  React.useEffect(() => {
    const initEmailJs = () => {
      emailjs.init({
        publicKey: "oN_chg0lIthJoXU5v",
      });
    }

    initEmailJs();
  }, [])
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex flex-col min-h-screen">
          <Navigation/>
          <main className="flex-1 ">
            <Outlet/>
          </main>
          <Footer/>
        </div>
      </QueryClientProvider>
    </>
  )
}
