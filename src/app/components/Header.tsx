"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import Drawer from "./Drawer";
import { sections } from "../sections";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="hidden md:flex space-x-4">
            {Object.values(sections).map((section) => (
              <Link
                key={section.title}
                className="text-black hover:text-orange-600 font-francker-light"
                href={section.link}
              >
                {section.title}
              </Link>
            ))}
          </div>
          <button className="md:hidden" onClick={toggleDrawer}>
            <Menu className="w-6 h-6 text-black" />
          </button>
        </div>
      </nav>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </header>
  );
}
