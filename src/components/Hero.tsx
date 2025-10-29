"use client";
import { CodeBlockDemo } from "./Codeblock";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { GridBackground } from "./ui/grid-background";

export default function Hero() {
    return (
        <section id="home">
            <div className="flex flex-row justify-center items-center overflow-hidden relative h-screen">
                {/* <GridBackground words={[
                                "Software Engineer",
                                "Web Developer",
                                "Freelancer",
                                "Tech Enthusiast",
                                "Lifelong Learner",
                            ]}/> */}
                <BackgroundRippleEffect/>
                <CodeBlockDemo/>
            </div>
        </section>
    );
}
