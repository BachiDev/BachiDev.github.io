
import { Button } from "./Button";
import { Container } from "./Container";

export function Contact() {
  return (
    <Container id="contact" className="bg-neutral-900 flex flex-col items-center justify-center">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-purple-400">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="mt-8">
          <Button href="mailto:bachiaidev@gmail.com">
            Send me an Email
          </Button>
        </div>
    </Container>
  );
}
