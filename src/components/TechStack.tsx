import Image from "next/image";
import awsImg from "../../public/skills-icon/aws.png";
import dockerImg from "../../public/skills-icon/docker.png";
import expressImg from "../../public/skills-icon/expressjs.png";
import firebaseImg from "../../public/skills-icon/firebase.png";
import gitImg from "../../public/skills-icon/git.png";
import githubImg from "../../public/skills-icon/github.png";
import javaImg from "../../public/skills-icon/java.png";
import javascript from "../../public/skills-icon/javascript.png";
import linuxImg from "../../public/skills-icon/linux.png";
import mongodbImg from "../../public/skills-icon/mongodb.png";
import mysqlImg from "../../public/skills-icon/mysql.png";
import nodejsImg from "../../public/skills-icon/nodejs.png";
import postgresql from "../../public/skills-icon/postgresql.png";
import pythonImg from "../../public/skills-icon/python.png";
import reactImg from "../../public/skills-icon/react.png";
import springbootImg from "../../public/skills-icon/springboot.png";
import { DraggableCardBody, DraggableCardContainer } from "./ui/draggable-card";

export function DraggableCard() {
    const items = [
        {
            title: "JavaScript",
            image: javascript,
            className: "absolute top-23 right-[19%] rotate-[-5deg]",
        },
        {
            title: "PostgreSQL",
            image: postgresql,
            className: "absolute bottom-9 left-[25%] rotate-[-9deg]",
        },
        {
            title: "Java",
            image: javaImg,
            className: "absolute top-0 left-[50%] rotate-[0deg]",
        },
        {
            title: "Git",
            image: gitImg,
            className: "absolute top-32 left-[55%] rotate-[10deg]",
        },
        {
            title: "Python",
            image: pythonImg,
            className: "absolute bottom-23 right-[19%] rotate-[-9deg]",
        },
        {
            title: "React",
            image: reactImg,
            className: "absolute top-24 left-[45%] rotate-[-7deg]",
        },
        {
            title: "Express.js",
            image: expressImg,
            className: "absolute top-7 right-[27%] rotate-[4deg]",
        },
        {
            title: "GitHub",
            image: githubImg,
            className: "absolute bottom-25 left-[28%] rotate-[-10deg]",
        },
        {
            title: "Linux",
            image: linuxImg,
            className: "absolute top-26 right-[7%] rotate-[6deg]",
        },
        {
            title: "AWS",
            image: awsImg,
            className: "absolute top-17 left-[15%] rotate-[0deg]",
        },
        {
            title: "MongoDB",
            image: mongodbImg,
            className: "absolute top-23 left-[33%] rotate-[-12deg]",
        },
        {
            title: "Node.js",
            image: nodejsImg,
            className: "absolute bottom-18 left-[40%] rotate-[8deg]",
        },
        {
            title: "Spring Boot",
            image: springbootImg,
            className: "absolute top-26 left-[7%] rotate-[-4deg]",
        },
        {
            title: "Docker",
            image: dockerImg,
            className: "absolute top-31 left-[88%] rotate-[4deg]",
        },
        {
            title: "MySQL",
            image: mysqlImg,
            className: "absolute top-22 left-[25%] rotate-[6deg]",
        },
        {
            title: "Firebase",
            image: firebaseImg,
            className: "absolute top-31 right-[90%] rotate-[-7deg]",
        },
    ];

    return (
        <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-clip">
            <p className="absolute top-2/3 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                If this is your first night at Fight Club, you have to fight.
            </p>
            {items.map((item, idx) => (
                <DraggableCardBody key={idx} className={item.className}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        className="pointer-events-none relative z-10 h-auto w-auto object-cover"
                    />
                    <h3 className="mt-2 text-center text-[8px] font-bold text-neutral-700 dark:text-neutral-300">
                        {item.title}
                    </h3>
                </DraggableCardBody>
            ))}
        </DraggableCardContainer>
    );
}
