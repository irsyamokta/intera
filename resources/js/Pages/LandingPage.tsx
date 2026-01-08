import { Head } from "@inertiajs/react";

import AppLayout from "@/Layouts/AppLayout";

import AppFooter from "@/Components/app/AppFooter";
import FloatingChat from "@/Components/ui/FloatingChat";
import HeroSection from "@/Components/section/HeroSection";
import DestinationSection from "@/Components/section/DestinationSection";
import FAQSection from "@/Components/section/FAQSection";
import LuxuryDestinationSection from "@/Components/section/DestinationPackageSection";
import CTASection from "@/Components/section/CTASection";
import TestimonialSection from "@/Components/section/TestimonialSection";


export default function Home() {
    return (
        <AppLayout>
            <Head title="Intera" />
            <HeroSection />
            <DestinationSection />
            <LuxuryDestinationSection />
            <FAQSection />
            <TestimonialSection />
            <CTASection />
            <AppFooter />
            <FloatingChat isAuthenticated={true} />
        </AppLayout>
    );
}
