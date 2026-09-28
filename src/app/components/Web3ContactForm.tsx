"use client";
import { useRef, useState } from "react";
import { Button } from "./Button";
import { isContactFormEnabled, web3FormsKey } from "@/lib/env";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "success" | "error";

export function Web3ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  if (!isContactFormEnabled) {
    return (
      <p className="mt-8 text-center text-sm text-neutral-400">
        The contact form is currently unavailable. Please reach out directly at{" "}
        <a href={`mailto:${profile.email}`} className="text-purple-400 hover:underline">
          {profile.email}
        </a>
        .
      </p>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setResult("Sending…");
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", web3FormsKey);

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const jsonResponse = await response.json();
      if (response.ok) {
        setStatus("success");
        setResult("Message sent — I'll get back to you soon.");
        formRef.current?.reset();
      } else {
        setStatus("error");
        setResult(
          jsonResponse.message || "Something went wrong. Please try again or email me directly.",
        );
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setResult("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full">
      {/* Honeypot field for Web3Forms bot detection — must stay empty. */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="relative z-0">
          <input
            type="text"
            name="name"
            id="name"
            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-purple-400 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-400"
          >
            Your Name
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="email"
            name="email"
            id="email"
            className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-purple-400 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-400"
          >
            Your Email
          </label>
        </div>
      </div>
      <div className="relative z-0 mt-6">
        <textarea
          name="message"
          id="message"
          rows={5}
          className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-white focus:border-purple-400 focus:outline-none focus:ring-0 custom-scrollbar"
          placeholder=" "
          required
        ></textarea>
        <label
          htmlFor="message"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-purple-400"
        >
          Your Message
        </label>
      </div>
      <Button type="submit" disabled={status === "sending"} className="mt-6 w-full">
        {status === "sending" ? "Sending…" : "Send Message"}
      </Button>
      <p
        role="status"
        aria-live="polite"
        className={`mt-4 text-center text-sm ${status === "success" ? "text-emerald-400" : status === "error" ? "text-red-400" : "text-neutral-400"}`}
      >
        {result}
      </p>
    </form>
  );
}
