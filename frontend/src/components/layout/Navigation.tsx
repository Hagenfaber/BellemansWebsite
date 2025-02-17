import { Link } from "@tanstack/react-router";
import { MountainIcon } from "@/components/Icons/Mountain";
import * as React from "react";
import { NavItem } from "@/components/layout/NavItem";
import { usePagesGetAll } from "@/endpoints/bellemansComponents";
import { LoadingIndicator } from "@/components/ui/loadingIndicator";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {CloseIcon} from "@/components/Icons/Close";
import {DynamicIcon} from "lucide-react/dynamic";

export const Navigation = () => {
  const {data: pages, isFetching} = usePagesGetAll({});
  
  const [navOpen, setNavOpen] = useState(false);

  return (
      <header className="px-4 lg:px-6 h-14 flex items-center relative bg-primary text-primary-foreground">
          <Link className="flex items-center justify-center" to="/homeDraft">
              <MountainIcon className="h-6 w-6"/>
              <span className="sr-only">Build your Edge</span>
          </Link>
          <nav className="ml-auto gap-4 sm:gap-6 hidden md:flex">
              {isFetching && <LoadingIndicator/>}
              <NavItem url={`/homeDraft`} key={'homeDraft'} className={"capitalize"}>Home draft</NavItem>
              {pages && pages.pages?.map((page) => (
                  <NavItem url={`/${page.name}`} key={page.id} className={"capitalize"}>{page.title}</NavItem>
              ))}
          </nav>

          <nav className="ml-auto gap-4 sm:gap-6 flex md:hidden flex-col">
              <Button className="flex items-center justify-center border-none bg-transparent shadow-none" onClick={() => setNavOpen(!navOpen)}>
                  {!navOpen && <DynamicIcon name={"menu"} className="h-10 w-10 text-primary-foreground"/>}
                  {navOpen && <DynamicIcon name={"x"} className="h-10 w-10 text-primary-foreground"/>}
                  <span className="sr-only">Build your Edge</span>
              </Button>
          </nav>

          <div className={`absolute right-0 w-full top-14 flex flex-col md:hidden bg-secondary text-primary shadow-xl`} style={{display: navOpen ? 'flex' : 'none'}}>
              {isFetching && <LoadingIndicator/>}
              <NavItem url={`/homeDraft`} key={'homeDraft'} className={"capitalize"}>Home draft</NavItem>
              {pages && pages.pages?.map((page) => (
                  <NavItem onClick={() => {
                    setNavOpen(false);
                  }} url={`/${page.name}`} key={page.id} className={"capitalize"}>{page.title}</NavItem>
              ))}
          </div>
      </header>
  )
}