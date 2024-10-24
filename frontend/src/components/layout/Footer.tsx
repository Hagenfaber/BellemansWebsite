import {Link} from "@tanstack/react-router";
import * as React from "react";
import {FooterItem} from "@/components/layout/FooterItem";


export const Footer = () => {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Build your Edge. Alle rechten
                voorbehouden.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <FooterItem url={"#"}>Privacybeleid</FooterItem>
                <FooterItem url={"#"}>Algemene voorwaarden</FooterItem>
            </nav>
        </footer>
    );
}