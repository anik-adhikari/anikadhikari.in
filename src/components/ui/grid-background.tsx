import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { FlipWords } from "./flip-words";
import { Spotlight } from "./spotlight-new";

export function GridBackground() {
    return (
        <div className="relative flex h-[50rem] w-full items-center justify-center flex-col bg-white dark:bg-black gap-8">
            <Spotlight />

            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

            {/* commented section */}
            <div>
                {/* pixelated image */}
                {/* <div className="mx-auto mt-8">
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
                    </div> */}
            </div>

            <div>
                <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl px-4">
                    Anik Adhikari
                </p>

                <div className="flex justify-center items-center px-4">
                    <div className="z-20 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                        I am
                        <FlipWords
                            words={[
                                "Software Engineer",
                                "Web Developer",
                                "Tech Enthusiast",
                                "Lifelong Learner",
                            ]}
                            className="inline-block mx-2 font-semibold text-neutral-900 dark:text-neutral-100"
                            duration={3000}
                        />
                        <br />
                        by profession and passion.
                    </div>
                </div>
            </div>

            <div>
                <button className="p-[3px] relative">
                    <a href="#about">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            Explore My Work
                        </div>
                    </a>
                </button>
            </div>
        </div>
    );
}
