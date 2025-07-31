import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section
      id="CallToActionSection"
      className="relative overflow-hidden py-20 min-h-[260px] h-80 bg-cover flex items-center justify-center"
      style={{
        backgroundImage: "url(/images/call-to-action-bg.svg)",
      }}
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        <div className="text-left w-full md:w-2/3">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-200 text-base md:text-lg max-w-xl">
            Join thousands of successful learners who have advanced their careers
            with our comprehensive skill development programs.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start lg:items-end lg:justify-end w-full md:w-auto lg:h-28 mt-6 md:mt-0 md:ml-8 flex-shrink-0">
          <button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#b16cea] to-[#ff5e69] text-white font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
            Start Now <ArrowRight className="h-5 w-5 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};