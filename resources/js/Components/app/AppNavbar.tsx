import { useState } from "react";
import { Link } from "@inertiajs/react";
import Button from "@/Components/ui/button/Button";
import { HiMenuAlt3, HiX, HiChevronDown } from "react-icons/hi";

import LogoColor from "../../../assets/svg/logo-color.svg";

const LANGUAGES = [
    { code: "id", label: "Indonesia" },
    { code: "en", label: "English" },
    { code: "jp", label: "日本語" },
];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openLang, setOpenLang] = useState(false);
    const [language, setLanguage] = useState("en");

    const selectedLang = LANGUAGES.find(l => l.code === language);

    return (
        <nav className="fixed top-4 lg:top-6 left-0 w-full z-50">
            <div className="mx-auto px-4 sm:px-12">
                {/* Navbar Container */}
                <div className="flex items-center justify-between bg-white rounded-full shadow-md px-5 py-3">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src={LogoColor} alt="VoyageGo" className="w-28 lg:w-36" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <Link href="/explore" className="hover:text-primary">Explore</Link>
                        <Link href="/company" className="hover:text-primary">Company</Link>
                        <Link href="/testimonial" className="hover:text-primary">Testimonial</Link>
                        <Link href="/faq" className="hover:text-primary">FAQ</Link>
                    </div>

                    {/* Desktop Right */}
                    <div className="hidden lg:flex items-center gap-4 relative">
                        <button
                            onClick={() => setOpenLang(!openLang)}
                            className="flex items-center gap-2 text-sm text-gray-700 hover:text-primary"
                        >
                            {selectedLang?.label}
                            <HiChevronDown />
                        </button>

                        {openLang && (
                            <div className="absolute right-24 top-12 bg-white rounded-xl shadow-lg py-2 w-36 text-sm">
                                {LANGUAGES.map(lang => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setOpenLang(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${language === lang.code
                                                ? "font-semibold text-primary"
                                                : ""
                                            }`}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}

                        <Link href="/get-started">
                            <Button className="rounded-full px-6 py-2 text-sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-2xl text-gray-700"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        {openMenu ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {openMenu && (
                    <div className="lg:hidden mt-3 bg-white rounded-2xl shadow-xl overflow-hidden">

                        {/* Menu Links */}
                        <div className="flex flex-col px-5 py-4 space-y-3 text-sm">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/explore", label: "Explore" },
                                { href: "/company", label: "Company" },
                                { href: "/testimonial", label: "Testimonial" },
                                { href: "/faq", label: "FAQ" },
                            ].map(item => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpenMenu(false)}
                                    className="px-4 py-3 rounded-sm hover:bg-gray-100"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <Link href="/get-started" onClick={() => setOpenMenu(false)}>
                                <Button className="w-full rounded-full mt-2">
                                    Get Started
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Language Dropdown */}
                        <div className="px-5 py-4 border-b relative">
                            <p className="text-xs text-gray-400 mb-2">Language</p>

                            <button
                                onClick={() => setOpenLang(!openLang)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-sm bg-gray-100 text-sm"
                            >
                                {selectedLang?.label}
                                <HiChevronDown
                                    className={`transition-transform ${openLang ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {openLang && (
                                <div className="mt-2 bg-white rounded-xl shadow-md overflow-hidden">
                                    {LANGUAGES.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setOpenLang(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-100 ${language === lang.code
                                                    ? "font-semibold text-primary"
                                                    : ""
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
