import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {HeaderSection} from "@/components/layout/sections/contentSections/HeaderSection";
import {CTASection} from "@/components/layout/sections/contentSections/CTASection";
import {AboutMeSection} from "@/components/layout/sections/contentSections/AboutMeSection";
import {ContactSection} from "@/components/layout/sections/contentSections/ContactSection";


export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
      <div className="flex flex-col justify-center items-center">
          <HeaderSection />
          <CTASection />
          <AboutMeSection />
          <ContactSection />
      </div>
  )
}

