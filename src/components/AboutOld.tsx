import React from "react";
import Header from "./Header";
import Image from "next/image";
import { PixelatedCanvas } from "./ui/pixelated-canvas";

export default function About() {
    return (
        <section id="about">
            <Header title="About Me" />
            <div className="grid gap-8 m-8 p-8 items-center md:[grid-template-columns:1fr_1.5fr]">
                {/* <Image src='/about-pic.png' alt="Profile Picture" width={500} height={500} className="w-full h-80 md:h-120 object-cover rounded-lg"/> */}
                <div className="mx-auto mt-8">
                    <PixelatedCanvas
                        src="/profile-pic.png"
                        width={500}
                        height={500}
                        cellSize={3}
                        dotScale={0.9}
                        shape="square"
                        backgroundColor="#000000"
                        dropoutStrength={0.4}
                        interactive
                        distortionStrength={3}
                        distortionRadius={80}
                        distortionMode="swirl"
                        followSpeed={0.2}
                        jitterStrength={4}
                        jitterSpeed={4}
                        sampleAverage
                        tintColor="#FFFFFF"
                        tintStrength={0.2}
                        className="rounded-xl border border-neutral-800 shadow-lg"
                    />
                </div>

                <div className="md:text-xl text-neutral-600 dark:text-neutral-300 space-y-4">
                    <p>
                        Hi! 👋 I’m Anik Adhikari - a passionate learner and tech
                        enthusiast who thrives on exploring the unknown. I love
                        diving into new technologies and collaborating with
                        diverse individuals to create innovative solutions. My
                        goal is to develop impactful software, tools, and
                        systems that contribute positively to society and
                        enhance everyday life.
                    </p>
                    <p>
                        Driven by curiosity and a growth mindset, I am
                        constantly seeking opportunities to expand my knowledge
                        and make a meaningful difference in the tech world.
                        Let’s connect and share ideas!
                    </p>
                    <p>
                        When I’m not coding, you can find me exploring the
                        outdoors, reading sci-fi novels, or experimenting with
                        new recipes in the kitchen. I believe in a balanced life
                        and the power of continuous learning.
                    </p>
                    <p>
                        Feel free to reach out if you want to collaborate on a
                        project, discuss tech trends, or just say hi!
                    </p>
                </div>
            </div>
        </section>
    );
}
