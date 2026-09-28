import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Process,
  Services,
  TechStack,
  WorkTeaser,
} from "./components";
import FloatingActionButton from "./components/FloatingActionButton";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <WorkTeaser />
        <About />
        <TechStack />
        <Process />
        <Contact />
        <FloatingActionButton href="https://github.com/BachiDev/BachiDev.github.io" />
      </main>
      <Footer />
    </div>
  );
}
