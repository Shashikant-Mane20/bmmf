import Image from "next/image";

// export default function Footer() {
//   return (
//     <div >Footer</div>
//   );
// }

// "use client";

import React from "react";
import { FaInstagram,FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-[#FFB422] font-bold text-lg mb-4">About Us</h3>
            <p className="text-sm mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste facilis magni fuga tenetur alias quis nemo in velit voluptate optio minima perspiciatis a, impedit culpa sunt omnis corporis molestiae ducimus?
            </p>
            <p className="text-sm">Call us: +91 7276162374</p>
            <p className="text-sm">Plot No.112, 112, Kishor Suryawanshi Marg, Road, Omkar Nagar, Nashik, Maharashtra 422004</p>
          </div>

          {/* Latest Posts Section */}
          <div>
            <h3 className="text-[#FFB422] font-bold text-lg mb-4">Latest Posts</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB422] transition duration-300"
                >
                  Care for All People <span className="text-xs block">April 19, 2017</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB422] transition duration-300"
                >
                  Find a Project <span className="text-xs block">March 28, 2017</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB422] transition duration-300"
                >
                  Being Volunteer <span className="text-xs block">March 28, 2017</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-[#FFB422] font-bold text-lg mb-4">Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB422] transition duration-300"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB422] transition duration-300"
                >
                  Recent Causes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB422] transition duration-300"
                >
                  Latest Events
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB422] transition duration-300"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFB422] transition duration-300"
                >
                  Who We Are?
                </a>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-[#FFB422] font-bold text-lg mb-4">Location</h3>
            <iframe
              className="w-full h-40 md:h-32"
            //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838434509377!2d-122.43762978468184!3d37.7749292797598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d4d7c4f7%3A0x2100dfd5eae9a6bc!2s2976%20Washington%20St%2C%20San%20Francisco%2C%20CA%2094115%2C%20USA!5e0!3m2!1sen!2sin!4v1694620149850!5m2!1sen!2sin"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4135.394562566578!2d73.7944500711296!3d20.045581520751032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb4111082a17%3A0x3702085e303430a5!2sBirsa%20Munda%20Medical%20Hub%20-%20Best%20Multispecialty%20Hospital%20In%20Nashik%20%7C%20Best%20Low%20Cost%20Hospital%20in%20Nashik!5e1!3m2!1sen!2sus!4v1732705593839!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <FaInstagram className="text-xl hover:text-[#FFB422] cursor-pointer" />
            <FaXTwitter className="text-xl hover:text-[#FFB422] cursor-pointer" />
            <FaFacebook className="text-xl hover:text-[#FFB422] cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-[#FFB422] cursor-pointer" />
          </div>
          <p className="text-sm text-[#FFB422]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
