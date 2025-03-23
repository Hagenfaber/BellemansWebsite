import * as React from "react";
import {Logo} from "@/components/Icons/Logo";
import {NavItem} from "@/components/layout/NavItem";


export const Footer = () => {
    return (
        <footer className="bg-[#264038] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex-1 mb-4 md:mb-0 flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-[#7DF7B5] text-center">
                            <Logo />
                        </h3>
                        <p className="text-sm text-[#BDC5C3]">Mentale training voor topprestaties</p>
                    </div>
                    <nav className="flex-2 flex justify-center space-x-4 mb-4 md:mb-0">
                        <NavItem url={"/"}>Aanbod individuele atleten</NavItem>
                        <NavItem url={"/teams"}>Aanbod teams en federaties</NavItem>
                        <NavItem url={"/about"}>Over</NavItem>
                    </nav>
                    <div className="flex-1 text-sm text-[#BDC5C3]">© 2025 SportPsycholoog. Alle rechten voorbehouden.</div>
                </div>
            </div>
        </footer>
    );
}