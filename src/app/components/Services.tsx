import Image from "next/image";
import { ServiceCard } from "./ServiceCard";
import { Container } from "./Container";

export function Services() {
  return (
    <Container id="services" className="bg-neutral-900 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="section-heading">Services</h2>
            <p className="max-w-[900px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I offer a wide range of services to help you build your next digital product.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard 
            icon={<Image src="/code.svg" alt="Code Icon" width={40} height={40} className="w-10 h-10 text-purple-400" />}
            title="Web Development"
            description="Building modern, responsive, and performant web applications with the latest technologies."
          />
          <ServiceCard 
            icon={<Image src="/smartphone.svg" alt="Smartphone Icon" width={40} height={40} className="w-10 h-10 text-purple-400" />}
            title="Mobile Development"
            description="Creating beautiful and user-friendly mobile apps for both iOS and Android platforms."
          />
          <ServiceCard 
            icon={<Image src="/pentool.svg" alt="Pen Tool Icon" width={40} height={40} className="w-10 h-10 text-purple-400" />}
            title="UI/UX Design"
            description="I design intuitive and engaging user interfaces that provide a great user experience."
          />
          <ServiceCard 
            icon={<Image src="/file.svg" alt="File Icon" width={40} height={40} className="w-10 h-10 text-purple-400" />}
            title="Requirement Analyses"
            description="I can help you define and document the requirements for your project to ensure a successful outcome."
          />
          <ServiceCard 
            icon={<Image src="/window.svg" alt="Window Icon" width={40} height={40} className="w-10 h-10 text-purple-400" />}
            title="Testing"
            description="Thoroughly testing your application to ensure it's bug-free and production-ready."
          />
          <ServiceCard 
            icon={<Image src="/globe.svg" alt="Globe Icon" width={40} height={40} className="w-10 h-10 text-purple-400" />}
            title="Database Management"
            description="I can help you design, build, and maintain your database to ensure it is scalable and secure."
          />
        </div>
    </Container>
  );
}