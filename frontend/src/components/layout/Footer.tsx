import {Link} from "@tanstack/react-router";
import * as React from "react";
import {FooterItem} from "@/components/layout/FooterItem";


export const Footer = () => {
    return (
        <footer className="bg-[#264038] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold text-[#7DF7B5]">SportPsycholoog</h3>
                        <p className="text-sm text-[#BDC5C3]">Mentale training voor topprestaties</p>
                    </div>
                    <nav className="flex space-x-4 mb-4 md:mb-0">
                        <a href="#" className="hover:text-[#7DF7B5]">
                            Home
                        </a>
                        <a href="#" className="hover:text-[#7DF7B5]">
                            Diensten
                        </a>
                        <a href="#" className="hover:text-[#7DF7B5]">
                            Over
                        </a>
                        <a href="#" className="hover:text-[#7DF7B5]">
                            Contact
                        </a>
                    </nav>
                    <div className="text-sm text-[#BDC5C3]">© 2025 SportPsycholoog. Alle rechten voorbehouden.</div>
                </div>
            </div>
        </footer>
    );
}