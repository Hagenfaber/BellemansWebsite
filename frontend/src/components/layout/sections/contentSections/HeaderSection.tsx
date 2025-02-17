
import * as React from "react";
import {Section} from "@/components/layout/sections/Section";
import {MappedHeaderSection} from "@/endpoints/bellemansSchemas";
import {LinkType,Link} from "@/components/Link";

type Props = {
    section?: MappedHeaderSection;
}

export const HeaderSection = ({section}: Props) => {
    return (
        (section && <Section>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            {section.title}
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            {section.description}
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-4 flex-row">
                        {section.primaryCallToAction && (
                            <Link
                                variant={LinkType.Primary}
                                href={section.primaryCallToAction?.url ?? ""}
                            >
                                {section.primaryCallToAction?.text}
                            </Link>
                        )}

                        {section.secondaryCallToAction && (<Link
                            variant={LinkType.Secondary}
                            href={section.secondaryCallToAction?.url ?? ""}
                        >
                            {section.secondaryCallToAction?.text}
                        </Link>)}
                    </div>
                </div>
            </div>
        </Section>)
    );
}