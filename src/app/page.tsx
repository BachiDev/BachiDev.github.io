'use client'
import { About, Contact, Footer, Header, Hero, Services, TechStack } from './components';
import FloatingActionButton from "./components/FloatingActionButton";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        
        <About />
        <TechStack />
        <Contact />
        <FloatingActionButton href="https://github.com/BachiDev/BachiDev.github.io" />
      </main>
      <Footer />
    </div>
  );
}