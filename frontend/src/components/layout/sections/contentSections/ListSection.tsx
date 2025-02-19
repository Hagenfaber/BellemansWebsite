import {Link} from "@tanstack/react-router";
import * as React from "react";
import {Section} from "@/components/layout/sections/Section";
// @ts-ignore
import Brick from "@/components/icons/brick.png";

export const ListSection = () => {
    return (
        <div
             className={`w-full flex justify-center items-center`}>
                <div className="" style={{
                    width: "100%",
                    height: "400px",
                    backgroundImage: "url(" + Brick + ")",
                    backgroundPosition: "center",
                    backgroundSize: "8rem",
                }}>
        
                </div>
        </div>
    );
}