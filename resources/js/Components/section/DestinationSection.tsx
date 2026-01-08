import { FaMapMarkerAlt } from "react-icons/fa";
import Button from "@/Components/ui/button/Button";

export default function DestinationSection() {
    const destinations = [
        {
            title: "Mount Fuji",
            country: "Japan",
            image:
                "https://images.unsplash.com/photo-1549693578-d683be217e58",
            nights: "3 Nights / 4 Days",
            price: "¥45,000",
        },
        {
            title: "Kyoto Arashiyama",
            country: "Japan",
            image:
                "https://images.unsplash.com/photo-1593011077265-e591e28a59c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nights: "2 Nights / 3 Days",
            price: "¥32,000",
        },
        {
            title: "Bromo Tengger Semeru",
            country: "Indonesia",
            image:
                "https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            nights: "2 Nights / 3 Days",
            price: "IDR 2,500,000",
        },
    ];

    return (
        <section className="py-20 px-4 lg:px-12 bg-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        <span className="text-primary">Explore</span> Popular Destinations
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 max-w-xl">
                        Discover breathtaking destinations from Japan and Indonesia,
                        curated for unforgettable travel experiences.
                    </p>
                </div>

                <button className="text-sm px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                    Explore All
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {destinations.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                        {/* Image */}
                        <div className="relative aspect-4/3 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                <FaMapMarkerAlt className="text-primary" />
                                {item.country}
                            </div>

                            <div className="mt-4 flex items-center justify-between text-sm">
                                <span className="text-gray-500">
                                    {item.nights}
                                </span>
                                <span className="font-semibold text-gray-900">
                                    {item.price}
                                </span>
                            </div>

                            <Button className="mt-5 w-full">
                                View Package
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
