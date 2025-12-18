import { PropsWithChildren } from "react";
import { usePage } from "@inertiajs/react";
import { SidebarProvider, useSidebar } from "@/Context/SidebarContext";
import AppHeader from "@/Components/app/AppHeader";
import AppSidebar from "@/Components/app/AppSidebar";
import { navConfig } from "@/utils/navConfig";
import Backdrop from "@/Layouts/Backdrop";

function LayoutContent({ children }: PropsWithChildren) {
    const { auth }: any = usePage().props;
    const role = auth?.user?.role || "student";

    const navItems = navConfig[role] || [];
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    return (
        <div className="min-h-screen xl:flex">
            <div>
                <AppSidebar navItems={navItems} />
                <Backdrop />
            </div>
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isExpanded || isHovered ? "lg:ml-72.5" : "lg:ml-22.5"
                } ${isMobileOpen ? "ml-0" : ""}`}
            >
                <AppHeader />
                <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <SidebarProvider>
            <LayoutContent>{children}</LayoutContent>
        </SidebarProvider>
    );
};

export default DashboardLayout;
