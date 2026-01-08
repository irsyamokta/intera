import { FaWhatsapp } from "react-icons/fa";
import Button from "@/Components/ui/button/Button";

export default function CTASection() {
    const whatsappNumber = "6281234567890";
    const message =
        "Hello, I would like to ask about your destination travel packages.";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <section className="py-20 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Image Polaroid Stack */}
                <div className="relative w-full max-w-md mx-auto h-105">

                    {/* Image 1 */}
                    <div className="absolute top-0 left-6 rotate-[-4deg] z-10">
                        <div className="bg-white p-3 rounded-lg shadow-lg w-44 sm:w-52">
                            <img
                                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                                alt="Destination 1"
                                className="w-full h-56 object-cover rounded-md"
                            />
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="absolute top-4 right-4 rotate-3 z-20">
                        <div className="bg-white p-3 rounded-lg shadow-lg w-44 sm:w-52">
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
                                alt="Destination 2"
                                className="w-full h-56 object-cover rounded-md"
                            />
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="absolute bottom-0 left-0 rotate-2 z-30">
                        <div className="bg-white p-3 rounded-lg shadow-lg w-48 sm:w-56">
                            <img
                                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                                alt="Destination 3"
                                className="w-full h-60 object-cover rounded-md"
                            />
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="absolute bottom-6 right-8 -rotate-2 z-40">
                        <div className="bg-white p-3 rounded-lg shadow-lg w-40 sm:w-48">
                            <img
                                src="https://images.unsplash.com/photo-1540541338287-41700207dee6"
                                alt="Destination 4"
                                className="w-full h-52 object-cover rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    <p className="text-sm text-gray-400 mb-2">
                        Your next adventure starts here
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        <span className="text-primary">Plan Your Trip</span> <br />
                        With Our Destination Packages
                    </h2>

                    <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-lg">
                        Explore curated destination packages tailored to your travel
                        style. From nature escapes to cultural journeys, our team is
                        ready to help you plan a memorable and stress-free trip.
                    </p>

                    {/* CTA */}
                    <div className="mt-8">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full">
                                <FaWhatsapp className="text-lg" />
                                Chat via WhatsApp
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
