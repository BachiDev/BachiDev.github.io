export function Footer() {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-start px-4 md:px-6  bg-neutral-900">
      <div id="imprint" className="text-xs text-neutral-400 text-center sm:text-left">
        <p>Imprint:</p>
        <p>Fabian Bachmayer</p>
        <p>Bernoullistraße 4/4/20</p>
        <p>1220 Vienna, Austria</p>
        <br/>
        <p>Email: bachiaidev@gmail.com</p>
        <br/>
        <p>Services in automatic data processing and information technology</p>
        <p>UID: ATU79961178</p>
        <p>Court of commercial registration: Commercial Court of Vienna</p>
        <p>Member of the Austrian Economic Chamber</p>
      </div>
      <p className="text-xs text-neutral-400 sm:ml-auto">© {new Date().getFullYear()} Fabian Bachmayer. All rights reserved.</p>
    </footer>
  );
}