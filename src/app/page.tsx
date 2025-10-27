import About from "@/components/About";
import Changelog from "@/components/Changelog";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black flex justify-center items-center mx-auto min-h-screen px-5 sm:px-10">
      <div className="max-w-4xl mx-auto mb-35">
        <Hero/>
        <About/>
        <Changelog/>
        <Projects/>
        <Footer/>
      </div>
    </main>
  );
}