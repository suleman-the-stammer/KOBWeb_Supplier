import React from "react";

// Assets | ICONS :
import { BiSupport } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import { BiSolidCog } from "react-icons/bi";
import { RiVideoFill } from "react-icons/ri";
import { PiSignInBold } from "react-icons/pi";
import { BiSolidFlame } from "react-icons/bi";
import { MdPersonSearch } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BiSolidUserPlus } from "react-icons/bi";
import { BsInfoCircleFill } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidHomeSmile } from "react-icons/bi";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiFolderHistoryFill } from "react-icons/ri";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

// Components :
import { Header } from "../components";


const getSidebarData = ({ label, key, icon, children, isdisabled }) => {
    return { key, icon, children, label, isdisabled };
};


const AppRoutesList = [
    getSidebarData({ label: "Dashboard", key: "/dashboard", icon: <BiSolidDashboard className="icon" /> }),
    getSidebarData({
        label: "Trending",
        key: "/trending",
        icon: <BiSolidFlame className="icon" />,
        children: [
            getSidebarData({ label: "Open", key: "/open", }),
            getSidebarData({ label: "Closed", key: "/closed", }),
        ],
    }),
    getSidebarData({
        label: "Responses", key: "/responses", icon: <BsFillClipboard2CheckFill className="icon" />,
        children: [
            getSidebarData({ label: "RFI/RFQ", key: "/rfi-rfq", }),
            getSidebarData({ label: "Compaign Demand", key: "/compaign-demand", }),
        ],
    }),
    getSidebarData({ label: "Campaigns", key: "/campaigns", icon: <BsFlagFill className="icon" /> }),
    getSidebarData({ label: "Employees", key: "/employees", icon: <PiUsersThreeFill className="icon" /> }),
    getSidebarData({ label: "Supplier Sites", key: "/supplier-sites", icon: <BiSolidHomeSmile className="icon" /> }),
    getSidebarData({ label: "View Jobs", key: "/view-Jobs", icon: <MdPersonSearch className="icon" />, }),
    getSidebarData({ label: "View History", key: "/view-History", icon: <RiFolderHistoryFill className="icon" /> }),
    getSidebarData({ label: "Manage Payments", key: "/payments", icon: <GiReceiveMoney className="icon" /> }),
    getSidebarData({ label: "Tutorial Videos", key: "/tutorial-videos", icon: <RiVideoFill className="icon" /> }),
    getSidebarData({ label: "About Us", key: "/about", icon: <HiMiniInformationCircle className="icon" /> }),
    getSidebarData({ label: "Help & Support", key: "/help-support", icon: <BiSupport className="icon" /> }),
    getSidebarData({ label: "Setting", key: "/setting", icon: <BiSolidCog className="icon" /> }),
];
const AuthRoutesList = [
    getSidebarData({ label: "Sign In", key: "/login", icon: <PiSignInBold className="icon" />, }),
    getSidebarData({
        label: "Registration",
        key: "/registers",
        icon: <BiSolidUserPlus className="icon" />,
        children: [
            getSidebarData({ label: "New", key: "/register", isdisabled: true }),
            getSidebarData({ label: "Edit", key: "/edit-register", isdisabled: true }),
        ],
    }),
    getSidebarData({ label: "How Koboldo works", key: "/how-koboldo-works", icon: <BsFillQuestionCircleFill className="icon" /> }),
    getSidebarData({ label: "About Us", key: "/about-us", icon: <BsInfoCircleFill className="icon" /> }),
]

export { AppRoutesList, AuthRoutesList };
