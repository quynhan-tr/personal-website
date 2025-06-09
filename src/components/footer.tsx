import { FiDownload } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full mt-20 pb-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <span className="text-md font-sans font-semibold mt-8 text-white uppercase tracking-wide">
          Get in touch
        </span>
        <div className="border border-dashed border-white/30 rounded-2xl px-6 py-4 mb-2">
          <a
            href="mailto:quynhanit@email.com"
            className="text-xl md:text-2xl font-serif text-white tracking-wide"
            style={{ letterSpacing: "0.02em" }}
          >
            quynhanit@email.com
          </a>
        </div>
        <div className="flex gap-6 mt-2">
          <a
            href="https://www.linkedin.com/in/quynhan05/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full px-7 py-2 text-white font-sans text-xs hover:bg-white hover:text-black transition"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/quynhan-tr"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full px-7 py-2 text-white font-sans text-xs hover:bg-white hover:text-black transition"
          >
            GITHUB
          </a>
          <a
            href="/An-Tran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full px-7 py-2 flex items-center gap-2 text-white font-sans text-xs hover:bg-white hover:text-black transition"
          >
            RESUME <FiDownload size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}