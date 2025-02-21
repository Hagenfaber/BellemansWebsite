import * as React from "react";
import { usePagesGetAll } from "@/endpoints/bellemansComponents";
import {useState} from "react";
import {Menu, X} from "lucide-react";
// @ts-ignore
import logo from "@/images/buildyouredge_logo_2_sm.png";
import {NavItem} from "@/components/layout/NavItem";
import {Sheet, SheetContent, SheetTrigger} from "../ui/sheet";

export const Navigation = () => {
  const {data: pages, isFetching} = usePagesGetAll({});
  
  const [navOpen, setNavOpen] = useState(false);

  return (
      <header className="bg-[#264038] text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
              <div className="text-2xl font-bold text-[#7DF7B5]">
                  <img src={logo} alt={"build-your-edge"} className={"w-20"} />
              </div>
              <nav className="hidden md:flex space-x-4">
                  <NavItem url={"/individuals"}>Individuals</NavItem>
                  <NavItem url={"/teams"}>Teams</NavItem>
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
                          <NavItem onClick={() => setNavOpen(false)} url={"/individuals"}>Individuals</NavItem>
                          <NavItem onClick={() => setNavOpen(false)} url={"/teams"}>Teams</NavItem>
                          <NavItem onClick={() => setNavOpen(false)} url={"/about"}>Over</NavItem>
                      </div>
                  </SheetContent>
              </Sheet>
          </div>
      </header>
  )
}