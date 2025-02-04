
import * as React from "react";
import {Section} from "@/components/layout/sections/Section";
import {MappedHeaderSection} from "@/endpoints/bellemansSchemas";
import {LinkType,Link} from "@/components/Link";


export const HeaderSection = (headerSection: MappedHeaderSection) => {
    return (
        <Section>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            {headerSection.title}
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            {headerSection.description}
                        </p>
                    </div>
                    <div className="space-x-4">
                        
                        <Link
                            variant={LinkType.Primary}
                            href={"#"}
                        >
                            Maak een afspraak
                        </Link>
                        <Link
                            variant={LinkType.Secondary}
                            href={"#"}
                        >
                            Leer meer
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}