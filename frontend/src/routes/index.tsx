import * as React from 'react'
import {Link, createFileRoute } from '@tanstack/react-router'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {MountainIcon} from "@/components/Icons/Mountain";


export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
      <>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="space-y-2">
                          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                              Build your Edge
                          </h1>
                          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                              Ontgrendel je volledige potentieel met professionele sportpsychologie
                          </p>
                      </div>
                      <div className="space-x-4">
                          <Link
                              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                              href="#"
                          >
                              Maak een afspraak
                          </Link>
                          <Link
                              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                              href="#"
                          >
                              Leer meer
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Onze Diensten</h2>
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
                      <div className="flex flex-col items-start space-y-4">
                          <h3 className="text-2xl font-bold">Voor Individuele Atleten</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                              Persoonlijke coaching en begeleiding om je mentale weerbaarheid te versterken en je
                              prestaties te
                              optimaliseren.
                          </p>
                          <Link
                              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                              href="#"
                          >
                              Meer info
                          </Link>
                      </div>
                      <div className="flex flex-col items-start space-y-4">
                          <h3 className="text-2xl font-bold">Voor Teams en Organisaties</h3>
                          <p className="text-gray-500 dark:text-gray-400">
                              Workshops, teambuilding en strategieën om de groepsdynamiek en prestaties van uw team
                              of organisatie te
                              verbeteren.
                          </p>
                          <Link
                              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                              href="#"
                          >
                              Meer info
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Over Mij</h2>
                  <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 mt-8">
                      <div className="flex flex-col justify-center space-y-4">
                          <p className="text-gray-500 dark:text-gray-400">
                              Als ervaren sportpsycholoog help ik atleten en teams hun mentale weerbaarheid te
                              versterken en hun
                              prestaties te optimaliseren. Met een achtergrond in [uw specifieke
                              ervaring/opleiding], bied ik
                              gepersonaliseerde strategieën om uw doelen te bereiken.
                          </p>
                          <Link
                              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                              href="#"
                          >
                              Lees meer over mij
                          </Link>
                      </div>
                      <img
                          alt="Profielfoto"
                          className="aspect-[4/5] overflow-hidden rounded-lg object-cover"
                          height="500"
                          src="/placeholder.svg"
                          width="400"
                      />
                  </div>
              </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
              <div className="container px-4 md:px-6">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h2>
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-8">
                      <div className="flex flex-col space-y-4">
                          <p className="text-gray-500 dark:text-gray-400">
                              Klaar om uw mentale prestaties naar een hoger niveau te tillen? Neem contact met me op
                              voor een
                              vrijblijvend gesprek.
                          </p>
                          <div className="flex flex-col space-y-2">
                              <p className="text-gray-500 dark:text-gray-400">Email: info@buildyouredge.com</p>
                              <p className="text-gray-500 dark:text-gray-400">Telefoon: +32 123 45 67 89</p>
                          </div>
                      </div>
                      <div className="flex flex-col space-y-4">
                          <form className="space-y-4">
                              <Input placeholder="Naam"/>
                              <Input placeholder="Email" type="email"/>
                              <Input placeholder="Onderwerp"/>
                              <textarea
                                  className="min-h-[100px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:ring-gray-300"
                                  placeholder="Bericht"
                              />
                              <Button type="submit">Verstuur</Button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </>


  )
}

