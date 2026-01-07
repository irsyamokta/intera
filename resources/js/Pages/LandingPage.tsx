import { Head } from "@inertiajs/react";

import AppLayout from "@/Layouts/AppLayout";

import AppFooter from "@/Components/app/AppFooter";
import FloatingChat from "@/Components/ui/FloatingChat";


export default function Home() {
    return (
        <>
            <AppLayout>
                <Head title="Intera" />
                <AppFooter />
                <FloatingChat isAuthenticated={true} />
            </AppLayout>
        </>
    );
}
