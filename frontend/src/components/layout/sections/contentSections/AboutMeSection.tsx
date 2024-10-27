import {Link} from "@tanstack/react-router";
import * as React from "react";
import {Section} from "@/components/layout/sections/Section";


export const AboutMeSection = () => {
    return (
        <Section>
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
        </Section>
    );
}