import {HTMLAttributes} from "react";

export type SectionProps = HTMLAttributes<HTMLDivElement> & {}

export const Section = (props: SectionProps) => {
    return (
        <section {...props} className={`w-full py-12 md:py-24 lg:py-32 flex justify-center items-center ${props.className}`}>
            {props.children}
        </section>
    );
}