import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@inertiajs/react";

import { LuChevronDown } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";
import { useSidebar } from "@/Context/SidebarContext";

import logoColor from "../../../assets/logo/logo-color.png";
import logoWhite from "../../../assets/logo/logo-white.png";

type SubItem = {
    name: string;
    path: string;
    pro?: boolean;
    new?: boolean;
};

type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: SubItem[];
};

type AppSidebarProps = {
    navItems: NavItem[];
    othersItems?: NavItem[];
};

const AppSidebar: React.FC<AppSidebarProps> = ({ navItems, othersItems = [] }) => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();

    // current path (safe for SSR)
    const getCurrentPath = () =>
        typeof window !== "undefined" ? window.location.pathname : "";

    const [currentPath, setCurrentPath] = useState<string>(getCurrentPath());

    useEffect(() => {
        if (typeof window === "undefined") return;
        const onPop = () => setCurrentPath(window.location.pathname);
        window.addEventListener("popstate", onPop);
        setCurrentPath(window.location.pathname);
        return () => window.removeEventListener("popstate", onPop);
    }, []);

    const [openSubmenu, setOpenSubmenu] = useState<{ type: "main" | "others"; index: number } | null>(null);
    const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const isActive = useCallback(
        (path?: string) => {
            if (!path) return false;
            return currentPath === path || currentPath.startsWith(path + "/");
        },
        [currentPath]
    );

    useEffect(() => {
        let submenuMatched = false;
        ["main", "others"].forEach((menuType) => {
            const items = menuType === "main" ? navItems : othersItems;
            items.forEach((nav, index) => {
                if (nav.subItems) {
                    nav.subItems.forEach((subItem) => {
                        if (isActive(subItem.path)) {
                            setOpenSubmenu({ type: menuType as "main" | "others", index });
                            submenuMatched = true;
                        }
                    });
                } else if (nav.path && isActive(nav.path)) {
                    setOpenSubmenu(null);
                    submenuMatched = true;
                }
            });
        });

        if (!submenuMatched) {
            setOpenSubmenu(null);
        }
    }, [currentPath, navItems, othersItems]);

    useEffect(() => {
        if (openSubmenu !== null) {
            const key = `${openSubmenu.type}-${openSubmenu.index}`;
            if (subMenuRefs.current[key]) {
                setSubMenuHeight((prev) => ({
                    ...prev,
                    [key]: subMenuRefs.current[key]?.scrollHeight || 0,
                }));
            }
        }
    }, [openSubmenu]);

    const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
        setOpenSubmenu((prev) => {
            if (prev && prev.type === menuType && prev.index === index) return null;
            return { type: menuType, index };
        });
    };

    const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
        <ul className="flex flex-col gap-4">
            {items.map((nav, index) => (
                <li key={nav.name}>
                    {nav.subItems ? (
                        <button
                            onClick={() => handleSubmenuToggle(index, menuType)}
                            className={`menu-item group ${openSubmenu?.type === menuType && openSubmenu?.index === index ? "menu-item-active" : "menu-item-inactive"} cursor-pointer ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
                        >
                            <span className={`menu-item-icon-size ${openSubmenu?.type === menuType && openSubmenu?.index === index ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>
                                {nav.icon}
                            </span>

                            {(isExpanded || isHovered || isMobileOpen) && (
                                <span className="menu-item-text">{nav.name}</span>
                            )}

                            {(isExpanded || isHovered || isMobileOpen) && (
                                <LuChevronDown
                                    className={`ml-auto w-5 h-5 transition-transform duration-200 ${openSubmenu?.type === menuType && openSubmenu?.index === index ? "rotate-180 text-brand-500" : ""}`}
                                />
                            )}
                        </button>
                    ) : (
                        nav.path && (
                            <Link
                                href={nav.path}
                                className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}
                            >
                                <span className={`menu-item-icon-size ${isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"}`}>
                                    {nav.icon}
                                </span>
                                {(isExpanded || isHovered || isMobileOpen) && (
                                    <span className="menu-item-text">{nav.name}</span>
                                )}
                            </Link>
                        )
                    )}

                    {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
                        <div
                            ref={(el) => {
                                subMenuRefs.current[`${menuType}-${index}`] = el;
                            }}
                            className="overflow-hidden transition-all duration-300"
                            style={{
                                height:
                                    openSubmenu?.type === menuType && openSubmenu?.index === index
                                        ? `${subMenuHeight[`${menuType}-${index}`]}px`
                                        : "0px",
                            }}
                        >
                            <ul className="mt-2 space-y-1 ml-9">
                                {nav.subItems.map((subItem) => (
                                    <li key={subItem.name}>
                                        <Link
                                            href={subItem.path}
                                            className={`menu-dropdown-item ${isActive(subItem.path) ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"}`}
                                        >
                                            {subItem.name}
                                            <span className="flex items-center gap-1 ml-auto">
                                                {subItem.new && (
                                                    <span className={`ml-auto ${isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"} menu-dropdown-badge`}>new</span>
                                                )}
                                                {subItem.pro && (
                                                    <span className={`ml-auto ${isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"} menu-dropdown-badge`}>pro</span>
                                                )}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <aside
            className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-primary  text-white h-screen transition-all duration-300 ease-in-out z-50
        ${isExpanded || isMobileOpen ? "w-72.5" : isHovered ? "w-72.5" : "w-22.5"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`py-4 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
                <Link href="/">
                    {isExpanded || isHovered || isMobileOpen ? (
                        <>
                            <img src={logoWhite} alt="Logo" className="dark:hidden w-48" />
                            <img src={logoWhite} alt="Logo" className="hidden dark:block w-48" />
                        </>
                    ) : (
                        <img className="w-10" src="/favicon.png" alt="Logo" width={32} height={32} />
                    )}
                </Link>
            </div>

            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className={`mb-4 text-xs uppercase flex leading-5 text-white ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
                                {isExpanded || isHovered || isMobileOpen ? "" : <HiDotsHorizontal className="size-6" />}
                            </h2>
                            {renderMenuItems(navItems, "main")}
                        </div>

                        {othersItems && othersItems.length > 0 && (
                            <div>
                                <h2 className={`mb-4 text-xs uppercase flex leading-5 text-white ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
                                    {isExpanded || isHovered || isMobileOpen ? "Lainnya" : <HiDotsHorizontal className="size-6" />}
                                </h2>
                                {renderMenuItems(othersItems, "others")}
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default AppSidebar;
