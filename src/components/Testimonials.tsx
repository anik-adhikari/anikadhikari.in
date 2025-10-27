import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Working with Anik has been inspiring. His ability to break down complex backend problems into elegant, scalable solutions is remarkable. He’s a dependable teammate who delivers quality work every time.",
            name: "Abhishek Mishra",
            designation: "Backend Developer, Strada Global",
            src: "/testimonials/abhishek.png",
        },
        {
            quote: "Anik combines technical expertise with a creative mindset. He’s the kind of developer who not only builds robust systems but also ensures they’re user-friendly and maintainable. A true problem solver.",
            name: "Aditya Panda",
            designation: "Freelancer",
            src: "/testimonials/aditya.png",
        },
        {
            quote: "His passion for backend engineering reflects in every project he takes up. Anik’s deep understanding of APIs and clean architecture makes him stand out as a dedicated and thoughtful developer.",
            name: "Anup Majumdar",
            designation: "Developer",
            src: "/testimonials/anup.png",
        },
        {
            quote: "Anik has a rare blend of technical depth and collaborative spirit. His ability to learn fast and contribute meaningfully to complex systems makes him an asset to any engineering team.",
            name: "Sourav Ghorai",
            designation: "System Engineer, TCS",
            src: "/testimonials/sourav.png",
        },
        {
            quote: "Incredibly detail-oriented and consistent, Anik brings analytical thinking and a disciplined approach to development, making every project he works on more organized, efficient, and impactful.",
            name: "Prajjwal Bose Munshi",
            designation: "Associate, Genpact",
            src: "/testimonials/prajjwal.png",
        },
        {
            quote: "His grasp of backend frameworks and databases is impressive. Anik approaches every task with clarity, ensuring logic and design align perfectly. A dependable developer with a learner’s mindset.",
            name: "Saptaswa Das",
            designation: "Backend Developer Intern, Pocket FM",
            src: "/testimonials/saptaswa.png",
        },
        {
            quote: "Anik’s technical understanding and problem-solving attitude make him a go-to person for backend and deployment issues. He’s always eager to share knowledge and help others grow alongside him.",
            name: "Shashikant Prasad",
            designation: "Assistant System Engineer, TCS",
            src: "/testimonials/shashikant.png",
        },
        {
            quote: "One of the most disciplined and skilled developers I’ve worked with, Anik’s commitment to writing clean, maintainable code and continuous learning truly reflects his passion for technology.",
            name: "Sourik Roy",
            designation: "System Engineer, TCS",
            src: "/testimonials/sourik.png",
        },
        {
            quote: "Anik is thoughtful, humble, and driven by curiosity. His dedication to continuous learning and creative approach to solving challenges truly define his character, both personally and professionally.",
            name: "Sudip Mondal",
            designation: "MA in Education, Vishwa Bharti University",
            src: "/testimonials/sudip.png",
        },
        {
            quote: "Enthusiastic about learning new technologies and applying them efficiently, Anik inspires others. His supportive nature and practical approach make him a great colleague to work with.",
            name: "Soham Goswami",
            designation: "Assistant System Engineer Trainee, TCS",
            src: "/testimonials/soham.png",
        },
        {
            quote: "Anik has a sharp analytical mind and an excellent sense of teamwork. His strong backend fundamentals and willingness to innovate make him a reliable and forward-thinking developer.",
            name: "Supriyo Sarkar",
            designation: "Programmer, TCS",
            src: "/testimonials/supriyo.png",
        },
    ];
    return (
        <section id="testimonials">
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </section>
    );
}
