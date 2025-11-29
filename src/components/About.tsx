"use client";

import {
    IconFileCv,
    IconLink,
    IconMoodNerd,
    IconTools,
} from "@tabler/icons-react";
import Image from "next/image";
import profilePic from "../../public/profile-pic.png";
import resume from "../../public/resume.png";
import Header from "./Header";
import { DraggableCard } from "./TechStack";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const socials = [
    {
        id: 1,
        name: "Telegram",
        designation: "@AnikAdhikari",
        image: "/rounded-icon/telegram.png",
        url: "https://t.me/AnikAdhikari",
    },
    {
        id: 2,
        name: "Instagram",
        designation: "@imanikadhikari",
        image: "/rounded-icon/instagram.png",
        url: "https://www.instagram.com/imanikadhikari",
    },
    {
        id: 3,
        name: "X (Twitter)",
        designation: "@imanikadhikari",
        image: "/rounded-icon/twitter.png",
        url: "https://twitter.com/imanikadhikari",
    },
    {
        id: 4,
        name: "LinkedIn",
        designation: "@anikadhikari",
        image: "/rounded-icon/linkedin.png",
        url: "https://www.linkedin.com/in/anikadhikari",
    },
    {
        id: 5,
        name: "GitHub",
        designation: "@anik-adhikari",
        image: "/rounded-icon/github.png",
        url: "https://github.com/anik-adhikari",
    },
    {
        id: 6,
        name: "Email",
        designation: "anikadhikari.dev@gmail.com",
        image: "/rounded-icon/email.png",
        url: "mailto:anikadhikari.dev@gmail.com",
    },
];

export default function About() {
    return (
        <section id="about">
            <Header
                title="About Me"
                subtitle="Learn more about my journey and experiences."
            />
            <BentoGrid className="max-w-4xl mx-auto auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const items = [
    {
        title: "My Tech Stack",
        description: "Explore the technologies and tools I excel in.",
        header: <DraggableCard />,
        className: "md:col-span-2",
        icon: <IconTools className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Who Am I?",
        description: "Yes, that's me! Get to know me better.",
        header: (
            <div className="w-full h-full overflow-hidden">
                <Image
                    src={profilePic}
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                />
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconMoodNerd className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "CV / Resume",
        description: "Download or view my Resume.",
        header: (
            <div
                className="w-full h-full overflow-hidden cursor-alias hover:opacity-80 transition"
                onClick={() =>
                    window.open(
                        "https://drive.google.com/drive/folders/156qBSJGXlwfYcQRr1emSJdxtx-EfwkKM?usp=sharing",
                        "_blank"
                    )
                }
            >
                <Image
                    src={resume}
                    alt="Resume"
                    className="w-full h-full object-cover"
                />
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconFileCv className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Stay Connected",
        description: "Connect with me on social media and stay updated!",
        header: (
            <div className="flex flex-row items-center justify-center mt-20 mb-10 w-full">
                <AnimatedTooltip items={socials} />
            </div>
        ),
        className: "md:col-span-2",
        icon: <IconLink className="h-4 w-4 text-neutral-500" />,
    },
];
