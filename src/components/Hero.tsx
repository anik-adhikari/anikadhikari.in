import React from "react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { GridBackground } from "./ui/grid-background";

export default function Hero() {
    return (
        <section id="home">
            <div className="overflow-hidden relative h-[90vh] lg:h-screen">
                <GridBackground />
            </div>
        </section>
    );
}
