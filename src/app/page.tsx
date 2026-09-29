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
      </main>
      <Footer />
    </div>
  );
}
