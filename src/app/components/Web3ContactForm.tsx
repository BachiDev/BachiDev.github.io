'use client'
import { useRef, useState } from 'react';
import { Button } from './Button';

export function Web3ContactForm() {
  const [result, setResult] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Please wait...");
    const formData = new FormData(e.currentTarget);

    formData.append("access_key", "13bb6870-31ec-4a08-a741-42c2d2bd80a3");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const jsonResponse = await response.json();
      if (response.status === 200) {
        setResult(jsonResponse.message);
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setResult(jsonResponse.message);
        setTimeout(() => {
          setResult("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setResult("Something went wrong!");
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-8 w-full max-w-lg mx-auto">
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
      <Button type="submit" className="mt-6 w-full">
        Send Message
      </Button>
      <p className="mt-4 text-center text-sm text-neutral-400">{result}</p>
    </form>
  );
}
