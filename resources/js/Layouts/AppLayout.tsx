import { PropsWithChildren } from "react";
import AppNavbar from "@/Components/app/AppNavbar";

interface AppLayoutProps {
    className?: string;
}

const AppLayout: React.FC<PropsWithChildren<AppLayoutProps>> = ({
    children,
    className,
}) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <AppNavbar />

            {/* Main Content */}
            <main className={`flex-1 overflow-hidden ${className ?? ""}`}>
                {children}
            </main>
        </div>
    );
};

export default AppLayout;
