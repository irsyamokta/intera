import { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
// import ImageUser from "../../../assets/images/image-user.png";

type AppUser = {
    id: string;
    name: string;
    email: string;
    avatar?: string | null;
    role?: string;
};

type PageProps = {
    auth: { user: AppUser | null };
};

export default function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const user = usePage().props.auth.user;

    if (!user) return null;

    const toggleDropdown = () => setIsOpen((v) => !v);
    const closeDropdown = () => setIsOpen(false);

    const handleSignout = () => {
        router.post(route("logout"));
    };

    return (
        <div className="relative ml-auto">
            <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 dark:text-gray-400"
            >
                <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
                    <img
                        src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
                        alt="User"
                    />
                </span>

                <span className="block mr-1 font-medium text-theme-sm">{user.name}</span>
                <svg
                    className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Dropdown panel */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-4.25 w-65 flex flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
                    onMouseLeave={closeDropdown}
                >
                    <div>
                        <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                            {user.name}
                        </span>
                        <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">
                            {user.email}
                        </span>
                    </div>

                    <ul className="flex flex-col gap-1 pt-4 pb-3 border-b border-gray-200 dark:border-gray-800">
                        <li>
                            <Link
                                href={route("profile.edit")}
                                className="flex items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
                                onClick={closeDropdown}
                            >
                                <svg
                                    className="fill-gray-500"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 14.1526 4.3002 16.1184 5.61936 17.616C6.17279 15.3096 8.24852 13.5955 10.7246 13.5955H13.2746C15.7509 13.5955 17.8268 15.31 18.38 17.6167C19.6996 16.119 20.5 14.153 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM17.0246 18.8566V18.8455C17.0246 16.7744 15.3457 15.0955 13.2746 15.0955H10.7246C8.65354 15.0955 6.97461 16.7744 6.97461 18.8455V18.856C8.38223 19.8895 10.1198 20.5 12 20.5C13.8798 20.5 15.6171 19.8898 17.0246 18.8566ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9991 7.25C10.8847 7.25 9.98126 8.15342 9.98126 9.26784C9.98126 10.3823 10.8847 11.2857 11.9991 11.2857C13.1135 11.2857 14.0169 10.3823 14.0169 9.26784C14.0169 8.15342 13.1135 7.25 11.9991 7.25ZM8.48126 9.26784C8.48126 7.32499 10.0563 5.75 11.9991 5.75C13.9419 5.75 15.5169 7.32499 15.5169 9.26784C15.5169 11.2107 13.9419 12.7857 11.9991 12.7857C10.0563 12.7857 8.48126 11.2107 8.48126 9.26784Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Edit Profil
                            </Link>
                        </li>
                    </ul>

                    <button
                        onClick={handleSignout}
                        className="flex items-center gap-3 px-3 py-2 mt-3 font-medium text-gray-700 rounded-lg text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300 w-full text-left"
                    >
                        <svg
                            className="fill-gray-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.1 19.25c-.41 0-.75-.34-.75-.75v-4.25h-1.5v4.25c0 1.24 1.01 2.25 2.25 2.25h3.4c1.24 0 2.25-1.01 2.25-2.25v-13c0-1.24-1.01-2.25-2.25-2.25h-3.4c-1.24 0-2.25 1.01-2.25 2.25v4.25h1.5v-4.25c0-.41.34-.75.75-.75h3.4c.41 0 .75.34.75.75v13c0 .41-.34.75-.75.75h-3.4zM3.25 12c0 .22.09.43.24.58l4.61 4.61a.75.75 0 1 0 1.06-1.06l-3.47-3.47h10.27a.75.75 0 0 0 0-1.5H5.69l3.47-3.47a.75.75 0 0 0-1.06-1.06L3.49 11.42a.75.75 0 0 0-.24.58z"
                                fill="currentColor"
                            />
                        </svg>
                        Keluar
                    </button>
                </div>
            )}
        </div>
    );
}
