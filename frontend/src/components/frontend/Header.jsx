"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaInstagram,
//   FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Upper Header */}
      <div className="bg-[#F6F4EE] hidden md:flex items-center justify-between px-4 py-2 text-sm">
        {/* Left Section */}
        <div className="flex items-center space-x-3 text-black">
          <span>Call Us:+xxxxxxxxxx</span>
          <span className="border-l h-5 border-black px-1">ngo@example.com</span>
          <div className="flex space-x-2">
            <FaInstagram className="hover:text-[#FFB422]" />
            <FaXTwitter className="hover:text-[#FFB422]" />
            <FaFacebook className="hover:text-[#FFB422]" />
            <FaLinkedin className="hover:text-[#FFB422]" />
          </div>
        </div>

        {/* Right Section */}
        <Link href="/about-us"><div className="text-black hover:text-[#FFB422] font-light">About Us</div></Link>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Hamburger Menu */}
          <div
            className="md:hidden flex items-center text-black cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="text-2xl hover:text-[#FFB422]" />
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold text-[#FFB422] mx-auto md:mx-0">
            <Link href="/">NGO Logo</Link>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-black hover:text-[#FFB422] transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/causes"
              className="text-black hover:text-[#FFB422] transition duration-300"
            >
              Causes
            </Link>
            <Link
              href="/events"
              className="text-black hover:text-[#FFB422] transition duration-300"
            >
              Events
            </Link>
            <Link
              href="/pages"
              className="text-black hover:text-[#FFB422] transition duration-300"
            >
              Pages
            </Link>
            <Link
              href="/blog"
              className="text-black hover:text-[#FFB422] transition duration-300"
            >
              Blog
            </Link>
            <FaSearch className="text-black hover:text-[#FFB422] cursor-pointer" />
            <span className="text-[#FFB422] font-bold cursor-pointer">
              Donate
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col items-start px-4 py-4 space-y-3 bg-white transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <Link
            href="/"
            className="text-black hover:text-[#FFB422] transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/causes"
            className="text-black hover:text-[#FFB422] transition duration-300"
          >
            Causes
          </Link>
          <Link
            href="/events"
            className="text-black hover:text-[#FFB422] transition duration-300"
          >
            Events
          </Link>
          <Link
            href="/pages"
            className="text-black hover:text-[#FFB422] transition duration-300"
          >
            Pages
          </Link>
          <Link
            href="/blog"
            className="text-black hover:text-[#FFB422] transition duration-300"
          >
            Blog
          </Link>
          <span className="text-[#FFB422] font-bold">Donate</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

