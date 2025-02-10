import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {HeaderSection} from "@/components/layout/sections/contentSections/HeaderSection";
import {CTASection} from "@/components/layout/sections/contentSections/CTASection";
import {AboutMeSection} from "@/components/layout/sections/contentSections/AboutMeSection";
import {ContactSection} from "@/components/layout/sections/contentSections/ContactSection";
import {useEffect} from "react";
import {usePagesGetById} from "@/endpoints/bellemansComponents";
import { useErrorToast } from "@/hooks/useErrorToast";


export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {
    const {data, isFetching, error} = usePagesGetById({
        pathParams: {
            id: "home"
        }
    });

    if (error) {
        useErrorToast(error);
    }

    if (isFetching) {
        return <>Laden...........</>
    }

    let allSections = [
        ...data?.page.headerSections,
        ...data?.page.imageSections
    ]

    const sortedSections = allSections.sort((a, b) => a.order - b.order);

    return (
        <div className="flex flex-col justify-center items-center">
            {sortedSections.map(section => <HeaderSection section={section} />)}
            <CTASection/>
            <AboutMeSection/>
            <ContactSection/>
        </div>
    )
}

