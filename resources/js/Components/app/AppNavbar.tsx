import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import Button from "@/Components/ui/button/Button";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import LogoWhite from "../../../assets/logo/logo-white.png";
import LogoColor from "../../../assets/logo/logo-color.png";

interface NavbarProps {
    forceSolid?: boolean;
}

const Navbar = ({ forceSolid = false }: NavbarProps) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!forceSolid) {
            const handleScroll = () => {
                setScrolled(window.scrollY > 50);
            };
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setScrolled(true);
        }
    }, [forceSolid]);

    const isSolid = forceSolid || scrolled;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-99 transition-all duration-300 ${isSolid ? "bg-white shadow" : "bg-transparent"
                }`}
        >
            <div className="flex items-center justify-between px-4 lg:px-20 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src={isSolid ? LogoColor : LogoWhite}
                        alt="Logo"
                        className="w-40 sm:w-48 transition-all duration-200"
                    />
                </Link>

                {/* Desktop menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link
                        href="/"
                        className={`relative transition-colors ${isSolid ? "text-gray-900" : "text-white"}
        hover:underline underline-offset-4`}
                    >
                        Beranda
                    </Link>
                    <a
                        href="#features"
                        className={`relative transition-colors ${isSolid ? "text-gray-900" : "text-white"}
        hover:underline underline-offset-4`}
                    >
                        Layanan
                    </a>
                    <a
                        href="#testimonials"
                        className={`relative transition-colors ${isSolid ? "text-gray-900" : "text-white"}
        hover:underline underline-offset-4`}
                    >
                        Testimoni
                    </a>
                    <a
                        href="#mitra"
                        className={`relative transition-colors ${isSolid ? "text-gray-900" : "text-white"}
        hover:underline underline-offset-4`}
                    >
                        Mitra
                    </a>
                    <a
                        href="#faq"
                        className={`relative transition-colors ${isSolid ? "text-gray-900" : "text-white"}
        hover:underline underline-offset-4`}
                    >
                        FAQ
                    </a>
                </div>

                {/* Login button */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link href="/login">
                        <Button variant="alternate" size="xs">Login</Button>
                    </Link>
                </div>

                {/* Mobile menu button (hamburger muncul sampai tablet) */}
                <button
                    className={`lg:hidden text-3xl transition-colors duration-300 ${isSolid ? "text-gray-900" : "text-white"}`}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {openMenu ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {openMenu && (
                <div className="lg:hidden bg-black/95 text-white px-6 py-6 space-y-6">
                    <nav className="flex flex-col gap-4 text-lg font-medium">
                        <Link
                            href="/"
                            onClick={() => setOpenMenu(false)}
                            className="block px-3 py-2 rounded hover:bg-white/10 transition-colors"
                        >
                            Beranda
                        </Link>
                        <a
                            href="#features"
                            onClick={() => setOpenMenu(false)}
                            className="block px-3 py-2 rounded hover:bg-white/10 transition-colors"
                        >
                            Layanan
                        </a>
                        <a
                            href="#testimonials"
                            onClick={() => setOpenMenu(false)}
                            className="block px-3 py-2 rounded hover:bg-white/10 transition-colors"
                        >
                            Testimoni
                        </a>
                        <a
                            href="#mitra"
                            onClick={() => setOpenMenu(false)}
                            className="block px-3 py-2 rounded hover:bg-white/10 transition-colors"
                        >
                            Mitra
                        </a>
                        <a
                            href="#faq"
                            onClick={() => setOpenMenu(false)}
                            className="block px-3 py-2 rounded hover:bg-white/10 transition-colors"
                        >
                            FAQ
                        </a>
                    </nav>

                    {/* Login button */}
                    <div className="pt-4">
                        <Link href="/login" onClick={() => setOpenMenu(false)}>
                            <Button variant="alternate" className="w-full py-2 text-base">
                                Login
                            </Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
