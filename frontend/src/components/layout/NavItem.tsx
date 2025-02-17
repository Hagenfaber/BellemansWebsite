import {FC, ReactNode} from "react";
import {Link} from "@tanstack/react-router";
import * as React from "react";
import { cn } from "@/lib/utils";

interface Props {
    children?: ReactNode | string;
    url?: string;
    className?: string;
}

export const NavItem = ({ children, url, className }: Props) => {
    return (
        <Link className={cn("text-sm font-medium hover:underline underline-offset-4", className)} href={url}>
            {children}
        </Link>
    )
}