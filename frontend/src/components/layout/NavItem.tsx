import {FC, ReactNode} from "react";
import {Link} from "@tanstack/react-router";
import * as React from "react";

interface Props {
    children?: ReactNode | string;
    url?: string;
}

export const NavItem = ({ children, url }: Props) => {
    return (
        <Link className="text-sm font-medium hover:underline underline-offset-4" href={url}>
            {children}
        </Link>
    )
}