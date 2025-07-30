'use client'
import {useState } from "react";
import Image from "next/image";
import { ServiceCard } from "./components/ServiceCard";
import { ProjectCard } from "./components/ProjectCard";

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-[100dvh] bg-neutral-950 text-neutral-50">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed top-0 w-full bg-neutral-950 bg-opacity-80 backdrop-blur-sm z-50">
        <a className="flex items-center justify-center" href="#">
          <Image src="/fb-logo.svg" alt="Fabian Bachmayer Logo" width={24} height={24} className="h-6 w-6 text-purple-400" />
          <span className="ml-2 text-lg font-semibold">Fabian Bachmayer</span>
        </a>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#projects">
            Projects
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About Me
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
        <button className="ml-auto md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Image src="/menu.svg" alt="Menu Icon" width={24} height={24} className="h-6 w-6" />
        </button>
      </header>
      {menuOpen && (
        <div className="fixed top-14 left-0 w-full bg-neutral-950 bg-opacity-95 z-40 md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#about" onClick={() => setMenuOpen(false)}>
              About Me
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full h-[100vh] flex flex-col items-center justify-center text-center px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Fabian Bachmayer
            </h1>
            <p className="mx-auto max-w-[700px] text-neutral-400 md:text-xl">
              Full-Stack Freelance Developer
            </p>
            <a href="https://bachidev.github.io/my-portfolio/" className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-colors w-full max-w-xs mx-auto">
              View My Portfolio
            </a>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900 flex flex-col items-center justify-center">
          <div className="max-w-screen-lg mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400">Services</h2>
                <p className="max-w-[900px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I offer a wide range of services to help you build your next digital product.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard 
                icon={<Image src="/code.svg" alt="Code Icon" width={40} height={40} className="w-10 h-10" />}
                title="Web Development"
                description="I build modern, responsive, and performant web applications using the latest technologies."
              />
              <ServiceCard 
                icon={<Image src="/smartphone.svg" alt="Smartphone Icon" width={40} height={40} className="w-10 h-10" />}
                title="Mobile Development"
                description="I create beautiful and user-friendly mobile apps for iOS and Android."
              />
              <ServiceCard 
                icon={<Image src="/pentool.svg" alt="Pen Tool Icon" width={40} height={40} className="w-10 h-10" />}
                title="UI/UX Design"
                description="I design intuitive and engaging user interfaces that provide a great user experience."
              />
            </div>
          </div>
        </section>
        
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900 flex flex-col items-center justify-center">
          <div className="max-w-screen-lg mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400">Projects</h2>
                <p className="max-w-[900px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;m passionate about building open-source projects. Here are some of my favorites.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-1 md:grid-cols-2">
              <ProjectCard
                title="Project C"
                description="A library that makes it easy to build command-line interfaces."
                link="#"
                stars={1200}
              />
              <ProjectCard
                title="Project D"
                description="A framework for building serverless applications."
                link="#"
                stars={850}
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center justify-center">
          <div className="max-w-screen-lg mx-auto px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400">About Me</h2>
                  <p className="max-w-[600px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;m a passionate full-stack developer with a love for creating beautiful and functional web and mobile applications. I have a strong background in both front-end and back-end technologies, and I&apos;m always eager to learn new things.
                  </p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold">My Skills</h3>
                    <div className="flex flex-wrap gap-4">
                        <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">React</span>
                        <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                        <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
                        <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                        <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                        <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">GraphQL</span>
                        <span className="bg-neutral-800 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">PostgreSQL</span>
                    </div>
                </div>
              </div>
              <img
                alt="About Me"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                height="550"
                src="https://placehold.co/550x550/0a0a0a/f5f5f5?text=Fabian+Bachmayer"
                width="550"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-900 flex flex-col items-center justify-center">
          <div className="max-w-screen-lg mx-auto px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-purple-400">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have a project in mind? Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-2">
                <input className="max-w-lg flex-1 bg-neutral-800 border-neutral-700 text-white px-4 py-2 rounded-md" placeholder="Name" type="text" />
                <input className="max-w-lg flex-1 bg-neutral-800 border-neutral-700 text-white px-4 py-2 rounded-md" placeholder="Email" type="email" />
                <textarea className="max-w-lg flex-1 bg-neutral-800 border-neutral-700 text-white px-4 py-2 rounded-md" placeholder="Message" rows={4} />
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-purple-400 px-8 text-sm font-medium text-neutral-950 shadow transition-colors hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-neutral-800">
        <p className="text-xs text-neutral-400">© 2025 Fabian Bachmayer. All rights reserved.</p>
        <div className="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="#" className="text-neutral-400 hover:text-purple-400">
                <Image src="/github.svg" alt="Github Icon" width={20} height={20} className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-purple-400">
                <Image src="/linkedin.svg" alt="Linkedin Icon" width={20} height={20} className="h-5 w-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-purple-400">
                <Image src="/twitter.svg" alt="Twitter Icon" width={20} height={20} className="h-5 w-5" />
            </a>
        </div>
      </footer>
    </div>
  );
}
