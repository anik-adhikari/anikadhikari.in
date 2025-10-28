import About from "@/components/About";
import Changelog from "@/components/Changelog";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black flex justify-center items-center mx-auto min-h-screen px-5 sm:px-10">
      <div className="max-w-4xl mb-35 overflow-x-hidden">
        <Hero/>
        <About/>
        <Changelog/>
        <Projects/>
        <Testimonials/>
        <Footer/>
      </div>
    </main>
  );
}