'use client'
import { Container } from "./Container";
import { Web3ContactForm } from "./Web3ContactForm";

export function Contact() {
  
  return (
    <Container id="contact" className="bg-neutral-950 flex flex-col items-center justify-center">
      <div className="space-y-3 text-center">
        <h2 className="section-heading">Get in Touch</h2>
        <p className="max-w-[900px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Have a project in mind? I&apos;d love to hear from you.
        </p>
      </div>
      <Web3ContactForm/>
    </Container>
  );
}
