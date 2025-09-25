;
import { FaArrowUp } from "react-icons/fa";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`relative mt-24 border-t px-6 py-12 sm:py-16 md:py-24 ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700"
          : "bg-gradient-to-br from-gray-50 to-white text-gray-900 border-gray-200"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 sm:mb-8">
          Thank You for This{" "}
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>Opportunity</span>
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 px-2 sm:px-0 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          I am truly grateful for the chance to present this project.  
          It showcases my dedication to clean, scalable, and modern web development.  
          Thank you for reviewing my work — I hope it reflects my professionalism, creativity, and passion for building quality applications.
        </p>

        <div className="mt-8 sm:mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-full shadow-lg transition-transform duration-300 hover:scale-105 ${
              darkMode
                ? "bg-blue-700 hover:bg-blue-800 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            <FaArrowUp className="text-lg sm:text-xl" /> Back to Top
          </button>
        </div>

        <p className="mt-8 sm:mt-12 text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} — Built by{" "}
          <span className={darkMode ? "text-blue-400 font-semibold" : "text-blue-600 font-semibold"}>
            Aditya Gowala
          </span>{" "}
          using React + Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
