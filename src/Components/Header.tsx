;

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  return (
    <header
      className={`pt-28 pb-20 ${darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-poppins font-extrabold leading-tight">
            User Registration
            <span className={darkMode ? "block text-blue-400" : "block text-blue-600"}>
              Management System
            </span>
          </h1>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6 ${darkMode ? "text-gray-300" : "text-gray-600"
              }`}
          >
            This project is designed to streamline the process of adding, storing, and managing users.
            Built with modern tools, it features real-time updates, responsive UI, and a professional
            dashboard for managing your data efficiently.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-24">

          {/* Feature 1 - Left Text, Right Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={darkMode ? "text-3xl md:text-4xl font-semibold text-white mb-6" : "text-3xl md:text-4xl font-semibold text-gray-900 mb-6"}>
                Seamless User Registration
              </h2>
              <p className={darkMode ? "text-gray-300 text-lg leading-relaxed mb-6" : "text-gray-600 text-lg leading-relaxed mb-6"}>
                The registration process is simple and secure. The form validates data in real-time,
                ensuring that only clean and correct information is submitted to the system.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  <span className={darkMode ? "text-gray-200" : "text-gray-800"}>
                    Live validation for accurate input
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  <span className={darkMode ? "text-gray-200" : "text-gray-800"}>
                    Mobile-friendly and fully responsive
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  <span className={darkMode ? "text-gray-200" : "text-gray-800"}>
                    Smooth and intuitive user experience
                  </span>
                </li>
              </ul>
            </div>

            <div className={darkMode ? "bg-blue-900 dark:bg-blue-800 rounded-2xl p-10 flex items-center justify-center min-h-[300px]" : "bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-10 flex items-center justify-center min-h-[300px]"}>
              <div className="text-center">
                <div className="w-28 h-28 md:w-36 md:h-36 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className={darkMode ? "w-16 h-16 md:w-20 md:h-20 text-blue-400" : "w-16 h-16 md:w-20 md:h-20 text-blue-600"}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className={darkMode ? "text-blue-300 font-medium" : "text-blue-700 font-medium"}>
                  Modern Registration Form
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 - Right Text, Left Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={darkMode ? "bg-purple-900 dark:bg-pink-900 rounded-2xl p-10 flex items-center justify-center min-h-[300px] md:order-1" : "bg-gradient-to-br from-purple-100 to-pink-200 rounded-2xl p-10 flex items-center justify-center min-h-[300px] md:order-1"}>
              <div className="text-center">
                <div className="w-28 h-28 md:w-36 md:h-36 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className={darkMode ? "w-16 h-16 md:w-20 md:h-20 text-purple-400" : "w-16 h-16 md:w-20 md:h-20 text-purple-600"}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                </div>
                <p className={darkMode ? "text-purple-300 font-medium" : "text-purple-700 font-medium"}>
                  Structured Data Display
                </p>
              </div>
            </div>

            <div className="md:order-2">
              <h2 className={darkMode ? "text-3xl md:text-4xl font-semibold text-white mb-6" : "text-3xl md:text-4xl font-semibold text-gray-900 mb-6"}>
                Professional User Dashboard
              </h2>
              <p className={darkMode ? "text-gray-300 text-lg leading-relaxed mb-6" : "text-gray-600 text-lg leading-relaxed mb-6"}>
                Manage all registered users effortlessly. Our table lets you sort, select, and view user details in real-time, providing a smooth and efficient experience for professional data management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                  <span className={darkMode ? "text-gray-200" : "text-gray-800"}>
                    Sortable columns for quick data organization
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                  <span className={darkMode ? "text-gray-200" : "text-gray-800"}>
                    Select multiple users with ease
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                  <span className={darkMode ? "text-gray-200" : "text-gray-800"}>
                    Smooth loading and real-time updates
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
