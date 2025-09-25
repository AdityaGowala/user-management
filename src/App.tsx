import { useState, useEffect } from "react";
import { Navbar } from "./Components/Navbar";
import Register from "./Components/InputField";
import toast, { Toaster } from "react-hot-toast";
import { DataTable } from "./Components/DataTable";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// User interface
export interface User {
  id: number;
  fullName: string;
  age: number;
  gender: string;
  role: string;
  email: string;
  password: string;
}

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) setUsers(JSON.parse(stored));
    setTimeout(() => setLoading(false), 500);
  }, []);

  const addUser = (user: User) => {
    setLoading(true);
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    toast.success("User added successfully!");
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Toaster position="top-right" reverseOrder={false} />

      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

      {/* Header */}
      <Header darkMode={darkMode} />

      {/* Main content */}
      <div className="pt-28 px-4 md:px-16 flex flex-col md:flex-row gap-8">
        {/* Register Form */}
        <div className="flex-shrink-0 w-full md:w-[500px]">
          <Register addUser={addUser} />
        </div>

        {/* DataTable */}
        <div className="flex-1 overflow-x-auto">
          <DataTable darkMode={darkMode} users={users} loading={loading} />
        </div>
      </div>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
