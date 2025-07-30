'use client'
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Services,
} from "./components";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}