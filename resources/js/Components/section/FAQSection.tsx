import { useState } from "react";
import { HiPlus, HiX } from "react-icons/hi";

export default function FAQSection() {
    const faqs = [
        {
            question: "How does the app work?",
            answer:
                "Intera allows you to explore destinations, compare travel packages, and book trips seamlessly through one intuitive platform.",
        },
        {
            question: "Can I use the app offline?",
            answer:
                "Yes, you can access saved trips and itineraries offline, although booking and updates require an internet connection.",
        },
        {
            question: "What payment options do you offer?",
            answer:
                "We offer secure payment methods including credit cards, digital wallets, and bank transfers for a smooth and convenient transaction experience.",
        },
        {
            question: "Are there any fees for cancellations?",
            answer:
                "Cancellation fees depend on the package provider and timing. Details are always shown clearly before you confirm your booking.",
        },
        {
            question: "How do I find travel deals?",
            answer:
                "You can find the best deals by browsing featured destinations, seasonal promotions, and exclusive offers available in the app.",
        },
        {
            question: "Is customer support available 24/7?",
            answer:
                "Yes, our customer support team is available 24/7 to assist you with bookings, payments, and travel-related inquiries.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <section id="faq" className="py-20 px-4 lg:px-12 bg-gray-50">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-sm text-gray-400 mb-2">Frequently Asked Questions</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Common Questions About{" "}
                    <span className="text-primary">Intera</span>
                </h2>
            </div>

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((item, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                            <button
                                onClick={() =>
                                    setActiveIndex(isOpen ? 0 : index)
                                }
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="font-medium text-gray-900">
                                    {item.question}
                                </span>
                                <span className="text-xl text-gray-500">
                                    {isOpen ? <HiX /> : <HiPlus />}
                                </span>
                            </button>

                            {isOpen && (
                                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
