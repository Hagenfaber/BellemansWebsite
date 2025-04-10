import * as React from "react";
import {useState} from "react";
import {Menu, X} from "lucide-react";
// @ts-ignore
import logo from "@/images/buildyouredge_logo_2_sm.png";
import {NavItem} from "@/components/layout/NavItem";
import {Sheet, SheetContent, SheetTrigger} from "../ui/sheet";
import {Logo} from "@/components/Icons/Logo";

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
      <header className="bg-[#264038] text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
              <div className="text-2xl font-bold text-[#7DF7B5]">
                  <Logo />
              </div>
              <nav className="hidden md:flex space-x-4">
                  <NavItem url={"/"}>Aanbod individuele atleten</NavItem>
                  <NavItem url={"/teams"}>Aanbod teams en federaties</NavItem>
                  <NavItem url={"/contact"}>Neem contact op</NavItem>
                  <NavItem url={"/about"}>Over</NavItem>
              </nav>

              <Sheet open={navOpen} onOpenChange={setNavOpen}>
                  <SheetTrigger asChild>
                      <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
                          {navOpen ? <X size={24}/> : <Menu size={24}/>}
                      </button>
                  </SheetTrigger>
                  <SheetContent>
                      <div className={"flex flex-col"}>
                          <NavItem onClick={() => setNavOpen(false)} url={"/"}>Aanbod individuele atleten</NavItem>
                          <NavItem onClick={() => setNavOpen(false)} url={"/teams"}>Aanbod teams en federaties</NavItem>
                          <NavItem onClick={() => setNavOpen(false)} url={"/contact"}>Neem contact op</NavItem>
                          <NavItem onClick={() => setNavOpen(false)} url={"/about"}>Over</NavItem>
                      </div>
                  </SheetContent>
              </Sheet>
          </div>
      </header>
  )
}