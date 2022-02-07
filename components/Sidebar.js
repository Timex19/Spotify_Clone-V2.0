import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
} from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import Image from 'next/image';
import React from 'react';

function Sidebar() {
    return (
        <section className='fixed top-0 z-20 flex flex-col p-4 items-center 
        bg-black w-[90px] h-screen space-y-8'>
            <Image src="https://rb.gy/xkacau" 
            width={56} 
            height={56} 
            objectFit="contain"
            className="moveLogo"
            />
            <div className='flex flex-col space-y-8'>
            <HomeIcon className="sidebarIcon text-white opacity-[0.85] moveIcon" />
            <RiCompassFill className="sidebarIcon text-2xl moveIcon" />
            <FaMicrophoneAlt className="sidebarIcon ml-1 moveIcon" />
            <ChartBarIcon className="sidebarIcon moveIcon" />
            <ClockIcon className="sidebarIcon moveIcon" />
            <DotsHorizontalIcon className="sidebarIcon moveIcon" />
            </div>
        </section>
    );
};

export default Sidebar;
