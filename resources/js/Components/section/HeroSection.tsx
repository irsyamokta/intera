import { useState } from "react";
import { HiChevronDown, HiLocationMarker } from "react-icons/hi";

export default function HeroSection() {
    const [openCountry, setOpenCountry] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const [country, setCountry] = useState("Country");
    const [category, setCategory] = useState("Category");

    const countries = [
        { label: "Indonesia 🇮🇩", value: "id" },
        { label: "Japan 🇯🇵", value: "jp" },
    ];

    const categories = [
        "Nature",
        "Beach",
        "Mountain",
        "Culture",
        "City",
        "Culinary",
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
                }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-linear-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl px-6 text-center text-white">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                    WHERE EVERY TRIP HAS A
                </h1>

                <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
                    Explore destinations shaped by rich culture, breathtaking landscapes, and thoughtfully crafted experiences designed to leave a lasting impression long after your journey ends.
                </p>

                {/* Search Bar */}
                <div
                    className="
                        relative mt-10 mx-auto
                        bg-white shadow-lg
                        flex items-center
                        rounded-full
                        h-12 sm:h-14
                        px-2
                        text-gray-700
                        max-w-md sm:max-w-2xl
                    "
                >
                    {/* Country */}
                    <div className="relative flex-1">
                        <button
                            onClick={() => {
                                setOpenCountry(!openCountry);
                                setOpenCategory(false);
                            }}
                            className="
                                w-full h-full
                                flex items-center justify-between
                                px-3 sm:px-4
                                text-xs sm:text-sm
                            "
                        >
                            <div className="flex items-center gap-1 sm:gap-2">
                                <HiLocationMarker className="text-gray-400 text-sm" />
                                <span className="truncate">{country}</span>
                            </div>
                            <HiChevronDown className="text-sm" />
                        </button>

                        {openCountry && (
                            <div className="absolute left-0 top-full mt-2 w-40 bg-white rounded-xl shadow-lg z-20 overflow-hidden text-left">
                                {countries.map(item => (
                                    <button
                                        key={item.value}
                                        onClick={() => {
                                            setCountry(item.label);
                                            setOpenCountry(false);
                                        }}
                                        className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-gray-200 hidden sm:block" />

                    {/* Category */}
                    <div className="relative flex-1">
                        <button
                            onClick={() => {
                                setOpenCategory(!openCategory);
                                setOpenCountry(false);
                            }}
                            className="
                                w-full h-full
                                flex items-center justify-between
                                px-3 sm:px-4
                                text-xs sm:text-sm
                            "
                        >
                            <span className="truncate">{category}</span>
                            <HiChevronDown className="text-sm" />
                        </button>

                        {openCategory && (
                            <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-xl shadow-lg z-20 overflow-hidden text-left">
                                {categories.map(item => (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            setCategory(item);
                                            setOpenCategory(false);
                                        }}
                                        className="w-full px-4 py-2 text-sm hover:bg-gray-100 text-left"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* CTA */}
                    <button
                        className="
                            bg-primary hover:bg-primary/90 text-white
                            h-10 sm:h-12
                            px-4 sm:px-6
                            rounded-full
                            text-xs sm:text-sm font-medium
                            transition
                            ml-1
                        "
                    >
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}
