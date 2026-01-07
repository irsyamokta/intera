import Logo from "../../../assets/svg/logo-white.svg";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function AppFooter() {
    return (
        <footer className="bg-primary text-white">
            {/* Main Footer */}
            <div className="px-4 sm:px-12 py-16 flex-col lg:flex-row flex gap-8 justify-between ">

                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="Intera" className="w-36" />
                    </div>

                    <p className="max-w-sm text-sm text-white/80 leading-relaxed">
                        Plan your next adventure, book effortlessly, and enjoy
                        exclusive deals—all in one app.
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#177E80] transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#177E80] transition"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#177E80] transition"
                        >
                            <FaFacebookF />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {/* Pages */}
                    <div>
                        <h3 className="font-semibold mb-4">Pages</h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Feature</a></li>
                            <li><a href="#" className="hover:text-white">Product</a></li>
                            <li><a href="#" className="hover:text-white">Review</a></li>
                            <li><a href="#" className="hover:text-white">Resources</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><a href="#" className="hover:text-white">FAQs</a></li>
                            <li><a href="#" className="hover:text-white">Support Center</a></li>
                            <li><a href="#" className="hover:text-white">Security</a></li>
                        </ul>
                    </div>

                    {/* More */}
                    <div>
                        <h3 className="font-semibold mb-4">More</h3>
                        <ul className="space-y-3 text-sm text-white/80">
                            <li><a href="#" className="hover:text-white">Become Member</a></li>
                            <li><a href="#" className="hover:text-white">Events</a></li>
                            <li><a href="#" className="hover:text-white">Term & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20">
                <div className="px-6 lg:px-12 py-4 mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-white/70 gap-3">
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Term of Service</a>
                    </div>

                    <p>© {new Date().getFullYear()} Intera. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
