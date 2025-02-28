import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Showcase } from "@/components/sections/Showcase";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <Showcase />
      <About />
      <Contact />
    </main>
  );
}