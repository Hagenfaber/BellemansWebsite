import {FC, ReactNode} from "react";
import {Link} from "@tanstack/react-router";
import * as React from "react";
import { cn } from "@/lib/utils";

interface Props {
    children?: ReactNode | string;
    url?: string;
    className?: string;
    onClick?: () => void;
}

export const NavItem = ({ children, url, className, onClick }: Props) => {
    return (
        <Link onClick={onClick} className={cn("text-sm font-medium p-4 hover:text-[#7DF7B5]", className)}
              to={url}>
            {children}
        </Link>
    )
}