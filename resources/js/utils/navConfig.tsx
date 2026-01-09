import { LuLayoutDashboard, LuUserRound } from "react-icons/lu";
import { MdOutlineClass, MdOutlineQuiz } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";

export const navConfig: Record<string, any[]> = {
    admin: [
        { icon: <LuLayoutDashboard />, name: "Dashboard", path: "/dashboard" },
        { icon: <LuUserRound />, name: "User", path: "/users" },
        { icon: <MdOutlineClass />, name: "Kelas", path: "/classes" },
        { icon: <MdOutlineQuiz />, name: "Kuis", path: "/quiz" },
        { icon: <GrAnnounce />, name: "Pengumuman", path: "/announcements" },
    ],
    mentor: [
        { icon: <LuLayoutDashboard />, name: "Dashboard", path: "/dashboard" },
        { icon: <MdOutlineClass />, name: "Kelasku", path: "/classes" },
        { icon: <MdOutlineQuiz />, name: "Kuis", path: "/quiz" },
    ],
    student: [
        { icon: <LuLayoutDashboard />, name: "Dashboard", path: "/dashboard" },
        { icon: <MdOutlineClass />, name: "Kelasku", path: "/classes" },
    ],
};
