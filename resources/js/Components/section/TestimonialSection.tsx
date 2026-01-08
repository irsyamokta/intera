import { FaStar } from "react-icons/fa";

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Angel Barbara",
            role: "Travel Enthusiast",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            message:
                "The trip was perfectly organized from start to finish. Every destination felt special, and the experience exceeded my expectations.",
        },
        {
            name: "John Doe",
            role: "Solo Traveler",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            message:
                "An unforgettable journey! The balance between adventure and relaxation was spot on. I learned so much without ever feeling rushed.",
        },
        {
            name: "Sophia Tan",
            role: "Family Traveler",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            rating: 4,
            message:
                "Great service and very friendly team. The destinations were well curated and suitable for the whole family.",
        },
    ];

    return (
        <section id="testimonial" className="py-20 px-6 lg:px-20 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Stories From Our <span className="text-primary">Travelers</span>
                    </h2>
                    <p className="mt-3 text-sm text-gray-500">
                        Real stories from travelers who’ve explored unforgettable destinations with our curated travel packages.
                    </p>
                </div>

                {/* Testimonials */}
                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
                        >
                            {/* Rating */}
                            <div className="flex items-center gap-1 text-orange-400">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            {/* Message */}
                            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                                “{item.message}”
                            </p>

                            {/* User */}
                            <div className="mt-6 flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
