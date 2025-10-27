import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import Header from "./Header";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const socials = [
    {
        id: 1,
        name: "Telegram",
        designation: "@AnikAdhikari",
        image: "/rounded-icon/telegram.png",
        url: "https://t.me/AnikAdhikari"
    },
    {
        id: 2,
        name: "Instagram",
        designation: "@imanikadhikari",
        image: "/rounded-icon/instagram.png",
        url: "https://www.instagram.com/imanikadhikari"
    },
    {
        id: 3,
        name: "X (Twitter)",
        designation: "@imanikadhikari",
        image: "/rounded-icon/twitter.png",
        url: "https://twitter.com/imanikadhikari"
    },
    {
        id: 4,
        name: "LinkedIn",
        designation: "@anikadhikari",
        image: "/rounded-icon/linkedin.png",
        url: "https://www.linkedin.com/in/anikadhikari"
    },
    {
        id: 5,
        name: "GitHub",
        designation: "@anik-adhikari",
        image: "/rounded-icon/github.png",
        url: "https://github.com/anik-adhikari"
    },
    {
        id: 6,
        name: "Email",
        designation: "anikadhikari.dev@gmail.com",
        image: "/rounded-icon/email.png",
        url: "mailto:anikadhikari.dev@gmail.com"
    },
];

export default function About() {
    return (
        <section id="about">
            <Header
                title="About Me"
                subtitle="Learn more about my journey and experiences."
            />
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
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

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
    {
        title: "The Dawn of Innovation",
        description:
            "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: (
            <div className="flex flex-row items-center justify-center mt-20 mb-10 w-full">
                <AnimatedTooltip items={socials} />
            </div>
        ),
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
