import * as React from "react";
import {Link as RouterLink} from "@tanstack/react-router";


export enum LinkType {
    Primary = "inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
    Secondary = "inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
}

type LinkProps = {
    variant: LinkType,
    href: string
    children?: React.ReactNode
}

export const Link = ({variant, href, children}: LinkProps) => {
    return (
        <RouterLink
            className={variant}
            href={href}
        >
            {children}
        </RouterLink>
    )
}