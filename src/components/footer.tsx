import { FiDownload } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full mt-12 md:mt-16 lg:mt-20 pb-8 md:pb-10 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-5 max-w-4xl mx-auto">
        <span className="text-sm md:text-md font-sans font-semibold mt-6 md:mt-8 text-white uppercase tracking-wide text-center">
          Get in touch
        </span>
        
        <div className="border border-dashed border-white/30 rounded-2xl px-4 md:px-6 pt-2 md:py-4 mb-1 md:mb-2 w-full max-w-md md:max-w-none md:w-auto">
          <a
            href="mailto:quynhanit@email.com"
            className="text-lg md:text-xl lg:text-2xl font-serif text-white tracking-wide block text-center break-all md:break-normal"
            style={{ letterSpacing: "0.02em" }}
          >
            quynhanit@email.com
          </a>
        </div>
        
        <div className="flex flex-row gap-3 md:gap-6 mt-1 md:mt-2 w-full sm:w-auto">
          <a
            href="https://www.linkedin.com/in/quynhan05/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full px-6 md:px-7 py-3 md:py-2 text-white font-sans text-xs hover:bg-white hover:text-black transition text-center min-h-[44px] flex items-center justify-center"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/quynhan-tr"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full px-6 md:px-7 py-3 md:py-2 text-white font-sans text-xs hover:bg-white hover:text-black transition text-center min-h-[44px] flex items-center justify-center"
          >
            GITHUB
          </a>
          <a
            href="/An-Tran.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white rounded-full px-6 md:px-7 py-3 md:py-2 flex items-center justify-center gap-2 text-white font-sans text-xs hover:bg-white hover:text-black transition min-h-[44px]"
          >
            <span>RESUME</span>
            <FiDownload size={16} className="md:w-[18px] md:h-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}