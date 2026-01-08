import { useState } from "react";
import Button from "@/Components/ui/button/Button";

export default function DestinationPackageSection() {
    const [activeTab, setActiveTab] = useState<"indonesia" | "japan">("indonesia");

    const data = {
        indonesia: {
            description:
                "Explore a wide range of curated travel packages across Indonesia, designed to showcase breathtaking nature, stunning beaches, and rich cultural experiences in one well-planned journey.",
            images: [
                "https://images.unsplash.com/photo-1540541338287-41700207dee6",
                "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1170&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1519824145371-296894a0daa9",
            ],
        },
        japan: {
            description:
                "Discover thoughtfully crafted travel packages in Japan that blend modern cities, mountain landscapes, and traditional culture, offering a seamless and memorable travel experience.",
            images: [
                "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
                "https://images.unsplash.com/photo-1528164344705-47542687000d",
                "https://images.unsplash.com/photo-1549693578-d683be217e58",
            ],
        },
    };

    const content = data[activeTab];

    return (
        <section className="py-20 px-6 lg:px-20 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* Image Stack */}
                <div className="relative w-full max-w-xl mx-auto">

                    {/* Main Image */}
                    <div className="aspect-16/10 rounded-3xl overflow-hidden shadow-lg">
                        <img
                            src={content.images[0]}
                            alt="Destination Package"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bottom Left Image */}
                    <div className="absolute -bottom-10 -left-10 w-44 sm:w-56 aspect-16/10 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={content.images[1]}
                            alt="Travel Experience"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Top Right Image */}
                    <div className="absolute -top-10 -right-10 w-44 sm:w-56 aspect-16/10 rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={content.images[2]}
                            alt="Tour Destination"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div>
                    <p className="text-sm text-gray-400 mb-2">
                        Curated Travel Experiences
                    </p>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        Find The Perfect <br /> <span className="text-primary">Destination Package</span>
                    </h2>

                    {/* Tabs */}
                    <div className="flex items-center gap-6 mt-6 border-b border-gray-200">
                        {(["indonesia", "japan"] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 text-sm font-medium capitalize transition ${
                                    activeTab === tab
                                        ? "text-primary border-b-2 border-primary"
                                        : "text-gray-400 hover:text-gray-600"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="mt-6 text-sm text-gray-600 leading-relaxed max-w-lg">
                        {content.description}
                    </p>

                    {/* CTA */}
                    <Button className="mt-8">
                        View All Packages
                    </Button>
                </div>
            </div>
        </section>
    );
}
