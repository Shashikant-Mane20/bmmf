"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaSearch,
    FaBars,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import menuData from "../../app/menuData";
import { motion } from "framer-motion";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState(null);
 
    const handleAccordionToggle = (itemName) => {
        if (activeAccordion === itemName) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(itemName);
        }
    };



    return (
        <header>
            {/* Upper Header */}
            <div className="bg-[#E6F2EF] hidden md:flex items-center justify-between px-4 py-2 text-sm">
                <div className="flex items-center space-x-3 text-[#00634A]">
                    <span>Call Us: +xxxxxxxxxx</span>
                    <span className="border-l h-5 border-[#00634A] px-1">
                        ngo@example.com
                    </span>
                    <div className="flex space-x-2">
                        <FaInstagram className="hover:text-[#588D7F]" />
                        <FaXTwitter className="hover:text-[#588D7F]" />
                        <FaFacebook className="hover:text-[#588D7F]" />
                        <FaLinkedin className="hover:text-[#588D7F]" />
                    </div>
                </div>
                <Link href="/about-us">
                    <div className="text-[#00634A] hover:text-[#588D7F] font-light">
                        About Us
                    </div>
                </Link>
            </div>

            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto flex items-center justify-between px-4 py-3">
                    {/* Hamburger Menu */}
                    <div
                        className="md:hidden flex items-center text-[#00634A] cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FaBars className="text-2xl hover:text-[#588D7F]" />
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center md:justify-start flex-shrink-0">
                        <Link href="/">
                            <img
                                src="/images/01.png"
                                alt="logo"
                                className="w-20 h-auto md:w-28"
                            />
                        </Link>
                    </div>

                    {/* Navbar Links (Desktop Only) */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuData.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-[#00634A] hover:text-[#588D7F] transition duration-300"
                                >
                                    {item.name}
                                </Link>
                                {item.submenu && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0 w-48 bg-white shadow-lg mt-2 border border-gray-200 z-10 group-hover:block hidden"
                                    >
                                        <ul className="space-y-2 p-2">
                                            {item.submenu.map((subitem) => (
                                                <li key={subitem.name}>
                                                    <Link
                                                        href={subitem.href}
                                                        className="text-[#00634A] hover:text-[#588D7F] block px-3 py-2"
                                                    >
                                                        {subitem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                        <FaSearch className="text-[#00634A] hover:text-[#588D7F] cursor-pointer" />
                        <Link
                            href="/donate"
                            className="bg-[#00634A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#588D7F] transition duration-300"
                        >
                            Donate
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{
                        x: isMenuOpen ? "0%" : "-100%",
                        opacity: isMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-start p-6 space-y-4 md:hidden"
                >
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-[#00634A] text-xl font-semibold">
                            Menu
                        </h2>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[#00634A] hover:text-[#588D7F] text-2xl"
                        >
                            &times;
                        </button>
                    </div>
                    {menuData.map((item) => (
                        <div key={item.name} className="w-full">
                            <div
                                className="flex justify-between items-center w-full text-[#00634A] hover:text-[#588D7F] text-lg"
                                onClick={() => handleAccordionToggle(item.name)}
                            >
                                <Link href={item.href}>{item.name}</Link>
                                {item.submenu && (
                                    <span>
                                        {activeAccordion === item.name ? (
                                            <FaChevronUp />
                                        ) : (
                                            <FaChevronDown />
                                        )}
                                    </span>
                                )}
                            </div>
                            {item.submenu &&
                                activeAccordion === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="ml-4 space-y-2"
                                    >
                                        {item.submenu.map((subitem) => (
                                            <Link
                                                key={subitem.name}
                                                href={subitem.href}
                                                className="text-[#00634A] hover:text-[#588D7F] block"
                                            >
                                                {subitem.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                        </div>
                    ))}
                    <span className="bg-[#00634A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#588D7F]">
                        Donate
                    </span>
                </motion.div>
            </nav>
        </header>
    );
};

export default Header;
