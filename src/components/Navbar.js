"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaHouseChimney } from "react-icons/fa6"
import { FaBlenderPhone } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";

export default function Navber() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <FaHouseChimney className="h-4 w-4 text-neutral-500 dark:text-white" />
        },
        {
            name: "Our Courses",
            link: "/courses",
            icon: <FaBook className="h-4 w-4 text-neutral-500 dark:text-white" />
        },
        {
            name: "Contact",
            link: "/contact",
            icon: <FaBlenderPhone className="h-4 w-4 text-neutral-500 dark:text-white" />
        }
    ];
    return (
        <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
            <FloatingNav navItems={navItems} />
        </div>
    );
}