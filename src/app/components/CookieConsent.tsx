'use client'
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center justify-between text-sm z-50">
      <p>This website uses cookies to ensure you get the best experience.</p>
      <button
        onClick={handleAccept}
        className="ml-4 px-3 py-1 bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
      >
        Got it!
      </button>
    </div>
  );
}