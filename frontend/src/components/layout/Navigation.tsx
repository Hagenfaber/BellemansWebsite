import {Link} from "@tanstack/react-router";
import {MountainIcon} from "@/components/Icons/Mountain";
import * as React from "react";
import {NavItem} from "@/components/layout/NavItem";


export const Navigation = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                <MountainIcon className="h-6 w-6"/>
                <span className="sr-only">Build your Edge</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <NavItem url={"#"}>Diensten</NavItem>
                <NavItem url={"#"}>Over Mij</NavItem>
                <NavItem url={"#"}>Blog</NavItem>
                <NavItem url={"#"}>Contact</NavItem>
            </nav>
        </header>
    )
}