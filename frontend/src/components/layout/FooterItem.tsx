import {Link} from "@tanstack/react-router";
import * as React from "react";
import {ReactNode} from "react";

interface Props {
    children?: ReactNode | string;
    url?: string;
}

export const FooterItem = ({children, url}: Props) => {
    return (
        <Link className="text-xs hover:underline underline-offset-4" href={url}>
            {children}
        </Link>
    )
}