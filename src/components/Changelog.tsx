import React from 'react'
import { Timeline } from './ui/timeline';

export default function Changelog() {
    const data = [
        {
            title: "Jul 2025 - Present",
            content: (
                <div>
                    <p className="mb-8 text-sm font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                        Master of Computer Applications (MCA) | Cloud Computing
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Chandigarh University | Punjab, India • Distance
                    </p>
                </div>
            ),
        },
        {
            title: "Sep 2024 - Present",
            content: (
                <div>
                    <p className="mb-8 text-sm font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                        Programmer | Full-time
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Tata Consultancy Services | Mumbai & Chennai, India
                    </p>
                </div>
            ),
        },
        {
            title: "Feb 2024 - Jun 2024",
            content: (
                <div>
                    <p className="mb-8 text-sm font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                        Backend Developer Intern | Internship
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Avinya NeuroTech | Telangana, India • Remote
                    </p>
                </div>
            ),
        },
        {
            title: "Aug 2021 - Jun 2024",
            content: (
                <div>
                    <p className="mb-8 text-sm font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                        Bachelor of Computer Applications (BCA)
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Netaji Subhash Engineering College | Kolkata, India
                    </p>
                </div>
            ),
        },
    ];
  return (
    <section id='changelog'>
        <div className="relative w-full overflow-clip mt-10 pt-10">
            <Timeline data={data} />
        </div>
    </section>
  )
}
