"use client";

import React from "react";

const DonateSection = () => {
    const cards = [
        {
            image: "/images/320x240.jpg",
            title: "Support Education",
        },
        {
            image: "/images/320x240.jpg",
            title: "Feed the Hungry",
        },
        {
            image: "/images/320x240.jpg",
            title: "Care for Animals",
        },
    ];

    return (
        <div className=" bg-gray-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative group bg-white overflow-hidden shadow-lg"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-left">
                                <h3 className="text-xl font-semibold text-white mb-4">{card.title}</h3>
                                <button className="bg-[#FFB422] text-white py-2 px-4 rounded-md hover:bg-[#e69c1b] transition-colors duration-300">
                                    Donate
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonateSection;
