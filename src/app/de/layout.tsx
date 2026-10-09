import { HtmlLang } from "./html-lang";

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HtmlLang />
      {children}
    </>
  );
}
