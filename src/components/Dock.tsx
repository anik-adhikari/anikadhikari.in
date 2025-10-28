import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBasketCode,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconExchange,
    IconHome,
    IconMessageCircleBolt,
    IconUser,
    IconWritingSign,
} from "@tabler/icons-react";

export function Dock() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "About Me",
            icon: (
                <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#changelog",
        },
        {
            title: "Projects",
            icon: (
                <IconBasketCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "Testimonials",
            icon: (
                <IconWritingSign className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#testimonials",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://twitter.com/imanikadhikari",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/anik-adhikari",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/anikadhikari",
        },
    ];
    return (
        <div>
            <FloatingDock
                desktopClassName="fixed bottom-8 left-1/2 -translate-x-1/2 z-100"
                mobileClassName="fixed bottom-8 right-8 z-100"
                items={links}
            />
        </div>
    );
}
