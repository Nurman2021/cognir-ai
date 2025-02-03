"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu as BurgerIcon, X as CloseIcon } from "lucide-react"; // Import ikon dari Lucide

export function NavbarPage() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }) {
    const [active, setActive] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol menu burger

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 text-sm", className)}>
            <Menu setActive={setActive}>
                <div className="flex justify-between w-full">
                    <Link className="nav-brand" href={"/"} />
                    <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon size={24} /> : <BurgerIcon size={24} />}
                    </div>
                </div>
                <div className={`w-full block md:flex justify-between items-center ${isMenuOpen ? "block" : "hidden"}`}>
                    {/* <div className="md:flex "> */}
                    <MenuItem setActive={setActive} active={active} item="Platform">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/web-dev">Web Development</HoveredLink>
                            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                            <HoveredLink href="/branding">Branding</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Solution">
                        <div className="text-sm grid grid-cols-2 gap-10 p-4">
                            <ProductItem
                                title="Algochurn"
                                href="https://algochurn.com"
                                src="/img/photo_1.jpg"
                                description="Prepare for tech interviews like never before."
                            />
                            <ProductItem
                                title="Tailwind Master Kit"
                                href="https://tailwindmasterkit.com"
                                src="/img/photo_2.jpg"
                                description="Production ready Tailwind css components for your next project"
                            />
                            <ProductItem
                                title="Moonbeam"
                                href="https://gomoonbeam.com"
                                src="/img/photo_3.jpg"
                                description="Never write from scratch again. Go from idea to blog in minutes."
                            />
                            <ProductItem
                                title="Rogue"
                                href="https://userogue.com"
                                src="/img/photo_4.jpg"
                                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                            />
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Pricing">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Blog">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/hobby">Hobby</HoveredLink>
                            <HoveredLink href="/individual">Individual</HoveredLink>
                            <HoveredLink href="/team">Team</HoveredLink>
                            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                        </div>
                    </MenuItem>
                    {/* </div> */}

                    <div className="flex gap-4">
                        <button className="bg-blue-700 rounded-full px-4 py-2">Log in</button>
                        <button className="bg-yellow-500 rounded-full px-4 py-2">Book a demo</button>
                    </div>
                </div>
            </Menu>
        </div>
    );
}