import { Link } from "@tanstack/react-router";
import { MountainIcon } from "@/components/Icons/Mountain";
import * as React from "react";
import { NavItem } from "@/components/layout/NavItem";
import { usePagesGetAll } from "@/endpoints/bellemansComponents";
import { LoadingIndicator } from "@/components/ui/loadingIndicator";

export const Navigation = () => {
  const {data: pages, isFetching} = usePagesGetAll({});

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" to="/">
        <MountainIcon className="h-6 w-6"/>
        <span className="sr-only">Build your Edge</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <NavItem url={"/#"}>Diensten</NavItem>
        {isFetching && <LoadingIndicator/>}
        {pages && pages.pages?.map((page) => (
          <NavItem url={`/${page.name}`} key={page.id} className={"capitalize"}>{page.name}</NavItem>
        ))}
      </nav>
    </header>
  )
}