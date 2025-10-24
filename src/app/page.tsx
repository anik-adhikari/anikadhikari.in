import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black flex justify-center items-center mx-auto min-h-screen px-5 sm:px-10">
      <div className="max-w-4xl mx-auto mb-35">
        <Hero/>
        <About/>
      </div>
    </main>
  );
}