"use client";
import { CodeBlock } from "./CodeBlock";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";


export default function Hero() {
    return (
        <section id="home">
            <div className="flex flex-row justify-center items-center overflow-hidden relative h-screen">
                <BackgroundRippleEffect/>
                <CodeBlock/>
            </div>
        </section>
    );
}
