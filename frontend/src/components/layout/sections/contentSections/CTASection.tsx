import {Link} from "@tanstack/react-router";
import * as React from "react";
import {Section} from "@/components/layout/sections/Section";

export const CTASection = () => {
    return (
        <Section className="bg-gray-100 dark:bg-gray-800">
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
        </Section>
    );
}