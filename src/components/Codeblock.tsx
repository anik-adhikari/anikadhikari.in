"use client";

import { CodeBlock } from "./ui/code-block";

export function CodeBlockDemo() {
    const code = 
`{
    "success": true,
    "message": "Success",
    "statusCode": 200,
    "data": {
        "name": "Anik Adhikari",
        "title": "Backend-Focused Full-Stack Developer",
        "about": "Experienced in building scalable apps with skills in APIs, cloud, and DevOps.",
        "experience": {
            "current": "Programmer, TCS (Sep 2023 – Present)",
            "previous": "Backend Developer Intern, Avinya NeuroTech (Feb 2024 - Jun 2024)"
        },
        "education": [
            { "degree": "MCA - Cloud Computing", "institution": "Chandigarh University, Punjab"},
            { "degree": "BCA", "institution": "Netaji Subhash Engineering College, Kolkata" }
        ],
        "skills": ["MERN Stack", "Next.js", "Python", "PostgreSQL", "MySQL", "Docker", "AWS"],
        "projects": [
            { "name": "Xpress-init", "link": "https://github.com/anik-adhikari/xpress-init" },
            { "name": "Varta", "link": "https://github.com/anik-adhikari/varta" }
        ],
        "certifications": [
            { "name": "AWS Certified Developer – Associate", "validity": "Sep 2025 – Sep 2028" }
        ],
        "achievements": [
            "Finalist - Innovatrix Hackathon",
            "Event Organizer - GNX Tech Club, NSEC"
        ]
    }
}`;

    return (
        <div className="max-w-4xl mx-auto w-full">
            <CodeBlock
                language="json"
                filename="anikadhikari.json"
                highlightLines={[10, 17]}
                code={code}
            />
        </div>
    );
}
