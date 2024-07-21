"use client";

import { BiDotsVerticalRounded, BiChevronUp } from "react-icons/bi";
import {useState} from "react";
import clsx from "clsx";


export default function Navigation() {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => setOpenMenu(!openMenu);

    return (
        <nav className="bg-black font-mono text-gray-950">
            <section className=" h-full w-10/12 mx-auto flex gap-10 items-center">

                <a href="" className="tw-nav-logo">
                    Dog49
                </a>

                <div className="hidden md:flex py-5 text-white w-full ">
                    <ul className="flex gap-5">

                    </ul>
                    <ul className="hidden lg:flex gap-5 ms-auto">
                        <li><a href="" className="tw-login-button">Login</a></li>
                        <li className="hidden xl:block"><a href="" className="tw-login-button">Register</a></li>
                    </ul>
                </div>

                <button className="px-5 py-3 bg-black text-white ms-auto md:hidden hover:bg-black/50 duration-500"
                        onClick={toggleMenu}>
                    <BiDotsVerticalRounded className="text-3xl"/>
                </button>
            </section>


            <div
                className={clsx("fixed left-0 top-auto h-auto w-full bg-black md:hidden transition-transform", openMenu ? "left-0" : "left-full")}>
                <div className="w-10/12 h-full mx-auto py-3 border-2 border-red-400">
                    <ul className="flex flex-col gap-5 text-white">

                        <li><a href="" className="tw-login-button">Login</a></li>
                        <li><a href="" className="tw-login-button">Register</a></li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}